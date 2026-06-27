import React, { useState, useEffect, useMemo } from 'react';
import Layout from '@/components/admin/DocumentLayout';
import { getRegisteredStudentsByCounsellor } from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import { useSearch } from '@/context/SearchContext';
import { filterStudents } from '@/utils/studentFilter';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import UploadIcon from '@mui/icons-material/Upload';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import { Student } from '@/utils/studentFilter';
import { useStaticAttributes } from '@/context/StaticAttributesContext';

interface RegisteredStudent {
  _id: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  address: string;
  studyDestination: string;
  intendedCourse: string;
  preferedUniversity: string;
  applicationStage: string;
  documentsUploadStatus: string;
  accountStatus: string;
  assignedCounsellor: any;
  assignedCounsellorName: string;
  scholarshipApplied: string;
  lastLoginDate: string;
  notes: string;
  documents: Array<{
    name: string;
    link: string;
    status: string;
    remark: string;
  }>;
  // Can be either a legacy single URL string or an array of fee/bill entries
  feesInfo?: any;
  enrolledCountry?: string[];
  enrolledUniversity?: string[];
  feeStructure?: string | null;
  feeStructureGeneratedDate?: string | null;
  feeStructureAgreed?: boolean;
  createdAt: string;
  updatedAt: string;
}

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
  // {
  //   href: "/admin/counsellor-admin/view-sessions",
  //   icon: <ArrowForwardIosIcon />,
  //   label: "View Sessions",
  // },
  {
    href: "/admin/counsellor-admin/registered-students",
    icon: <PersonIcon />,
    label: "Registered Students",
  },
];

