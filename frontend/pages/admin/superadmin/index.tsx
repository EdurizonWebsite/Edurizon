import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';

import AddMemberDialog from '@/components/admin/AddMemberDialog';
import { TransitionLink } from '@/utils/TransitionLink';
import Header from '@/components/admin/superadmin/header';
import { getAdminToken } from '@/utils/adminStorage';

interface AdminUser {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  country: string[];
  contactNo: string;
  createdAt: string;
  active: boolean;
}

interface Meeting {
  _id: string;
  title: string;
  dateTime: string;
  duration: number;
  meetLink: string;
  organizer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  participants: Array<{
    firstName: string;
    lastName: string;
    email: string;
  }>;
  status: 'scheduled' | 'completed' | 'cancelled';
}

const ITEMS_PER_PAGE = 5; // Number of items to show per page

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [teamMembers, setTeamMembers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filteredMembers, setFilteredMembers] = useState<AdminUser[]>([]);

  const [isAddMemberDialogOpen, setIsAddMemberDialogOpen] = useState(false);
  const [pendingLeadsCount, setPendingLeadsCount] = useState(0);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [selectedMemberAttendance, setSelectedMemberAttendance] = useState<AdminUser | null>(null);
  const [attendanceData, setAttendanceData] = useState<any[]>([]);
  const [attendanceLoading, setAttendanceLoading] = useState(false);

  const tabs = ['All', 'Super Admin','Counsellor Admin','Counseling', 'Digital','Document Management','Finance' ];

  useEffect(() => {
    fetchTeamMembers();
    fetchPendingLeadsCount();
  }, []);

  useEffect(() => {
    filterMembers();
  }, [activeTab, teamMembers]);

  const fetchTeamMembers = async () => {
    try {
      const token = getAdminToken();
      if (!token) return;
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      const response = await axios.get(`${baseUrl}/api/admin/users`, {
        headers: {
          Authorization: authToken,
        },
      });

      if (response.data.status === 'success') {
        const sorted = [...response.data.data].sort((a: AdminUser, b: AdminUser) => {
          const nameA = `${a.firstName || ''} ${a.lastName || ''}`.trim().toLowerCase();
          const nameB = `${b.firstName || ''} ${b.lastName || ''}`.trim().toLowerCase();
          if (nameA && nameB) return nameA.localeCompare(nameB);
          return (a.email || '').toLowerCase().localeCompare((b.email || '').toLowerCase());
        });
        setTeamMembers(sorted);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  

  const fetchPendingLeadsCount = async () => {
    try {
      const token = getAdminToken();
      if (!token) return;

      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      const response = await axios.get(`${baseUrl}/api/admin/consultation/pending`, {
        headers: { 
          Authorization: authToken
        }
      });

      if (response.data.success) {  
        setPendingLeadsCount(response.data.data.length);
      }
    } catch (err) {
      console.error('Failed to fetch pending leads count:', err);
    }
  };

  const fetchAttendanceData = async (adminId: string) => {
    try {
      setAttendanceLoading(true);
      const token = getAdminToken();
      if (!token) return;
      const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      const response = await axios.get(`${baseUrl}/api/attendance/admin/${adminId}`, {
        headers: {
          Authorization: authToken,
        },
      });

      if (response.data.success) {
        setAttendanceData(response.data.data.attendance);
      }
    } catch (err: any) {
      console.error('Failed to fetch attendance:', err);
      setError(err.response?.data?.message || 'Failed to fetch attendance data');
    } finally {
      setAttendanceLoading(false);
    }
  };

  const handleViewAttendance = (member: AdminUser) => {
    setSelectedMemberAttendance(member);
    setShowAttendanceModal(true);
    fetchAttendanceData(member._id);
  };

  const filterMembers = () => {
    if (!teamMembers) return;

    let filtered = teamMembers;
    
    // Filter based on active tab
    switch (activeTab.toLowerCase()) {
      case 'super admin':
        filtered = teamMembers.filter(member => member.role === 'super-admin');
        break;
      case 'counseling':
        filtered = teamMembers.filter(member => member.role === 'counsellor');
        break;
      case 'finance':
        filtered = teamMembers.filter(member => member.role === 'finance');
        break;
      case 'digital':
        filtered = teamMembers.filter(member => member.role === 'digitalMarketing');
        break;
      case 'document management':
        filtered = teamMembers.filter(member => member.role === 'documentHandler');
        break;
      case 'counsellor admin':
        filtered = teamMembers.filter(member => member.role === 'counsellorAdmin');
        break;
      default:
        filtered = teamMembers;
    }

    setFilteredMembers(filtered);
  };

  const toggleAccess = async (userId: string, currentStatus: boolean) => {
    try {
      const token = getAdminToken();
      if (!token) return;
      await axios.patch(
        `${baseUrl}/api/admin/users/${userId}/toggle-access`,
        { active: !currentStatus },
        {
          headers: {
            Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}`,
          },
        }
      );

      // Update local state
      setTeamMembers(prev =>
        prev.map(member =>
          member._id === userId ? { ...member, active: !currentStatus } : member
        )
      );
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to toggle access');
    }
  };

  const removeMember = async (userId: string) => {
    if (!window.confirm('Are you sure you want to remove this team member?')) return;

    try {
      const token = getAdminToken();
      if (!token) return;
      await axios.delete(`${baseUrl}/api/admin/users/${userId}`, {
        headers: {
          Authorization: token.startsWith('Bearer ') ? token : `Bearer ${token}`,
        },
      });

      // Update local state
      setTeamMembers(prev => prev.filter(member => member._id !== userId));
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to remove team member');
    }
  };

  // Calculate pagination values
  const totalItems = filteredMembers.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredMembers.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of visible page buttons
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  // Reset to first page when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);


  const handleImpersonate = async (id:any) => {
    try {
      const adminToken = getAdminToken();
      if (!adminToken) return;
      const res = await axios.post(`${baseUrl}/api/admin/impersonate/${id}`, {}, {
        headers: { Authorization: adminToken.startsWith('Bearer ') ? adminToken : `Bearer ${adminToken}` }
      });
  
      const { token: impersonatedToken, user } = res.data;
      const newWindow = window.open("/admin", "_blank");

      if (!newWindow) {
        console.error("Unable to open impersonated admin window.");
        return;
      }

      // Try immediately in case the document is already ready.
      const persistSession = () => {
        newWindow.sessionStorage.setItem("adminToken", impersonatedToken);
        newWindow.sessionStorage.setItem("adminData", JSON.stringify(user));
      };

      try {
        persistSession();
      } catch (error) {
        // Fallback: poll until the new window's sessionStorage is available.
        const timer = setInterval(() => {
          if (newWindow.closed) {
            clearInterval(timer);
            return;
          }
          try {
            persistSession();
            clearInterval(timer);
          } catch {
            // Keep trying until sessionStorage is ready or window closes.
          }
        }, 100);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <div className="py-4 sm:py-6 min-w-0">
    
        <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-[100vw]">
          <Header/>

          

          {/* Team Section */}
          <div className="mt-6 sm:mt-8">
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Team Details</h2>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    {/* <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
                      Team Call
                    </button> */}
                    <Link href="/admin/superadmin/tasks/create" className="w-full sm:w-auto">
                      <button
                        className="w-full sm:w-auto bg-white border border-teal-600 text-teal-700 px-4 py-2 rounded-md hover:bg-teal-50 flex items-center justify-center"
                      >
                        New Task/Update
                      </button>
                    </Link>
                    <button
                      onClick={() => setIsAddMemberDialogOpen(true)}
                      className="w-full sm:w-auto bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 flex items-center justify-center"
                    >
                      <span className="mr-2">+</span>
                      Add Member
                    </button>
                  </div>
                </div>

                {/* Team Tabs */}
                <div className="mb-6 -mx-4 sm:mx-0">
                  <div className="border-b border-gray-200 overflow-x-auto">
                    <nav className="-mb-px flex gap-4 sm:gap-8 px-4 sm:px-0 min-w-0">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`${
                            activeTab === tab
                              ? 'border-teal-500 text-teal-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                          } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                        >
                          {tab}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-md">
                    {error}
                  </div>
                )}

                {/* Team Table */}
                <div className="overflow-x-auto">
                  {loading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                    </div>
                  ) : (
                    <table className="min-w-full">
                      <thead className="bg-teal-600 text-white">
                        <tr>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Member name</th>
                          {activeTab === 'Counseling' && <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Country</th>}
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Contact No.</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Joining Date</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Login-Access</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold">Remove</th>
                          <th className='px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold'>View</th>
                          <th className='px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold'>Attendance</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map((member) => (
                          <tr key={member._id} className="hover:bg-gray-50">
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="sm:ml-4 min-w-0">
                                  <div className="text-sm font-medium text-gray-900">
                                    {member.firstName} {member.lastName}
                                  </div>
                                  <div className="text-xs sm:text-sm text-gray-500 truncate max-w-[12rem] sm:max-w-none">{member.email}</div>
                                </div>
                              </div>
                            </td>
                            {activeTab === 'Counseling' && (
                              <td className="px-3 sm:px-6 py-4 text-sm text-gray-500 max-w-[10rem] sm:max-w-none">
                                <span className="line-clamp-2 sm:line-clamp-none">{member.country.join(', ')}</span>
                              </td>
                            )}
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {member.contactNo}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {member.createdAt 
                                ? new Date(member.createdAt).toLocaleDateString()
                                : 'N/A'
                              }
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => toggleAccess(member._id, member.active)}
                                className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                                  member.active
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {member.active ? 'Access' : 'No Access'}
                              </button> 
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => removeMember(member._id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </td>
                            <td className='px-3 sm:px-6 py-4 whitespace-nowrap'>
                            <div className="relative">
                              <button
                                onClick={()=>{handleImpersonate(member._id)}}
                                className="bg-teal-100 text-teal-800 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
                            >
                              View
                            </button>
                          </div>
                            </td>
                            <td className='px-3 sm:px-6 py-4 whitespace-nowrap'>
                            <div className="relative">
                              <button
                                onClick={() => handleViewAttendance(member)}
                                className="bg-blue-100 text-blue-800 px-3 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
                              >
                                Attendance
                              </button>
                            </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-center sm:justify-end mt-4 gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-md ${
                        currentPage === 1
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {getPageNumbers().map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === pageNumber
                            ? 'bg-teal-600 text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-md ${
                        currentPage === totalPages
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <span className="w-full sm:w-auto text-center sm:text-left sm:ml-4 text-sm text-gray-600 basis-full sm:basis-auto">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Member Dialog */}
      <AddMemberDialog
        isOpen={isAddMemberDialogOpen}
        onClose={() => setIsAddMemberDialogOpen(false)}
        onSuccess={() => {
          fetchTeamMembers();
        }}
      />

      {/* Attendance Modal */}
      {showAttendanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start gap-3 mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 min-w-0 flex-1 pr-2">
                  Attendance - {selectedMemberAttendance?.firstName} {selectedMemberAttendance?.lastName}
                </h2>
                <button
                  onClick={() => setShowAttendanceModal(false)}
                  className="text-gray-400 hover:text-gray-600 shrink-0"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {attendanceLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {attendanceData.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No attendance records found
                    </div>
                  ) : (
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Date</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Login Time</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Logout Time</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Duration</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">IP Address</th>
                          <th className="px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-900">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {attendanceData.map((record, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                              {new Date(record.date).toLocaleDateString()}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                              {new Date(record.loginTime).toLocaleString()}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                              {record.logoutTime ? new Date(record.logoutTime).toLocaleString() : 'Still Active'}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                              {record.sessionDuration ? `${record.sessionDuration} minutes` : 'N/A'}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                              {record.ipAddress}
                            </td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                record.isActive 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {record.isActive ? 'Active' : 'Completed'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard; 