import React, { useState,useEffect, useRef } from 'react'
import DocumentLayout from '@/components/admin/DocumentLayout'
import AdminTable from '@/components/admin/AdminTable';
import { TransitionLink } from '@/utils/TransitionLink';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import { getAdminData } from '@/utils/adminStorage';
const navItems = [
    {
      href: "/admin/digital",
      icon: <GridViewIcon />,
      label: "Overview",
    }
  ]

// Utility to check if a given deadline is within the next 24 hours (future only)
const isDeadlineImminent = (deadlineDate: string | Date | null | undefined): boolean => {
    if (!deadlineDate) return false;

    const deadline = new Date(deadlineDate);
    if (Number.isNaN(deadline.getTime())) return false;

    const nowMs = Date.now();
    const deadlineMs = deadline.getTime();
    const diffMs = deadlineMs - nowMs;

    // Future deadline within the next 24 hours
    return diffMs > 0 && diffMs < 24 * 60 * 60 * 1000;
};

const DigitalTeam = () => {
    const [searchTerm, setSearchTerm] = useState('');
     // Table Data
    
    const [adminData, setAdminData] = useState<any>(null);
    useEffect(() => {
        const storedAdmin = getAdminData();
        setAdminData(storedAdmin || null);
      }, []);
    

    return (
    <div>
      <DocumentLayout navItems={navItems} >
        <div>
            {
                adminData?.role=='super-admin'?<SuperAdminTable/>:<MemberTable adminData={adminData} setAdminData={setAdminData}/>
            }
        </div>
        </DocumentLayout>
    </div>
  )
}