const RegisteredStudents = () => {
  const { debouncedSearchQuery } = useSearch();
  const {
    countries,
    universities,
    addCountry,
    removeCountry,
    addUniversity,
    removeUniversity,
    refresh: refreshStaticAttrs,
  } = useStaticAttributes();

  useEffect(() => { refreshStaticAttrs(); }, []);

  // Manage attributes panel state
  const [manageOpen, setManageOpen] = useState(false);
  const [newCountryName, setNewCountryName] = useState('');
  const [newUniversityName, setNewUniversityName] = useState('');
  const [savingAttr, setSavingAttr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [students, setStudents] = useState<RegisteredStudent[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<RegisteredStudent[]>([]);
  const [adminData, setAdminData] = useState<any>(null);
  const [selectedStudent, setSelectedStudent] = useState<RegisteredStudent | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState<Partial<RegisteredStudent>>({});
  const [uploadingFile, setUploadingFile] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [sendingNotification, setSendingNotification] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedUniversity, setSelectedUniversity] = useState<string>('');

  // Get counsellor ID from sessionStorage or localStorage
  const counsellorId = adminData?._id;

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
      if (response) {
        const sorted = [...response].sort((a: RegisteredStudent, b: RegisteredStudent) =>
          (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase())
        );
        setStudents(sorted);
      } else {
        setError(response.message || 'Failed to fetch students');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch students');
    } finally {
      setLoading(false);
    }
  };

  // Filter students based on active tab and global search term
  useEffect(() => {
    let filtered:Student[]|RegisteredStudent[] = students;

    // Filter by tab
    if (activeTab === 'consultation') {
      filtered = filtered.filter(student => student.applicationStage === 'Consultation');
    } else if (activeTab === 'document-upload') {
      filtered = filtered.filter(student => student.applicationStage === 'Document Upload');
    } else if (activeTab === 'document-verification') {
      filtered = filtered.filter(student => student.applicationStage === 'Document Verification');
    } else if (activeTab === 'university-application') {
      filtered = filtered.filter(student => student.applicationStage === 'Selected University Application');
    } else if (activeTab === 'offer-letter') {
      filtered = filtered.filter(student => student.applicationStage === 'Offer Letter');
    } else if (activeTab === 'visa-approval') {
      filtered = filtered.filter(student => student.applicationStage === 'Visa Approval');
    } else if (activeTab === 'departure') {
      filtered = filtered.filter(student => student.applicationStage === 'Departure');
    }

    // Use global search filter utility
    filtered = filterStudents(filtered, debouncedSearchQuery);

    setFilteredStudents(filtered as RegisteredStudent[]);
  }, [activeTab, students, debouncedSearchQuery]);

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

  const handleToggleStudentSelection = (studentId: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(studentId) ? prev.filter((id) => id !== studentId) : [...prev, studentId]
    );
  };

  // Filter students based on country and university
  const filteredStudentsForNotification = useMemo(() => {
    let filtered = students;

    // Filter by country
    if (selectedCountry) {
      filtered = filtered.filter(student => {
        const enrolledCountries = student.enrolledCountry || [];
        return enrolledCountries.some((country: string) => 
          country.toLowerCase() === selectedCountry.toLowerCase()
        );
      });
    }

    // Filter by university
    if (selectedUniversity) {
      filtered = filtered.filter(student => {
        const enrolledUniversities = student.enrolledUniversity || [];
        return enrolledUniversities.some((university: string) => 
          university.toLowerCase().includes(selectedUniversity.toLowerCase())
        );
      });
    }

    return filtered;
  }, [students, selectedCountry, selectedUniversity]);

  // Handle select all filtered students
  const handleSelectAllFiltered = () => {
    const allFilteredIds = filteredStudentsForNotification.map(student => student._id);
    const allSelected = allFilteredIds.every(id => selectedStudentIds.includes(id));
    
    if (allSelected) {
      // Deselect all filtered students
      setSelectedStudentIds(prev => prev.filter(id => !allFilteredIds.includes(id)));
    } else {
      // Select all filtered students
      setSelectedStudentIds(prev => [...new Set([...prev, ...allFilteredIds])]);
    }
  };

  // Get available universities — always use the full dynamic list from context
  const availableUniversities = useMemo(() => {
    if (universities.length > 0) return [...universities].sort();
    // Fallback: collect unique universities from enrolled students
    const allUniversities = new Set<string>();
    students.forEach(student => {
      (student.enrolledUniversity || []).forEach((uni: string) => allUniversities.add(uni));
    });
    return Array.from(allUniversities).sort();
  }, [universities, students]);

  const handleOpenNotificationModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseNotificationModal = () => {
    setIsModalOpen(false);
    setSelectedCountry('');
    setSelectedUniversity('');
  };

  const handleSendNotification = async () => {
    if (!notificationMessage.trim()) {
      toast.error('Please enter a notification message');
      return;
    }

    if (selectedStudentIds.length === 0) {
      toast.error('Please select at least one student');
      return;
    }

    const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
    if (!token) {
      toast.error('Authentication token missing');
      return;
    }

    const payload = {
      studentIds: selectedStudentIds,
      message: notificationMessage.trim(),
      senderId: adminData?._id || 'ADMIN_ID_PLACEHOLDER',
    };

    try {
      setSendingNotification(true);
      await axios.post(`${baseUrl}/api/admin/send-notifications`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Notifications sent successfully');
      setIsModalOpen(false);
      setNotificationMessage('');
      setSelectedStudentIds([]);
    } catch (error: any) {
      console.error('Notification send error:', error);
      toast.error(error.response?.data?.message || 'Failed to send notifications');
    } finally {
      setSendingNotification(false);
    }
  };

  // Handle student click
  const handleStudentClick = (student: RegisteredStudent) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStudent(null);
  };

  // Handle edit button click
  const handleEditClick = (student: RegisteredStudent) => {
    setEditFormData(student);
    setShowEditModal(true);
  };

  // Close edit modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditFormData({});
  };

  // Handle form input changes
  const handleInputChange = (field: string, value: any) => {
    setEditFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle file upload for fees information
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    setUploadingFile(true);
    
    try {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('documentName', 'Fees Information');
      const response = await axios.post(`${baseUrl}/api/registered-students/uploadFeesDocument/${selectedStudent?._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      
      
      if (response.data) {
        setEditFormData(prev => ({
          ...prev,
          feesInfo: response.data.documents?.find((doc: any) => doc.name === 'Fees Information')?.link
        }));
        toast.success('Fees document uploaded successfully');
      }
    } catch (error) {
      console.error('File upload error:', error);
      toast.error('Failed to upload file');
    } finally {
      setUploadingFile(false);
    }
  };

  // Save student information
  const handleSaveStudent = async () => {
    if (!selectedStudent) return;

    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
      
      const response = await axios.put(
        `${baseUrl}/api/registered-students/${selectedStudent._id}`,
        editFormData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      
      if (response.data.success) {
        toast.success('Student information updated successfully');
        setShowEditModal(false);
        setEditFormData({});
        // Refresh the students list
        fetchStudents();
      } else {
        toast.error(response.data.message || 'Failed to update student information');
      }
    } catch (error: any) {
      console.error('Update error:', error);
      toast.error(error.response?.data?.message || 'Failed to update student information');
    } finally {
      setSaving(false);
    }
  };

  const handleAddCountry = async () => {
    if (!newCountryName.trim()) return;
    setSavingAttr(true);
    try {
      await addCountry(newCountryName.trim());
      setNewCountryName('');
      toast.success('Country added');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to add country');
    } finally {
      setSavingAttr(false);
    }
  };

  const handleRemoveCountry = async (name: string) => {
    setSavingAttr(true);
    try {
      await removeCountry(name);
      toast.success('Country removed');
    } catch {
      toast.error('Failed to remove country');
    } finally {
      setSavingAttr(false);
    }
  };

  const handleAddUniversity = async () => {
    if (!newUniversityName.trim()) return;
    setSavingAttr(true);
    try {
      await addUniversity(newUniversityName.trim());
      setNewUniversityName('');
      toast.success('University added');
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Failed to add university');
    } finally {
      setSavingAttr(false);
    }
  };

  const handleRemoveUniversity = async (name: string) => {
    setSavingAttr(true);
    try {
      await removeUniversity(name);
      toast.success('University removed');
    } catch {
      toast.error('Failed to remove university');
    } finally {
      setSavingAttr(false);
    }
  };

  // Get stage color
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

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-50 border-green-200';
      case 'inactive': return 'text-red-600 bg-red-50 border-red-200';
      case 'suspended': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

  // Get document status color
  const getDocumentStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50 border-green-200';
      case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
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
    <Layout navItems={navItems}>
      <Toaster />
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between py-6">
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Registered Students</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage students assigned to you
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:shrink-0">
              <button
                onClick={handleOpenNotificationModal}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
              <NotificationsIcon className='mr-2' style={{fontSize: '20px', color: '#666666' }} />
                
                Send Notifications
              </button> 
              <button
                onClick={fetchStudents}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
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

      {/* Manage Countries & Universities Panel */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <button
            type="button"
            className="w-full flex items-center justify-between px-6 py-4"
            onClick={() => setManageOpen(prev => !prev)}
          >
            <div>
              <p className="text-base font-semibold text-gray-900 text-left">Manage Countries &amp; Universities</p>
              <p className="text-xs text-gray-500 text-left">Add or remove countries and universities available in dropdowns</p>
            </div>
            <svg className={`w-5 h-5 text-gray-500 transition-transform ${manageOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {manageOpen && (
            <div className="border-t border-gray-100 px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Countries */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Countries</h4>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newCountryName}
                    onChange={e => setNewCountryName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddCountry()}
                    placeholder="Country name"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleAddCountry}
                    disabled={savingAttr || !newCountryName.trim()}
                    className="px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                  {countries.length === 0 && <p className="text-xs text-gray-400">No countries yet</p>}
                  {countries.map(c => (
                    <span key={c} className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs">
                      {c}
                      <button onClick={() => handleRemoveCountry(c)} disabled={savingAttr} className="ml-1 text-blue-400 hover:text-red-500">✕</button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Universities */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Universities</h4>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newUniversityName}
                    onChange={e => setNewUniversityName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleAddUniversity()}
                    placeholder="University name"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleAddUniversity}
                    disabled={savingAttr || !newUniversityName.trim()}
                    className="px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                  {universities.length === 0 && <p className="text-xs text-gray-400">No universities yet</p>}
                  {universities.map(u => (
                    <span key={u} className="inline-flex items-center gap-1 px-2.5 py-1 bg-purple-50 text-purple-700 border border-purple-200 rounded-full text-xs">
                      {u}
                      <button onClick={() => handleRemoveUniversity(u)} disabled={savingAttr} className="ml-1 text-purple-400 hover:text-red-500">✕</button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="rounded-[12px] mx-auto px-4 sm:px-6 lg:px-6 py-4">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="-mb-px flex gap-4 sm:gap-8 px-4 sm:px-6 min-w-0">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${
                    activeTab === tab.key
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center gap-2`}
                >
                  {tab.label}
                  <span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Students Grid */}
        <div className="bg-white rounded-lg shadow">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button
                onClick={fetchStudents}
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Retry
              </button>
            </div>
          ) : filteredStudents.length === 0 ? (
            <div className="text-center py-12">
              <PersonIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No students found</h3>
              {/* <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'No students are assigned to you yet'}
              </p> */}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {filteredStudents.map((student) => (
                <div
                  key={student._id}
                  onClick={() => handleStudentClick(student)}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <PersonIcon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <LocationOnIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{student.studyDestination}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <SchoolIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{student.intendedCourse}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-xs border rounded-md px-2 py-1 font-medium ${getStageColor(student.applicationStage)}`}>
                        {student.applicationStage}
                      </span>
                      <span className={`text-xs border rounded-md px-2 py-1 font-medium ${getStatusColor(student.accountStatus)}`}>
                        {student.accountStatus}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Notifications Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCloseNotificationModal}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-auto p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-teal-500 font-semibold">
                  Notifications
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Send updates to students
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Select the students you want to notify and craft your message below.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseNotificationModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notification message
                </label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all p-3 text-sm text-gray-700"
                  placeholder="Type the announcement or update you want to share..."
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => {
                      setSelectedCountry(e.target.value);
                      setSelectedUniversity(''); // Reset university when country changes
                    }}
                    className="w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all p-2.5 text-sm text-gray-700"
                  >
                    <option value="">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by University
                  </label>
                  <select
                    value={selectedUniversity}
                    onChange={(e) => setSelectedUniversity(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all p-2.5 text-sm text-gray-700"
                    disabled={!selectedCountry && availableUniversities.length === 0}
                  >
                    <option value="">All Universities</option>
                    {availableUniversities.map(university => (
                      <option key={university} value={university}>{university}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select students
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">
                      {selectedStudentIds.length} selected
                    </span>
                    {filteredStudentsForNotification.length > 0 && (
                      <button
                        type="button"
                        onClick={handleSelectAllFiltered}
                        className="text-xs font-medium text-teal-600 hover:text-teal-800"
                      >
                        {filteredStudentsForNotification.every(student => selectedStudentIds.includes(student._id))
                          ? 'Deselect All'
                          : 'Select All Filtered'}
                      </button>
                    )}
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl max-h-64 overflow-y-auto divide-y divide-gray-100">
                  {filteredStudentsForNotification.length === 0 ? (
                    <p className="p-4 text-sm text-gray-500 text-center">
                      {students.length === 0 
                        ? 'No students available to select.'
                        : 'No students match the selected filters.'}
                    </p>
                  ) : (
                    filteredStudentsForNotification.map((student) => (
                      <label
                        key={student._id}
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">{student.name}</p>
                          <p className="text-xs text-gray-500">{student.email || 'No email provided'}</p>
                          {((student.enrolledCountry && student.enrolledCountry.length > 0) || (student.enrolledUniversity && student.enrolledUniversity.length > 0)) && (
                            <p className="text-xs text-gray-400 mt-1">
                              {student.enrolledCountry?.join(', ')}
                              {(student.enrolledCountry && student.enrolledCountry.length > 0) && (student.enrolledUniversity && student.enrolledUniversity.length > 0) && ' • '}
                              {student.enrolledUniversity?.join(', ')}
                            </p>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                          checked={selectedStudentIds.includes(student._id)}
                          onChange={() => handleToggleStudentSelection(student._id)}
                        />
                      </label>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseNotificationModal}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSendNotification}
                disabled={sendingNotification}
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sendingNotification ? 'Sending...' : 'Send Notification'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Student Details Modal */}
      {showModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <PersonIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedStudent.name}</h2>
                  <p className="text-sm text-gray-500">{selectedStudent.email}</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <EmailIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email</p>
                      <p className="text-sm text-gray-600">{selectedStudent.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600">{selectedStudent.phone || 'Not provided'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <PersonIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Gender</p>
                      <p className="text-sm text-gray-600 capitalize">{selectedStudent.gender}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CalendarTodayIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Date of Birth</p>
                      <p className="text-sm text-gray-600">
                        {selectedStudent.dob ? new Date(selectedStudent.dob).toLocaleDateString() : 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {selectedStudent.address && (
                  <div className="mt-4 flex items-start space-x-3">
                    <LocationOnIcon className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Address</p>
                      <p className="text-sm text-gray-600">{selectedStudent.address}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <LocationOnIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Study Destination</p>
                      <p className="text-sm text-gray-600">{selectedStudent.studyDestination}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <SchoolIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Intended Course</p>
                      <p className="text-sm text-gray-600">{selectedStudent.intendedCourse}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <SchoolIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Preferred University</p>
                      <p className="text-sm text-gray-600">{selectedStudent.preferedUniversity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <DescriptionIcon className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Scholarship Applied</p>
                      <p className="text-sm text-gray-600">{selectedStudent.scholarshipApplied}</p>
                    </div>
                  </div>

                  {selectedStudent.enrolledCountry && selectedStudent.enrolledCountry.length > 0 && (
                    <div className="flex items-center space-x-3">
                      <LocationOnIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Enrolled Country</p>
                        <p className="text-sm text-gray-600">
                          {selectedStudent.enrolledCountry.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedStudent.enrolledUniversity && selectedStudent.enrolledUniversity.length > 0 && (
                    <div className="flex items-center space-x-3">
                      <SchoolIcon className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Enrolled University</p>
                        <p className="text-sm text-gray-600">
                          {selectedStudent.enrolledUniversity.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Application Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Application Stage</p>
                    <span className={`text-sm border rounded-md px-3 py-2 font-medium ${getStageColor(selectedStudent.applicationStage)}`}>
                      {selectedStudent.applicationStage}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Document Status</p>
                    <span className={`text-sm border rounded-md px-3 py-2 font-medium ${getDocumentStatusColor(selectedStudent.documentsUploadStatus)}`}>
                      {selectedStudent.documentsUploadStatus === 'completed' ? '✅ Completed' : '⏳ Pending'}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Account Status</p>
                    <span className={`text-sm border rounded-md px-3 py-2 font-medium ${getStatusColor(selectedStudent.accountStatus)}`}>
                      {selectedStudent.accountStatus === 'active' ? '✅ Active' :
                       selectedStudent.accountStatus === 'inactive' ? '❌ Inactive' : '⚠️ Suspended'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                <div className="space-y-3">
                  {selectedStudent.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <DescriptionIcon className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                          {doc.remark && (
                            <p className="text-xs text-gray-500">{doc.remark}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {doc.status === 'verified' ? (
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        ) : doc.status === 'uploaded' ? (
                          <PendingIcon className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <CancelIcon className="w-5 h-5 text-red-500" />
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          doc.status === 'verified' ? 'bg-green-100 text-green-800' :
                          doc.status === 'uploaded' ? 'bg-yellow-100 text-yellow-800' :
                          doc.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              {(selectedStudent.notes || selectedStudent.feesInfo) && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    {selectedStudent.notes && (
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Notes</p>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{selectedStudent.notes}</p>
                      </div>
                    )}

                    {/* Fees info: handle both legacy string and new array structure */}
                    {Array.isArray(selectedStudent.feesInfo) && selectedStudent.feesInfo.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Fees Information</p>
                        <div className="space-y-2">
                          {selectedStudent.feesInfo.map((fee: any, index: number) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {fee.description || `Bill ${index + 1}`}
                                </p>
                                {fee.status && (
                                  <p className="text-xs text-gray-500">
                                    Status: {fee.status}
                                  </p>
                                )}
                              </div>
                              {fee.url && (
                                <a
                                  href={fee.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-600 hover:underline"
                                >
                                  View Document
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedStudent.feesInfo && !Array.isArray(selectedStudent.feesInfo) && typeof selectedStudent.feesInfo === 'string' && (
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Fees Information</p>
                        <a
                          href={selectedStudent.feesInfo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline break-all"
                        >
                          View Fees Document
                        </a>
                      </div>
                    )}

                    {selectedStudent.feeStructure && (
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Fee Structure Document</p>
                        <a
                          href={selectedStudent.feeStructure}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline break-all"
                        >
                          View Fee Structure
                        </a>
                        {selectedStudent.feeStructureGeneratedDate && (
                          <p className="text-xs text-gray-500 mt-1">
                            Generated on:{' '}
                            {new Date(selectedStudent.feeStructureGeneratedDate).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                            })}
                          </p>
                        )}
                        {selectedStudent.feeStructureAgreed !== undefined && (
                          <p className="text-xs text-gray-500">
                            Student agreement: {selectedStudent.feeStructureAgreed ? 'Agreed' : 'Not yet agreed'}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Registration Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Registration Date</p>
                    <p className="text-sm text-gray-600">
                      {new Date(selectedStudent.createdAt).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900">Last Login</p>
                    <p className="text-sm text-gray-600">
                      {new Date(selectedStudent.lastLoginDate).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between p-6 border-t border-gray-200">
              <button
                onClick={() => handleEditClick(selectedStudent)}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 flex items-center gap-2"
              >
                <EditIcon className="w-4 h-4" />
                Edit Student
              </button>
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Student Modal */}
      {showEditModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <EditIcon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Edit Student Information</h2>
                  <p className="text-sm text-gray-500">{selectedStudent.name}</p>
                </div>
              </div>
              <button
                onClick={handleCloseEditModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={editFormData.name || ''}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={editFormData.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="text"
                      value={editFormData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      value={editFormData.gender || ''}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input
                      type="date"
                      value={editFormData.dob ? new Date(editFormData.dob).toISOString().split('T')[0] : ''}
                      onChange={(e) => handleInputChange('dob', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <textarea
                      value={editFormData.address || ''}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Study Destination</label>
                    <input
                      type="text"
                      value={editFormData.studyDestination || ''}
                      onChange={(e) => handleInputChange('studyDestination', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Intended Course</label>
                    <input
                      type="text"
                      value={editFormData.intendedCourse || ''}
                      onChange={(e) => handleInputChange('intendedCourse', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred University</label>
                    <input
                      type="text"
                      value={editFormData.preferedUniversity || ''}
                      onChange={(e) => handleInputChange('preferedUniversity', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Scholarship Applied</label>
                    <input
                      type="text"
                      value={editFormData.scholarshipApplied || ''}
                      onChange={(e) => handleInputChange('scholarshipApplied', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Application Status */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Stage</label>
                    <select
                      value={editFormData.applicationStage || ''}
                      onChange={(e) => handleInputChange('applicationStage', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="Consultation">Consultation</option>
                      <option value="Document Upload">Document Upload</option>
                      <option value="Document Verification">Document Verification</option>
                      <option value="Selected University Application">Selected University Application</option>
                      <option value="Offer Letter">Offer Letter</option>
                      <option value="Visa Approval">Visa Approval</option>
                      <option value="Departure">Departure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Document Status</label>
                    <select
                      value={editFormData.documentsUploadStatus || ''}
                      onChange={(e) => handleInputChange('documentsUploadStatus', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Status</label>
                    <select
                      value={editFormData.accountStatus || ''}
                      onChange={(e) => handleInputChange('accountStatus', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Fees Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fees Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Fees PDF</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileUpload}
                        disabled={uploadingFile}
                        className="hidden"
                        id="fees-upload"
                      />
                      <label
                        htmlFor="fees-upload"
                        className={`flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 ${
                          uploadingFile ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <UploadIcon className="w-4 h-4 mr-2" />
                        {uploadingFile ? 'Uploading...' : 'Choose PDF File'}
                      </label>
                      {(() => {
                        // Derive a single URL for display from either string or array form
                        let currentFeesUrl: string | null = null;
                        if (typeof editFormData.feesInfo === 'string') {
                          currentFeesUrl = editFormData.feesInfo;
                        } else if (Array.isArray(editFormData.feesInfo) && editFormData.feesInfo.length > 0) {
                          const lastFee: any = editFormData.feesInfo[editFormData.feesInfo.length - 1];
                          currentFeesUrl = lastFee?.url || null;
                        }
                        return (
                          currentFeesUrl && (
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-green-600">✓ File uploaded</span>
                              <a
                                href={currentFeesUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline"
                              >
                                View PDF
                              </a>
                            </div>
                          )
                        );
                      })()}
                    </div>
                  </div>
                  
                  {(() => {
                    let currentFeesUrl: string | null = null;
                    if (typeof editFormData.feesInfo === 'string') {
                      currentFeesUrl = editFormData.feesInfo;
                    } else if (Array.isArray(editFormData.feesInfo) && editFormData.feesInfo.length > 0) {
                      const lastFee: any = editFormData.feesInfo[editFormData.feesInfo.length - 1];
                      currentFeesUrl = lastFee?.url || null;
                    }
                    return (
                      currentFeesUrl && (
                        <div className="p-3 bg-gray-50 rounded-md">
                          <p className="text-sm text-gray-600">Current fees document:</p>
                          <a
                            href={currentFeesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline break-all"
                          >
                            {currentFeesUrl}
                          </a>
                        </div>
                      )
                    );
                  })()}
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    value={editFormData.notes || ''}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Add any additional notes about the student..."
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={handleCloseEditModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveStudent}
                disabled={saving}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <SaveIcon className="w-4 h-4" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default RegisteredStudents;
