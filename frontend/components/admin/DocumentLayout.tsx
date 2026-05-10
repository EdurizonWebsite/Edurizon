import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import CameraIcon from '@mui/icons-material/Camera';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import BreadcrumbAdmin from '@/components/BreadcumbAdmin';
import MeetingSuccessModal from './MeetingSuccessModal';
import MeetingSchedulerModal from './MeetingSchedulerModal';
import ScheduledMeetingsModal from './ScheduledMeetingsModal';
import { clearAdminAuth, getAdminData, getAdminToken } from '@/utils/adminStorage';
import { useSearch } from '@/context/SearchContext';
interface AdminData {
  role: string;
  _id?: string;
  firstName?: string;
  [key: string]: any;
}

interface AdminTask {
  _id: string;
  messageDetail: string;
  taskType?: 'Task' | 'Update';
  deadline: string;
  assignedBy?: {
    name?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
  assignedTo: {
    adminId: string;
    isRead: boolean;
    isDeleted: boolean;
  }[];
  status: 'Pending' | 'Completed' | 'Overdue';
}

export default function Layout({ children, navItems }: { children: React.ReactNode, navItems: Array<{ href: string, icon: React.ReactNode, label: string,  }> }) {
  const { pathname } = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showScheduledMeetingsModal, setShowScheduledMeetingsModal] = useState(false);
  const [scheduledMeeting, setScheduledMeeting] = useState<any>(null);
  const [showMeetingDropdown, setShowMeetingDropdown] = useState(false);
  const [tasks, setTasks] = useState<AdminTask[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [notificationsError, setNotificationsError] = useState<string | null>(null);
  const [replyingTaskId, setReplyingTaskId] = useState<string | null>(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [urgentGeneralTasks, setUrgentGeneralTasks] = useState<AdminTask[]>([]);
  const [showUrgentModal, setShowUrgentModal] = useState(false);
  const [activeNotificationTab, setActiveNotificationTab] = useState<'Task' | 'Update'>('Task');
  // Fetch Data of Admin from local Storage
  useEffect(() => {
    const storedAdmin = getAdminData<AdminData>();
    if (storedAdmin) {
      setAdminData(storedAdmin);
    }
  }, []);

  const calculateUnreadCount = (taskList: AdminTask[], adminId?: string) => {
    if (!adminId) return 0;
    let count = 0;
    taskList.forEach((task) => {
      const entry = task.assignedTo.find(
        (assigned) => assigned.adminId === adminId && !assigned.isDeleted
      );
      if (entry && !entry.isRead) {
        count += 1;
      }
    });
    return count;
  };

  const isDeadlineImminent = (deadline?: string) => {
    if (!deadline) return false;
    const deadlineDate = new Date(deadline);
    const now = new Date();
    const diff = deadlineDate.getTime() - now.getTime();
    return diff > 0 && diff <= 24 * 60 * 60 * 1000;
  };

  const computeUrgentGeneralTasks = (taskList: AdminTask[], adminId?: string) => {
    if (!adminId) return [];
    return taskList.filter((task) => {
      const type = task.taskType || 'Task';
      if (type !== 'Task') return false;
      if (!task.deadline) return false;

      const entry = task.assignedTo.find(
        (assigned) => assigned.adminId === adminId && !assigned.isDeleted && !assigned.isRead
      );
      if (!entry) return false;

      return isDeadlineImminent(task.deadline);
    });
  };

  const fetchTasks = async () => {
    try {
      setNotificationsLoading(true);
      setNotificationsError(null);
      const token = getAdminToken();
      if (!token) return;

      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      const res = await axios.get(`${baseUrl}/api/admin/tasks/me`, {
        headers: { Authorization: authToken },
      });

      const fetchedTasks: AdminTask[] = res.data || [];
      setTasks(fetchedTasks);
      const adminId = adminData?._id;
      setUnreadCount(calculateUnreadCount(fetchedTasks, adminId));

      const urgent = computeUrgentGeneralTasks(fetchedTasks, adminId);
      setUrgentGeneralTasks(urgent);
      setShowUrgentModal(urgent.length > 0);
    } catch (error: any) {
      console.error('Failed to fetch tasks:', error);
      setNotificationsError(error?.response?.data?.message || 'Failed to load tasks.');
    } finally {
      setNotificationsLoading(false);
    }
  };

  useEffect(() => {
    if (adminData?._id) {
      fetchTasks();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminData?._id]);

  const handleToggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    if (!showNotifications && tasks.length === 0) {
      fetchTasks();
    }
  };

  const handleMarkAsRead = async (taskId: string) => {
    try {
      const token = getAdminToken();
      if (!token) return;
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      await axios.patch(`${baseUrl}/api/admin/tasks/read/${taskId}`, {}, { headers: { Authorization: authToken } });

      // Optimistically update local state and unread count
      setTasks((prev) => {
        const updated = prev.filter((t) => t._id !== taskId);
        const adminId = adminData?._id;
        setUnreadCount(calculateUnreadCount(updated, adminId));
        setUrgentGeneralTasks((prevUrgent) =>
          prevUrgent.filter((t) => t._id !== taskId)
        );
        return updated;
      });
    } catch (error) {
      console.error('Failed to mark task as read:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      const token = getAdminToken();
      if (!token) return;
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      await axios.patch(`${baseUrl}/api/admin/tasks/delete/${taskId}`, {}, { headers: { Authorization: authToken } });
      fetchTasks();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleOpenReply = (taskId: string) => {
    setReplyingTaskId(taskId);
    setReplyMessage('');
  };

  const handleCloseReply = () => {
    setReplyingTaskId(null);
    setReplyMessage('');
  };

  const handleSubmitReply = async () => {
    if (!replyingTaskId || !replyMessage.trim()) return;
    try {
      const token = getAdminToken();
      if (!token) return;
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      await axios.post(
        `${baseUrl}/api/admin/tasks/reply/${replyingTaskId}`,
        { replyMessage },
        { headers: { Authorization: authToken } }
      );
      handleCloseReply();
      fetchTasks();
    } catch (error) {
      console.error('Failed to submit reply:', error);
    }
  };

  const getMessageSnippet = (message: string) => {
    if (!message) return '';
    return message.length > 70 ? `${message.slice(0, 67)}...` : message;
  };

  const getAssignedByName = (task: AdminTask) => {
    const assigned = task.assignedBy;
    if (!assigned) return 'Super Admin';
    if (assigned.firstName || assigned.lastName) {
      return `${assigned.firstName || ''} ${assigned.lastName || ''}`.trim() || assigned.email || 'Super Admin';
    }
    if (assigned.name) return assigned.name;
    return assigned.email || 'Super Admin';
  };

  const isTaskUnread = (task: AdminTask) => {
    const adminId = adminData?._id;
    if (!adminId) return false;
    const entry = task.assignedTo.find((assigned) => assigned.adminId === adminId);
    return !!(entry && !entry.isDeleted && !entry.isRead);
  };

  // Handle logout
  const handleLogout = () => {
    clearAdminAuth();
    router.push('/admin');
  };  
  const handleMeetingSuccess = (meeting: any) => {
    setScheduledMeeting(meeting);
    setShowSuccessModal(true);
  };
   // Close dropdown when clicking outside (but not on hover)
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.meeting-dropdown-container')) {
        setShowMeetingDropdown(false);
      }
    };

    if (showMeetingDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMeetingDropdown]);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col lg:flex-row">

      {mobileNavOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Side Bar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] shrink-0 bg-adminBgChosen text-white flex flex-col min-h-screen transition-transform duration-200 ease-out lg:translate-x-0 ${
          mobileNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
              <div className="flex justify-end p-3 lg:hidden">
                <button
                  type="button"
                  aria-label="Close menu"
                  className="p-2 rounded-md hover:bg-white/10 text-white"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <CloseIcon style={{ fontSize: 24 }} />
                </button>
              </div>
              <div className=' mx-auto flex-1 flex flex-col w-full px-3'>
                <div className="mt-4 lg:mt-[48px] text-2xl font-bold"><p className='text-center'>EDURIZON</p></div>
                <nav className="mt-8 lg:mt-[40px] mb-8 lg:mb-[228px] flex flex-col gap-[16px] items-stretch">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
                      <button className={`w-full max-w-[224px] mx-auto py-[12px] px-[16px] rounded-[4px] text-white flex gap-[12px] hover:bg-adminGreenChosen 
                          ${pathname === item.href ? "bg-adminGreenChosen font-semibold" : "font-medium"}`}>
                        {item.icon} <span className="truncate">{item.label}</span>
                      </button>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mx-auto mt-auto mb-8 lg:mb-[10vw] px-3 w-full flex justify-center">
                <button onClick={handleLogout} className={`w-full max-w-[224px] py-[12px] px-[16px] rounded-[4px]  text-white bg-[rgba(255,255,255,0.08)]  flex gap-[12px] hover:bg-adminGreenChosen  ${pathname=='/admin/counsellor/create-sessions'?"bg-adminGreenChosen font-semibold":"font-medium"}`}>
                     <LogoutIcon className='w-[24px] h-[24px]' /> Logout
                </button>

                {/* <div className="mt-[76px] text-sm">
                  <div className="flex items-center space-x-2">
                    <img src="https://via.placeholder.com/40" className="rounded-full w-10 h-10" />
                    <div>
                      <div className="font-medium">Username</div>
                      <div className="text-xs text-gray-400">View profile</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-auto bg-[#F4F5F7]">

        {/* Navbar */}
        <nav className='border-b-2 border-[#E8E8E8] px-4 py-4 sm:px-6 sm:py-5 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center'>
            <div className="flex items-start sm:items-center gap-2 min-w-0 flex-1">
              <button
                type="button"
                className="lg:hidden shrink-0 p-2 -ml-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Open navigation menu"
                onClick={() => setMobileNavOpen(true)}
              >
                <MenuIcon style={{ fontSize: 28, color: '#333' }} />
              </button>
              <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-1 sm:gap-2 min-w-0">
                <h4 className='font-bold text-h5Text truncate'>Hello, {adminData?.firstName}</h4>
                <Image src="/assets/Images/admin/double-chevron-right.svg" width={20} height={20} className='hidden sm:block shrink-0 w-5 h-5' alt='arrow down icon' />
                <BreadcrumbAdmin role={adminData?.role}/>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-end lg:ml-auto shrink-0">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleToggleNotifications}
                  className="relative focus:outline-none"
                >
                  <NotificationsIcon style={{ fontSize: '32px', color: '#666666' }} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-500 text-white">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-[min(100vw-2rem,20rem)] max-w-sm bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="px-4 py-2 border-b flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-800">Tasks & Updates</span>
                      {notificationsLoading && (
                        <span className="text-[10px] text-gray-400">Loading...</span>
                      )}
                    </div>
                    {notificationsError && (
                      <div className="px-4 py-2 text-xs text-red-600 bg-red-50">
                        {notificationsError}
                      </div>
                    )}
                    <div className="max-h-80 overflow-y-auto">
                      {/* Tabs for Tasks vs Updates */}
                      <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-gray-100">
                        <button
                          type="button"
                          onClick={() => setActiveNotificationTab('Task')}
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            activeNotificationTab === 'Task'
                              ? 'bg-teal-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Tasks
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveNotificationTab('Update')}
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            activeNotificationTab === 'Update'
                              ? 'bg-teal-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Updates
                        </button>
                      </div>

                      {tasks.length === 0 && !notificationsLoading ? (
                        <div className="px-4 py-4 text-sm text-gray-500">
                          No tasks or updates assigned to you.
                        </div>
                      ) : (
                        <>
                          <div className="px-4 pt-3 pb-2 text-[10px] font-semibold text-gray-500 grid grid-cols-[2fr,1fr,1fr] gap-2 uppercase">
                            <span>Message</span>
                            <span>Sent By</span>
                            <span>Deadline</span>
                          </div>
                          {tasks
                            .filter(
                              (task) =>
                                (task.taskType || 'Task') === activeNotificationTab
                            )
                            .map((task) => (
                            <div
                              key={task._id}
                              className={`px-4 py-3 border-b last:border-b-0 ${
                                isTaskUnread(task) ? 'bg-teal-50' : 'bg-white'
                              }`}
                            >
                              <div className="grid grid-cols-[2fr,1fr,1fr] gap-2">
                                <div>
                                  <p
                                    className={`text-sm ${
                                      isTaskUnread(task)
                                        ? 'font-semibold text-gray-900'
                                        : 'text-gray-800'
                                    }`}
                                  >
                                    {getMessageSnippet(task.messageDetail)}
                                  </p>
                                </div>
                                <div className="text-sm font-medium text-gray-700">
                                  {getAssignedByName(task)}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'N/A'}
                                </div>
                              </div>
                              <div className="mt-2 flex items-center justify-end gap-2">
                                {isTaskUnread(task) && (
                                  <button
                                    onClick={() => handleMarkAsRead(task._id)}
                                    className="text-[11px] text-teal-700 hover:text-teal-900"
                                  >
                                    {(task.taskType || 'Task') === 'Task'
                                      ? 'Done'
                                      : 'Mark as read'}
                                  </button>
                                )}
                                <button
                                  onClick={() => handleOpenReply(task._id)}
                                  className="text-[11px] text-blue-600 hover:text-blue-800"
                                >
                                  Reply
                                </button>
                                <button
                                  onClick={() => handleDeleteTask(task._id)}
                                  className="text-[11px] text-red-500 hover:text-red-700"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div 
            className="relative meeting-dropdown-container group"
            onMouseEnter={() => setShowMeetingDropdown(true)}
            onMouseLeave={() => setShowMeetingDropdown(false)}
          >
            <CameraIcon 
              className='cursor-pointer hover:opacity-80 transition-opacity' 
              style={{fontSize: '40px', color: '#666666' }}
              onClick={() => setShowMeetingDropdown(!showMeetingDropdown)}
            />
            
            {/* Dropdown Menu */}
            {showMeetingDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowMeetingModal(true);
                      setShowMeetingDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>Schedule Meeting</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowScheduledMeetingsModal(true);
                      setShowMeetingDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>View Scheduled Meetings</span>
                  </button>
                </div>
              </div>
            )}
          </div>
            </div>
            <div className='w-full lg:w-[340px] lg:shrink-0 lg:ml-4 bg-white rounded-[16px] h-[48px] overflow-hidden flex'>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className='w-full  h-full outline-none px-[12px] text-smallText min-w-0' 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <SearchIcon className='ml-auto my-auto mr-[12px] shrink-0' style={{fontSize: '32px', color: '#666666'}}/>
            </div>
        </nav>

        {/* Children */}
        {children}

        {/* Urgent general tasks (Tasks due within 24 hours and unread) */}
        {showUrgentModal && urgentGeneralTasks.length > 0 && (
          <div className="fixed bottom-4 right-4 z-40 max-w-md w-full">
            <div className="bg-white shadow-lg rounded-lg border border-yellow-300">
              <div className="px-4 py-3 border-b border-yellow-200 flex items-center justify-between bg-yellow-50 rounded-t-lg">
                <div>
                  <p className="text-sm font-semibold text-yellow-800">
                    Urgent Tasks Due Soon
                  </p>
                  <p className="text-xs text-yellow-700">
                    You have tasks due within the next 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setShowUrgentModal(false)}
                  className="text-yellow-700 hover:text-yellow-900 text-sm font-semibold"
                  type="button"
                >
                  ✕
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {urgentGeneralTasks.map((task) => (
                  <div key={task._id} className="px-4 py-3 border-b last:border-b-0 border-yellow-100">
                    <p className="text-sm font-semibold text-gray-900">
                      {getMessageSnippet(task.messageDetail)}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      Assigned by:{' '}
                      <span className="font-medium text-gray-800">
                        {getAssignedByName(task)}
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      Deadline:{' '}
                      <span className="font-medium text-gray-800">
                        {task.deadline
                          ? new Date(task.deadline).toLocaleString()
                          : 'N/A'}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

         {/* Meeting Scheduler Modal */}
         <MeetingSchedulerModal
          isOpen={showMeetingModal}
          onClose={() => setShowMeetingModal(false)}
          onSuccess={handleMeetingSuccess}
          adminData={adminData}
        />

        {/* Meeting Success Modal */}
        <MeetingSuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          scheduledMeeting={scheduledMeeting}
        />

        {/* Scheduled Meetings Modal */}
        <ScheduledMeetingsModal
          isOpen={showScheduledMeetingsModal}
          onClose={() => setShowScheduledMeetingsModal(false)}
          adminData={adminData}
        />
        {replyingTaskId && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
              <div className="px-4 py-3 border-b flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-900">Reply to Task / Update</h3>
                <button
                  onClick={handleCloseReply}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 space-y-3">
                <textarea
                  rows={4}
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Type your reply here..."
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCloseReply}
                    className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitReply}
                    className="px-3 py-1.5 text-xs rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-60"
                    disabled={!replyMessage.trim()}
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}