const SuperAdminTable: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [allVideos, setAllVideos] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [adminUsers, setAdminUsers] = useState<any[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    // Modal state for creating and assigning tasks
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState<string>('');
    const [deadline, setDeadline] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [newVideoName, setNewVideoName] = useState<string>('');
    const [newVideoDateOfShoot, setNewVideoDateOfShoot] = useState<string>('');
    const [newVideoPlatform, setNewVideoPlatform] = useState<string>('');
    const [newVideoDescription, setNewVideoDescription] = useState<string>('');

    // Modal state for editing only deadline
    const [isDeadlineModalOpen, setIsDeadlineModalOpen] = useState(false);
    const [deadlineVideoId, setDeadlineVideoId] = useState<string | null>(null);
    const [newDeadline, setNewDeadline] = useState<string>('');

    // Fetch all videos from all digital marketing admins
    const fetchAllVideos = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${baseUrl}/api/admin/getAllDigitalVideos`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            
            if (response.data.success) {
                // Sort by creation date (newest first)
                const sortedVideos = response.data.videos.sort((a: any, b: any) => 
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                );
                setAllVideos(sortedVideos);
            }
        } catch (error) {
            console.error('Error fetching all videos:', error);
            setError('Failed to fetch videos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllVideos();
    }, []);

    // Fetch all admin users (super admin view - management)
    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/admin/users`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                    }
                });

                const users = response.data?.data || [];
                const sorted = [...users].sort((a: any, b: any) => {
                    const nameA = `${a.firstName || ''} ${a.lastName || ''}`.trim().toLowerCase();
                    const nameB = `${b.firstName || ''} ${b.lastName || ''}`.trim().toLowerCase();
                    if (nameA && nameB) return nameA.localeCompare(nameB);
                    return (a.email || '').toLowerCase().localeCompare((b.email || '').toLowerCase());
                });
                setAdminUsers(sorted);
            } catch (err) {
                console.error('Error fetching admin users:', err);
            }
        };

        fetchAdmins();
    }, []);

    const platformOptions = [
        'YouTube',
        'Instagram',
        'Facebook',
        'TikTok',
        'LinkedIn',
        'Twitter',
        'Other'
    ];

    const tableHeaders = [
        "S.No",
        "Admin Name",
        "Video Name",
        "Date of Shoot",
        "Video Edited",
        "Thumbnail Created",
        "Caption Added",
        "Video Uploaded",
        'Date of Upload',
        'Platform',
        'Description',
        'Created Date',
        'Assigned By',
        'Assigned To',
        'Assignment Deadline',
        'Assignment Message',
        'Actions'
    ];
      
    const csvHeader = [
        'Admin Name',
        'Video Name',
        'Date of Shoot',
        'Video Edited',
        'Thumbnail Created',
        'Caption',
        'Video Uploaded',
        'Date of Upload',
        'Platform',
        'Description',
        'Created Date'
    ];
      
    const csvDataFields = [
        'adminName',
        'videoName',
        'dateOfShoot',
        'videoEdited',
        'thumbnailUploaded',
        'captionAdded',
        'videoUploaded',
        'uploadDate',
        'platform',
        'description',
        'createdAt'
    ];

    const digitalAdmins = adminUsers.filter((user: any) => user.role === 'digitalMarketing');

    const tableColumns = [
        {
            key: "sno",
            render: (video: any, index: number) => index + 1,
        },
        {
            key: "adminName",
            render: (video: any) => (
                <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">
                        {video.adminName || 'Unknown Admin'}
                    </div>
                </div>
            ),
        },
        {
            key: "name",
            render: (video: any) => (
                <div className="flex items-center">
                    <div className="text-sm font-medium text-gray-900">{video.videoName}</div>
                </div>
            ),
        },
        {
            key: "dateOfShoot",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.dateOfShoot ? new Date(video.dateOfShoot).toLocaleDateString() : 'Not set'}
                </span>
            ),
        },
        {
            key: "videoEdited",
            render: (video: any) => (
                <div className="flex items-center justify-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        video.videoEdited 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                    }`}>
                        {video.videoEdited ? 'Yes' : 'No'}
                    </span>
                </div>
            ),
        },
        {
            key: "thumbnailUploaded",
            render: (video: any) => (
                <div className="flex items-center justify-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        video.thumbnailUploaded 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                    }`}>
                        {video.thumbnailUploaded ? 'Yes' : 'No'}
                    </span>
                </div>
            ),
        },
        {
            key: "captionAdded",
            render: (video: any) => (
                <div className="flex items-center justify-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        video.captionAdded 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                    }`}>
                        {video.captionAdded ? 'Yes' : 'No'}
                    </span>
                </div>
            ),
        },
        {
            key: "videoUploaded",
            render: (video: any) => (
                <div className="flex items-center justify-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                        video.videoUploaded 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                    }`}>
                        {video.videoUploaded ? 'Yes' : 'No'}
                    </span>
                </div>
            ),
        },
        {
            key: "uploadDate",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.uploadDate ? new Date(video.uploadDate).toLocaleDateString() : 'Not set'}
                </span>
            ),
        },
        {
            key: "platform",
            render: (video: any) => (
                <span className="text-sm text-gray-600">
                    {video.platform && video.platform.length > 0 ? video.platform.join(', ') : 'Not set'}
                </span>
            ),
        },
        {
            key: "description",
            render: (video: any) => (
                <span className="text-sm text-gray-600 max-w-xs truncate" title={video.description}>
                    {video.description || 'No description'}
                </span>
            ),
        },
        {
            key: "createdAt",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.createdAt ? new Date(video.createdAt).toLocaleDateString() : 'Unknown'}
                </span>
            ),
        },
        {
            key: "assignedBy",
            render: (video: any) => {
                if (!video.assignedBy) {
                    return <span className="text-sm text-gray-500">Not set</span>;
                }

                const admin = adminUsers.find((a: any) => a._id === video.assignedBy);
                const name =
                    admin?.firstName || admin?.lastName
                        ? `${admin.firstName || ''} ${admin.lastName || ''}`.trim()
                        : admin?.username || admin?.email || 'Unknown';

                return (
                    <span className="text-sm text-gray-700">
                        {name}
                    </span>
                );
            },
        },
        {
            key: "assignedTo",
            render: (video: any) => {
                if (!video.assignedTo) {
                    return <span className="text-sm text-gray-500">Unassigned</span>;
                }

                const admin = digitalAdmins.find((a: any) => a._id === video.assignedTo);
                const name =
                    admin?.firstName || admin?.lastName
                        ? `${admin.firstName || ''} ${admin.lastName || ''}`.trim()
                        : admin?.username || admin?.email || 'Unknown';

                return (
                    <span className="text-sm text-gray-700">
                        {name}
                    </span>
                );
            },
        },
        {
            key: "assignmentDeadline",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.assignmentDeadline
                        ? new Date(video.assignmentDeadline).toLocaleDateString()
                        : 'Not set'}
                </span>
            ),
        },
        {
            key: "assignmentMessage",
            render: (video: any) => (
                <span
                    className="text-sm text-gray-600 max-w-xs truncate"
                    title={video.assignmentMessage}
                >
                    {video.assignmentMessage || 'No message'}
                </span>
            ),
        },
        {
            key: "actions",
            render: (video: any) => (
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => {
                            setDeadlineVideoId(video._id);
                            setNewDeadline(
                                video.assignmentDeadline
                                    ? new Date(video.assignmentDeadline).toISOString().split('T')[0]
                                    : ''
                            );
                            setIsDeadlineModalOpen(true);
                        }}
                        className="px-3 py-1 text-xs bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    >
                        Edit Deadline
                    </button>
                </div>
            ),
        },
    ];

    const [activeTab, setActiveTab] = useState('allVideos');

    const tabs = [
        { key: "allVideos", label: "All Digital Marketing Videos", count: allVideos.length },
    ];

    const handleCreateAndAssign = async () => {
        if (!newVideoName || !selectedAdmin) return;

        try {
            setLoading(true);
            await axios.post(
                `${baseUrl}/api/digital/assign`,
                {
                    videoName: newVideoName,
                    dateOfShoot: newVideoDateOfShoot || null,
                    platform: newVideoPlatform ? [newVideoPlatform] : [],
                    description: newVideoDescription || '',
                    assignedToId: selectedAdmin,
                    deadline: deadline || null,
                    message: message || null,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            setIsAssignModalOpen(false);
            setSelectedAdmin('');
            setDeadline('');
            setMessage('');
            setNewVideoName('');
            setNewVideoDateOfShoot('');
            setNewVideoPlatform('');
            setNewVideoDescription('');

            await fetchAllVideos();
        } catch (err) {
            console.error('Error creating and assigning task:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateDeadline = async () => {
        if (!deadlineVideoId || !newDeadline) return;

        try {
            setLoading(true);
            await axios.patch(
                `${baseUrl}/api/admin/digital/deadline/${deadlineVideoId}`,
                { newDeadline },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            setIsDeadlineModalOpen(false);
            setDeadlineVideoId(null);
            setNewDeadline('');

            await fetchAllVideos();
        } catch (err) {
            console.error('Error updating deadline:', err);
        } finally {
            setLoading(false);
        }
    };

    // Filter videos based on search term
    const filteredVideos = allVideos.filter(video => 
        video.videoName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.adminName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.platform?.some((p: string) => p.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className='m-[32px] rounded-[8px] bg-white py-[16px] px-[8px] shadow-sm'>
            <div className="flex justify-between items-center px-[32px]">
                <h3 className="text-h6Text font-bold font-poppins">All Digital Marketing Videos</h3>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search videos, admins, or platforms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent w-80"
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <button
                        type="button"
                        onClick={fetchAllVideos}
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-gray-600 hover:bg-gray-50"
                        title="Refresh videos"
                    >
                        <svg
                            className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014-7V11M19 5A9 9 0 005 12v2"
                            />
                        </svg>
                    </button>
                    <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-500'>Show:</span>
                        <select 
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className='text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500'
                        >
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                        </select>
                    </div>
                    <button
                        onClick={() => setIsAssignModalOpen(true)}
                        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 text-sm font-medium"
                    >
                        Create and Assign Task
                    </button>
                </div>
            </div>
            
            <div className='m-[16px] rounded-[8px] overflow-hidden shadow-sm'>
                <AdminTable 
                    ITEMS_PER_PAGE={itemsPerPage} 
                    tableColumns={tableColumns} 
                    tableHeaders={tableHeaders} 
                    csvHeader={csvHeader} 
                    csvDataFields={csvDataFields} 
                    loading={loading} 
                    error={error} 
                    leads={filteredVideos} 
                    setActiveTab={setActiveTab} 
                    tabs={tabs} 
                    activeTab={activeTab} 
                    bgColor="bg-gray-50"
                />
            </div>

            {/* Create and Assign Task Modal */}
            {isAssignModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Create and Assign Task</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Video Name
                                </label>
                                <input
                                    type="text"
                                    value={newVideoName}
                                    onChange={(e) => setNewVideoName(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    placeholder="Enter video name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Shoot
                                </label>
                                <input
                                    type="date"
                                    value={newVideoDateOfShoot}
                                    onChange={(e) => setNewVideoDateOfShoot(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Platform
                                </label>
                                <select
                                    value={newVideoPlatform}
                                    onChange={(e) => setNewVideoPlatform(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="">Select Platform</option>
                                    {platformOptions.map((platform) => (
                                        <option key={platform} value={platform}>{platform}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    value={newVideoDescription}
                                    onChange={(e) => setNewVideoDescription(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    rows={2}
                                    placeholder="Enter video description"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Assign To
                                </label>
                                <select
                                    value={selectedAdmin}
                                    onChange={(e) => setSelectedAdmin(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="">Select Digital Admin</option>
                                    {digitalAdmins.map((admin: any) => (
                                        <option key={admin._id} value={admin._id}>
                                            {admin.firstName || admin.lastName
                                                ? `${admin.firstName || ''} ${admin.lastName || ''}`.trim()
                                                : admin.username || admin.email}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Deadline
                                </label>
                                <input
                                    type="date"
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    rows={3}
                                    placeholder="Add any instructions or context for this task"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => {
                                    setIsAssignModalOpen(false);
                                }}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreateAndAssign}
                                disabled={loading || !newVideoName || !selectedAdmin}
                                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Create and Assign'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Deadline Modal */}
            {isDeadlineModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                        <h3 className="text-lg font-semibold mb-4">Edit Deadline</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                New Deadline
                            </label>
                            <input
                                type="date"
                                value={newDeadline}
                                onChange={(e) => setNewDeadline(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => {
                                    setIsDeadlineModalOpen(false);
                                    setDeadlineVideoId(null);
                                }}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdateDeadline}
                                disabled={loading}
                                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Update Deadline'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {error && (
                <div className="px-[32px] mt-4">
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                </div>
            )}
    </div>
    );
};

const MemberTable: React.FC<{adminData:any, setAdminData?: (data: any) => void}> = ({adminData, setAdminData}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [videos, setVideos] = useState<any[]>(adminData?.digitalMarketingVideos || []);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [editingVideo, setEditingVideo] = useState<any>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [videoToDelete, setVideoToDelete] = useState<any>(null);
    const [formData, setFormData] = useState({
        videoName: '',
        dateOfShoot: '',
        videoEdited: false,
        thumbnailUploaded: false,
        captionAdded: false,
        videoUploaded: false,
        uploadDate: '',
        platform: [],
        description: ''
    });

    // Urgent tasks (deadlines within next 24 hours, not yet uploaded, assigned to this admin)
    const [urgentTasks, setUrgentTasks] = useState<any[]>([]);
    const [showUrgentModal, setShowUrgentModal] = useState(false);
    const [showUrgentDropdown, setShowUrgentDropdown] = useState(false);
    const [adminUsers, setAdminUsers] = useState<any[]>([]);
    const [notificationTab, setNotificationTab] = useState<'urgent' | 'all'>('urgent');

    const hasShownUrgentModalRef = useRef(false);

    // Centralized fetch function for assigned videos (supports manual refresh and polling)
    const fetchAssignedVideos = async () => {
        try {
            setLoading(true);

            const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');

            if (!token) {
                setError('Not authenticated. Please log in again.');
                setVideos([]);
                setUrgentTasks([]);
                setShowUrgentModal(false);
                return;
            }

            const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;

            const response = await axios.get(`${baseUrl}/api/admin/me`, {
                headers: {
                    Authorization: authToken,
                },
            });

            const freshAdmin = response.data?.data;

            if (freshAdmin && Array.isArray(freshAdmin.digitalMarketingVideos)) {
                const latestVideos = freshAdmin.digitalMarketingVideos;

                setVideos(latestVideos);

                // Persist latest admin data for the rest of the app
                if (sessionStorage.getItem('adminData')) {
                    sessionStorage.setItem('adminData', JSON.stringify(freshAdmin));
                } else {
                    localStorage.setItem('adminData', JSON.stringify(freshAdmin));
                }

                if (setAdminData) {
                    setAdminData(freshAdmin);
                }

                // Compute urgent tasks based on freshly loaded videos
                const tasks = latestVideos.filter((video: any) =>
                    video.assignmentDeadline &&
                    !video.videoUploaded &&
                    isDeadlineImminent(video.assignmentDeadline) &&
                    (!video.assignedTo || video.assignedTo === freshAdmin._id)
                );

                setUrgentTasks(tasks);

                if (!hasShownUrgentModalRef.current && tasks.length > 0) {
                    setShowUrgentModal(true);
                    hasShownUrgentModalRef.current = true;
                }

                if (tasks.length === 0) {
                    setShowUrgentModal(false);
                }
            } else {
                setVideos([]);
                setUrgentTasks([]);
                setShowUrgentModal(false);
            }
        } catch (err) {
            console.error('Error refreshing assigned videos:', err);
            setError('Failed to refresh videos');
        } finally {
            setLoading(false);
        }
    };

    // Initial load + polling every 60s for assigned videos
    useEffect(() => {
        fetchAssignedVideos();
        const intervalId = setInterval(fetchAssignedVideos, 60000);
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    // Fetch admin users (for resolving assignedBy names in notifications, non-super admins)
    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get(`${baseUrl}/api/admin/users/all`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                    }
                });

                const users = response.data?.data || [];
                setAdminUsers(users);
            } catch (err) {
                console.error('Error fetching admin users for notifications:', err);
            }
        };

        fetchAdmins();
    }, []);

    const platformOptions = [
        'YouTube',
        'Instagram',
        'Facebook',
        'TikTok',
        'LinkedIn',
        'Twitter',
        'Other'
    ];

    const tableHeaders = [
        "S.No",
        "Video Name",
        "Date of Shoot",
        "Video Edited",
        "Thumbnail Created",
        "Caption Added",
        "Video Uploaded",
        'Date of Upload',
        'Platform',
        'Description',
        'Assignment Deadline',
        'Assignment Message',
        'Actions'
      ];
      
      const csvHeader = [
        'Video Name',
        'Date of Shoot',
        'Video Edited',
        'Thumbnail Created',
        'Caption',
        'Video Uploaded',
        'Date of Upload',
        'Platform',
        'Description'
      ];
      
      const csvDataFields = [
        'videoName',
        'dateOfShoot',
        'videoEdited',
        'thumbnailUploaded',
        'captionAdded',
        'videoUploaded',
        'uploadDate',
        'platform',
        'description'
      ];

      const tableColumns = [
        {
          key: "sno",
            render: (video: any, index: number) => index + 1,
        },
        {
          key: "name",
            render: (video: any) => (
            <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">{video.videoName}</div>
            </div>
          ),
        },
        {
          key: "dateOfShoot",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.dateOfShoot ? new Date(video.dateOfShoot).toLocaleDateString() : 'Not set'}
                </span>
          ),
        },
        {
          key: "videoEdited",
            render: (video: any) => (
                <input
                    type="checkbox"
                    checked={video.videoEdited || false}
                    onChange={(e) => handleInstantUpdate(video._id, 'videoEdited', e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
            ),
        },
        {
            key: "thumbnailUploaded",
            render: (video: any) => (
                <input
                    type="checkbox"
                    checked={video.thumbnailUploaded || false}
                    onChange={(e) => handleInstantUpdate(video._id, 'thumbnailUploaded', e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
            ),
        },
        {
            key: "captionAdded",
            render: (video: any) => (
                <input
                    type="checkbox"
                    checked={video.captionAdded || false}
                    onChange={(e) => handleInstantUpdate(video._id, 'captionAdded', e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
            ),
        },
        {
            key: "videoUploaded",
            render: (video: any) => (
                <input
                    type="checkbox"
                    checked={video.videoUploaded || false}
                    onChange={(e) => handleInstantUpdate(video._id, 'videoUploaded', e.target.checked)}
                    className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                />
            ),
        },
        {
            key: "uploadDate",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.uploadDate ? new Date(video.uploadDate).toLocaleDateString() : 'Not set'}
                </span>
          ),
        },
        {
            key: "platform",
            render: (video: any) => (
                <select
                    value={video.platform || []}
                    onChange={(e) => handleInstantUpdate(video._id, 'platform', e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                    <option value="">Select Platform</option>
                    {platformOptions.map((platform) => (
                        <option key={platform} value={platform}>{platform}</option>
                    ))}
                </select>
          ),
        },
        {
            key: "description",
            render: (video: any) => (
                <input
                    type="text"
                    value={video.description || ''}
                    onChange={(e) => handleInstantUpdate(video._id, 'description', e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1 w-32 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter description"
                />
          ),
        },
        {
            key: "assignmentDeadline",
            render: (video: any) => (
                <span className="text-sm text-gray-500">
                    {video.assignmentDeadline
                        ? new Date(video.assignmentDeadline).toLocaleDateString()
                        : 'Not set'}
                </span>
            ),
        },
        {
            key: "assignmentMessage",
            render: (video: any) => (
                <span
                    className="text-sm text-gray-600 max-w-xs truncate"
                    title={video.assignmentMessage}
                >
                    {video.assignmentMessage || 'No message'}
                </span>
            ),
        },
        {
            key: "actions",
            render: (video: any) => (
                <div className="flex items-center space-x-2">
                <button
                        onClick={() => handleDeleteClick(video)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-full transition-colors duration-200"
                        title="Delete Video"
              >
                        <DeleteIcon style={{ fontSize: '20px' }} />
              </button>
            </div>
          ),
        },
        ];

        const [activeTab, setActiveTab] = useState('allStudents');

   const tabs = [
        { key: "allStudents", label: "All Videos", count: videos.length },
    ];

    // Handle instant updates for boolean fields and text
    const handleInstantUpdate = async (videoId: string, field: string, value: any) => {
        // Update local state immediately for instant feedback
        setVideos(prevVideos => 
            prevVideos.map(video => 
                video._id === videoId 
                    ? { ...video, [field]: value }
                    : video
            )
        );

        // Send update to backend in background (non-blocking)
        try {
            const response = await axios.patch(`${baseUrl}/api/admin/updateVideoData/${adminData._id}`, {
                videoId,
                [field]: value
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            
            // Update adminData in localStorage after successful update
            const updatedAdminData = {
                ...adminData,
                digitalMarketingVideos: videos.map(video => 
                    video._id === videoId 
                        ? { ...video, [field]: value }
                        : video
                )
            };
            
            // Update localStorage
            if (sessionStorage.getItem('adminData')) {
                sessionStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            } else {
                localStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            }
            
        } catch (error) {
            console.error('Error updating video:', error);
            // Revert local state on error
            setVideos(prevVideos => 
                prevVideos.map(video => 
                    video._id === videoId 
                        ? { ...video, [field]: !value }
                        : video
                )
            );
        }
    };

    // Handle edit button click
    const handleEdit = (video: any) => {
        setEditingVideo(video);
        setFormData({
            videoName: video.videoName || '',
            dateOfShoot: video.dateOfShoot ? new Date(video.dateOfShoot).toISOString().split('T')[0] : '',
            videoEdited: video.videoEdited || false,
            thumbnailUploaded: video.thumbnailUploaded || false,
            captionAdded: video.captionAdded || false,
            videoUploaded: video.videoUploaded || false,
            uploadDate: video.uploadDate ? new Date(video.uploadDate).toISOString().split('T')[0] : '',
            platform: video.platform || [],
            description: video.description || ''
        });
        setShowEditModal(true);
    };

    // Handle delete button click
    const handleDeleteClick = (video: any) => {
        setVideoToDelete(video);
        setShowDeleteModal(true);
    };

    // Handle form input changes
    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Handle form submission for edit
    const handleUpdate = async () => {
        try {
            setLoading(true);
            
            const response = await axios.patch(`${baseUrl}/api/admin/updateVideoData/${adminData._id}`, {
                videoId: editingVideo._id,
                ...formData
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            // Update local state
            setVideos(prevVideos => 
                prevVideos.map(video => 
                    video._id === editingVideo._id 
                        ? { ...video, ...formData }
                        : video
                )
            );

            // Update adminData in localStorage after successful update
            const updatedAdminData = {
                ...adminData,
                digitalMarketingVideos: videos.map(video => 
                    video._id === editingVideo._id 
                        ? { ...video, ...formData }
                        : video
                )
            };
            
            // Update localStorage
            if (sessionStorage.getItem('adminData')) {
                sessionStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            } else {
                localStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            }
            
            // Update parent component's adminData state
            if (setAdminData) {
                setAdminData(updatedAdminData);
            }

            setShowEditModal(false);
            setEditingVideo(null);
        } catch (error) {
            console.error('Error updating video:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle delete confirmation
    const handleDelete = async () => {
        try {
            setLoading(true);
            
            const response = await axios.delete(`${baseUrl}/api/admin/deleteVideoData/${adminData._id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                data: {
                    videoId: videoToDelete._id
                }
            });

            // Remove from local state
            setVideos(prevVideos => 
                prevVideos.filter(video => video._id !== videoToDelete._id)
            );

            // Update adminData in localStorage after successful deletion
            const updatedAdminData = {
                ...adminData,
                digitalMarketingVideos: videos.filter(video => video._id !== videoToDelete._id)
            };
            
            // Update localStorage
            if (sessionStorage.getItem('adminData')) {
                sessionStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            } else {
                localStorage.setItem('adminData', JSON.stringify(updatedAdminData));
            }
            
            // Update parent component's adminData state
            if (setAdminData) {
                setAdminData(updatedAdminData);
            }

            setShowDeleteModal(false);
            setVideoToDelete(null);
        } catch (error) {
            console.error('Error deleting video:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle add new video
    const handleAdd = async () => {
        try {
            setLoading(true);
            const response = await axios.patch(`${baseUrl}/api/admin/addVideoData/${adminData._id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });

            const updatedUser = response.data.user; // Get the updated user data
            
            // Update adminData in localStorage with the complete updated user data
            if (sessionStorage.getItem('adminData')) {
                sessionStorage.setItem('adminData', JSON.stringify(updatedUser));
            } else {
                localStorage.setItem('adminData', JSON.stringify(updatedUser));
            }
            
            // Update parent component's adminData state
            if (setAdminData) {
                setAdminData(updatedUser);
            }
            
            // Update local state with the new videos array from the updated user
            setVideos(updatedUser.digitalMarketingVideos || []);

            setShowAddModal(false);
            setFormData({
                videoName: '',
                dateOfShoot: '',
                videoEdited: false,
                thumbnailUploaded: false,
                captionAdded: false,
                videoUploaded: false,
                uploadDate: '',
                platform: [],
                description: ''
            });
        } catch (error) {
            console.error('Error adding video:', error);
        } finally {
            setLoading(false);
        }
    };
      
return (
      <div className='m-[32px] rounded-[8px] bg-white py-[16px] px-[8px] shadow-sm'>
            <div className="flex justify-between items-center px-[32px] relative">
                <h3 className="text-h6Text font-bold font-poppins">Digital Marketing Videos</h3>
                <div className="flex items-center space-x-4">
                    {/* Notification bell with urgent count */}
                    <button
                        type="button"
                        onClick={() => setShowUrgentDropdown((prev) => !prev)}
                        className="relative inline-flex items-center justify-center rounded-full border border-yellow-400 bg-yellow-50 p-2 text-yellow-700 hover:bg-yellow-100"
                    >
                        {/* Simple bell icon */}
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
                            />
                        </svg>
                        {urgentTasks.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-600 px-1 text-xs font-semibold text-white">
                                {urgentTasks.length}
                            </span>
                        )}
                    </button>

                    {/* Manual refresh button */}
                    <button
                        type="button"
                        onClick={fetchAssignedVideos}
                        className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 text-gray-600 hover:bg-gray-50"
                        title="Refresh videos"
                    >
                        <svg
                            className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0014-7V11M19 5A9 9 0 005 12v2"
                            />
                        </svg>
                    </button>

                    <div className='flex items-center gap-2'>
                        <span className='text-sm text-gray-500'>Show:</span>
                        <select 
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Number(e.target.value))}
                            className='text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500'
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 flex items-center"
                    >
                        <AddIcon style={{ fontSize: '20px' }} className="mr-2" />
                        Add Video
                    </button>
                </div>

                {/* Notification dropdown with tabs (Urgent | All with deadline) */}
                {showUrgentDropdown && (urgentTasks.length > 0 || videos.some(v => v.assignmentDeadline)) && (
                    <div className="absolute right-8 top-14 z-30 w-80 rounded-md border border-yellow-300 bg-white shadow-lg">
                        <div className="border-b border-yellow-200 bg-yellow-50 px-4 pt-2">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-red-700">
                                    Notifications
                                </p>
                                <span className="text-xs text-gray-500">
                                    {urgentTasks.length} urgent
                                </span>
                            </div>
                            <div className="mt-2 flex gap-1 rounded-md bg-yellow-100 p-1 text-xs font-medium">
                                <button
                                    type="button"
                                    onClick={() => setNotificationTab('urgent')}
                                    className={`flex-1 rounded-md px-2 py-1 text-center ${
                                        notificationTab === 'urgent'
                                            ? 'bg-red-600 text-white'
                                            : 'text-red-700'
                                    }`}
                                >
                                    Urgent (24h)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setNotificationTab('all')}
                                    className={`flex-1 rounded-md px-2 py-1 text-center ${
                                        notificationTab === 'all'
                                            ? 'bg-yellow-500 text-white'
                                            : 'text-yellow-700'
                                    }`}
                                >
                                    All with deadline
                                </button>
                            </div>
                        </div>
                        <div className="max-h-64 space-y-2 overflow-y-auto px-3 py-2">
                            {(notificationTab === 'urgent'
                                ? urgentTasks
                                : videos.filter((task: any) => task.assignmentDeadline)
                              ).map((task: any) => {
                                const assignedByAdmin = adminUsers.find(
                                    (a: any) => a._id === task.assignedBy
                                );
                                const assignedByName =
                                    assignedByAdmin?.firstName || assignedByAdmin?.lastName
                                        ? `${assignedByAdmin?.firstName || ''} ${assignedByAdmin?.lastName || ''}`.trim()
                                        : assignedByAdmin?.username || assignedByAdmin?.email || 'Unknown';

                                return (
                                    <div
                                        key={task._id}
                                        className="rounded-md border border-yellow-200 bg-yellow-50 p-2"
                                    >
                                        <p className="text-xs font-semibold text-gray-900">
                                            {task.videoName || 'Untitled video'}
                                        </p>
                                        <p className="mt-1 text-xs text-gray-700">
                                            {task.assignmentMessage || 'No message provided'}
                                        </p>
                                        <p className="mt-1 text-[11px] text-gray-600">
                                            Assigned By: {assignedByName}
                                        </p>
                                        <p className="mt-0.5 text-[11px] text-gray-600">
                                            Deadline:{' '}
                                            {task.assignmentDeadline
                                                ? new Date(task.assignmentDeadline).toLocaleString()
                                                : 'Not set'}
                                        </p>
                                    </div>
                                );
                            })}

                            {(notificationTab === 'urgent'
                                ? urgentTasks.length === 0
                                : !videos.some((v: any) => v.assignmentDeadline)
                              ) && (
                                <p className="py-4 text-center text-xs text-gray-500">
                                    No tasks to display in this tab.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
      <div className=' m-[16px] rounded-[8px] overflow-hidden shadow-sm'>
      <AdminTable 
          ITEMS_PER_PAGE={itemsPerPage} 
          tableColumns={tableColumns} 
          tableHeaders={tableHeaders} 
          csvHeader={csvHeader} 
          csvDataFields={csvDataFields} 
          loading={loading} 
          error={error} 
          leads={videos} 
          setActiveTab={setActiveTab} 
          tabs={tabs} 
          activeTab={activeTab} 
          bgColor="bg-gray-50"
      />
      </div>

      {/* Urgent Deadline Warning Modal */}
      {showUrgentModal && urgentTasks.length > 0 && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-lg rounded-lg border border-yellow-400 bg-yellow-50 p-6 shadow-xl">
                  <div className="mb-4 flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white">
                          !
                      </div>
                      <div>
                          <h3 className="text-lg font-bold text-red-700">
                              URGENT DEADLINE ALERT
                          </h3>
                          <p className="text-sm text-red-600">
                              {urgentTasks.length} task{urgentTasks.length > 1 ? 's' : ''} are due within the next 24 hours.
                          </p>
                      </div>
                  </div>

                  <div className="max-h-64 space-y-3 overflow-y-auto rounded-md bg-white p-3">
                      {urgentTasks.map((task: any) => {
                          const assignedByAdmin = adminUsers.find(
                              (a: any) => a._id === task.assignedBy
                          );
                          const assignedByName =
                              assignedByAdmin?.firstName || assignedByAdmin?.lastName
                                  ? `${assignedByAdmin?.firstName || ''} ${assignedByAdmin?.lastName || ''}`.trim()
                                  : assignedByAdmin?.username || assignedByAdmin?.email || 'Unknown';

                          return (
                              <div
                                  key={task._id}
                                  className="rounded-md border border-yellow-200 bg-yellow-50 p-3"
                              >
                                  <p className="text-sm font-semibold text-gray-900">
                                      {task.videoName || 'Untitled video'}
                                  </p>
                                  <p className="mt-1 text-xs text-gray-700">
                                      {task.assignmentMessage || 'No message provided'}
                                  </p>
                                  <p className="mt-1 text-xs text-gray-600">
                                      Assigned By: {assignedByName}
                                  </p>
                                  <p className="mt-1 text-xs text-gray-700">
                                      Deadline:{' '}
                                      {task.assignmentDeadline
                                          ? new Date(task.assignmentDeadline).toLocaleString()
                                          : 'Not set'}
                                  </p>
                              </div>
                          );
                      })}
                  </div>

                  <div className="mt-5 flex justify-end space-x-3">
                      <button
                          onClick={() => setShowUrgentModal(false)}
                          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                          View Tasks
                      </button>
                  </div>
              </div>
          </div>
      )}

            {/* Add Video Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-4">Add New Video</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Video Name</label>
                                <input
                                    type="text"
                                    value={formData.videoName}
                                    onChange={(e) => handleInputChange('videoName', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    placeholder="Enter video name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Shoot</label>
                                <input
                                    type="date"
                                    value={formData.dateOfShoot}
                                    onChange={(e) => handleInputChange('dateOfShoot', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.videoEdited}
                                        onChange={(e) => handleInputChange('videoEdited', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Video Edited</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.thumbnailUploaded}
                                        onChange={(e) => handleInputChange('thumbnailUploaded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Thumbnail Created</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.captionAdded}
                                        onChange={(e) => handleInputChange('captionAdded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Caption Added</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.videoUploaded}
                                        onChange={(e) => handleInputChange('videoUploaded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Video Uploaded</label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
                                <input
                                    type="date"
                                    value={formData.uploadDate}
                                    onChange={(e) => handleInputChange('uploadDate', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                                <select
                                    value={formData.platform}
                                    onChange={(e) => handleInputChange('platform', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="">Select Platform</option>
                                    {platformOptions.map((platform) => (
                                        <option key={platform} value={platform}>{platform}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    rows={3}
                                    placeholder="Enter video description"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                disabled={loading}
                                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50"
                            >
                                {loading ? 'Adding...' : 'Add Video'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Video Modal */}
            {showEditModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto">
                        <h3 className="text-lg font-semibold mb-4">Edit Video</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Video Name</label>
                                <input
                                    type="text"
                                    value={formData.videoName}
                                    onChange={(e) => handleInputChange('videoName', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Shoot</label>
                                <input
                                    type="date"
                                    value={formData.dateOfShoot}
                                    onChange={(e) => handleInputChange('dateOfShoot', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.videoEdited}
                                        onChange={(e) => handleInputChange('videoEdited', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Video Edited</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.thumbnailUploaded}
                                        onChange={(e) => handleInputChange('thumbnailUploaded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Thumbnail Created</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.captionAdded}
                                        onChange={(e) => handleInputChange('captionAdded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Caption Added</label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.videoUploaded}
                                        onChange={(e) => handleInputChange('videoUploaded', e.target.checked)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">Video Uploaded</label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
                                <input
                                    type="date"
                                    value={formData.uploadDate}
                                    onChange={(e) => handleInputChange('uploadDate', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
                                <select
                                    value={formData.platform}
                                    onChange={(e) => handleInputChange('platform', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="">Select Platform</option>
                                    {platformOptions.map((platform) => (
                                        <option key={platform} value={platform}>{platform}</option>
                                    ))}
                                </select>
                            </div>

    <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    rows={3}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                onClick={() => setShowEditModal(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                disabled={loading}
                                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50"
                            >
                                {loading ? 'Updating...' : 'Update Video'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h3 className="text-lg font-semibold mb-4">Delete Video</h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete "{videoToDelete?.videoName}"? This action cannot be undone.
                        </p>
                        
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                disabled={loading}
                                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                            >
                                {loading ? 'Deleting...' : 'Delete Video'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
    </div>
    );
};

export default DigitalTeam
