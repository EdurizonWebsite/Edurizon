import React, { useState, useEffect } from 'react';
import AdminTable from '@/components/admin/AdminTable';
import { getRegisteredStudentsByCounsellor } from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '@/components/admin/DocumentLayout';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

interface RegisteredStudent {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  studyDestination: string;
  intendedCourse: string;
  preferedUniversity: string;
  applicationStage: string;
  documentsUploadStatus: string;
  accountStatus: string;
  assignedCounsellor: any;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

const ViewSessions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [students, setStudents] = useState<RegisteredStudent[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<RegisteredStudent[]>([]);
  const [adminData, setAdminData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = [
    {
      href: "/admin/counsellor-admin",
      icon: <GridViewIcon />,
      label: "Overview",
    },
    {
        href: "/admin/counsellor-admin/calling-records",
        icon: <CallIcon />,
        label: "Calling Records",
    },
    {
        href: "/admin/counsellor-admin/view-sessions",
        icon: <ArrowForwardIosIcon />,
        label: "View Sessions",
    },
    {
      href: "/admin/counsellor-admin/registered-students",
      icon: <PersonIcon />,
      label: "Registered Students",
    },
  ]

  // Get counsellor ID from sessionStorage or localStorage
  const counsellorId = adminData?._id;

  const ITEMS_PER_PAGE = 10;

  // Fetch registered students for the counsellor
  const fetchStudents = async () => {
    if (!counsellorId) {
      setError('Counsellor ID not found');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await getRegisteredStudentsByCounsellor(counsellorId);
      if (response.success) {
        setStudents(response.data);
      } else {
        setError(response.message || 'Failed to fetch students');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  // Filter students based on active tab
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredStudents(students);
    } else if (activeTab === 'consultation') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Consultation'));
    } else if (activeTab === 'document-upload') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Document Upload'));
    } else if (activeTab === 'document-verification') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Document Verification'));
    } else if (activeTab === 'university-application') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Selected University Application'));
    } else if (activeTab === 'offer-letter') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Offer Letter'));
    } else if (activeTab === 'visa-approval') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Visa Approval'));
    } else if (activeTab === 'departure') {
      setFilteredStudents(students.filter(student => student.applicationStage === 'Departure'));
    }
  }, [activeTab, students]);

  // Fetch admin data on component mount
  useEffect(() => {
    if (sessionStorage.getItem('adminData')) {
      const value = sessionStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    } else {
      const value = localStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
  }, []);

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, [counsellorId]);

  // Define tabs
  const tabs = [
    { key: 'all', label: 'All', count: students.length },
    { key: 'consultation', label: 'Consultation', count: students.filter(student => student.applicationStage === 'Consultation').length },
    { key: 'document-upload', label: 'Document Upload', count: students.filter(student => student.applicationStage === 'Document Upload').length },
    { key: 'document-verification', label: 'Document Verification', count: students.filter(student => student.applicationStage === 'Document Verification').length },
    { key: 'university-application', label: 'University Application', count: students.filter(student => student.applicationStage === 'Selected University Application').length },
    { key: 'offer-letter', label: 'Offer Letter', count: students.filter(student => student.applicationStage === 'Offer Letter').length },
    { key: 'visa-approval', label: 'Visa Approval', count: students.filter(student => student.applicationStage === 'Visa Approval').length },
    { key: 'departure', label: 'Departure', count: students.filter(student => student.applicationStage === 'Departure').length },
  ];

  // Table headers
  const tableHeaders = [
    "S.No",
    "Student Name",
    "Email",
    "Phone",
    "Study Destination",
    "Intended Course",
    "Application Stage",
    "Document Status",
    "Account Status",
    "Registration Date"
  ];

  // CSV headers
  const csvHeader = [
    "Student Name",
    "Email",
    "Phone",
    "Study Destination",
    "Intended Course",
    "Application Stage",
    "Document Status",
    "Account Status",
    "Registration Date"
  ];

  // CSV data fields
  const csvDataFields = [
    "name",
    "email",
    "phone",
    "studyDestination",
    "intendedCourse",
    "applicationStage",
    "documentsUploadStatus",
    "accountStatus",
    "createdAt"
  ];

  // Table columns configuration
  const tableColumns = [
    {
      key: "sno",
      render: (student: RegisteredStudent, index: number) => index + 1,
    },
    {
      key: "name",
      render: (student: RegisteredStudent) => (
        <div className="text-sm font-medium text-gray-900">{student.name}</div>
      ),
    },
    {
      key: "email",
      render: (student: RegisteredStudent) => (
        <span className="text-sm text-gray-500">{student.email}</span>
      ),
    },
    {
      key: "phone",
      render: (student: RegisteredStudent) => (
        <span className="text-sm text-gray-500">{student.phone || 'None'}</span>
      ),
    },
    {
      key: "studyDestination",
      render: (student: RegisteredStudent) => (
        <span className="text-sm text-gray-500">{student.studyDestination}</span>
      ),
    },
    {
      key: "intendedCourse",
      render: (student: RegisteredStudent) => (
        <span className="text-sm text-gray-500">{student.intendedCourse}</span>
      ),
    },
    {
      key: "applicationStage",
      render: (student: RegisteredStudent) => {
        const getStageColor = (stage: string) => {
          switch (stage) {
            case 'Consultation': return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'Document Upload': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'Document Verification': return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'Selected University Application': return 'text-purple-600 bg-purple-50 border-purple-200';
            case 'Offer Letter': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
            case 'Visa Approval': return 'text-green-600 bg-green-50 border-green-200';
            case 'Departure': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
          }
        };

        return (
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              student.applicationStage === 'Consultation' ? 'bg-blue-400' :
              student.applicationStage === 'Document Upload' ? 'bg-yellow-400' :
              student.applicationStage === 'Document Verification' ? 'bg-orange-400' :
              student.applicationStage === 'Selected University Application' ? 'bg-purple-400' :
              student.applicationStage === 'Offer Letter' ? 'bg-indigo-400' :
              student.applicationStage === 'Visa Approval' ? 'bg-green-400' :
              'bg-emerald-400'
            }`}></div>
            <span className={`text-sm border rounded-md px-2 py-1 font-medium ${getStageColor(student.applicationStage)}`}>
              {student.applicationStage}
            </span>
          </div>
        );
      },
    },
    {
      key: "documentStatus",
      render: (student: RegisteredStudent) => {
        const getDocumentStatusColor = (status: string) => {
          switch (status) {
            case 'completed': return 'text-green-600 bg-green-50 border-green-200';
            case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
          }
        };

        return (
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              student.documentsUploadStatus === 'completed' ? 'bg-green-400' : 'bg-yellow-400'
            }`}></div>
            <span className={`text-sm border rounded-md px-2 py-1 font-medium ${getDocumentStatusColor(student.documentsUploadStatus)}`}>
              {student.documentsUploadStatus === 'completed' ? '✅ Completed' : '⏳ Pending'}
            </span>
          </div>
        );
      },
    },
    {
      key: "accountStatus",
      render: (student: RegisteredStudent) => {
        const getAccountStatusColor = (status: string) => {
          switch (status) {
            case 'active': return 'text-green-600 bg-green-50 border-green-200';
            case 'inactive': return 'text-red-600 bg-red-50 border-red-200';
            case 'suspended': return 'text-orange-600 bg-orange-50 border-orange-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
          }
        };

        return (
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${
              student.accountStatus === 'active' ? 'bg-green-400' :
              student.accountStatus === 'inactive' ? 'bg-red-400' : 'bg-orange-400'
            }`}></div>
            <span className={`text-sm border rounded-md px-2 py-1 font-medium ${getAccountStatusColor(student.accountStatus)}`}>
              {student.accountStatus === 'active' ? '✅ Active' :
               student.accountStatus === 'inactive' ? '❌ Inactive' : '⚠️ Suspended'}
            </span>
          </div>
        );
      },
    },
    {
      key: "registrationDate",
      render: (student: RegisteredStudent) => (
        <span className="text-sm text-gray-500">
          {new Date(student.createdAt).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          })}
        </span>
      ),
    },
  ];

  // Handle tab change
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  // Refresh data
  const handleRefresh = () => {
    fetchStudents();
  };

  if (!adminData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we load your data...</p>
        </div>
      </div>
    );
  }

  if (!counsellorId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">Counsellor ID not found. Please log in again.</p>
          <div className="mt-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout navItems={navItems} >
      <Toaster />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Registered Students</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage students assigned to you
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleRefresh}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="rounded-[12px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Status Legend */}
        <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Stage Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Initial Stages</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-600">Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-gray-600">Document Upload</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-sm text-gray-600">Document Verification</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Application Process</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-sm text-gray-600">University Application</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                  <span className="text-sm text-gray-600">Offer Letter</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Final Stages</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-600">Visa Approval</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span className="text-sm text-gray-600">Departure</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Status Indicators</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-600">Active/Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm text-gray-600">Inactive/Suspended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <AdminTable
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            tableHeaders={tableHeaders}
            tableColumns={tableColumns}
            leads={filteredStudents}
            loading={loading}
            error={error}
            csvHeader={csvHeader}
            csvDataFields={csvDataFields}
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            bgColor="bg-white"
          />
        </div>
      </div>
    </Layout>
  );
};

export default ViewSessions;
