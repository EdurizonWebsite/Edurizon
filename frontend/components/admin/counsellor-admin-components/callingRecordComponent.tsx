import React, { useState, useEffect, useMemo, use } from 'react';
import AdminTable from '../AdminTable';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import AddStudentPopup from './AddStudentPopup';
import FormToAddRegisteredStudent from './formToAddRegisteredStudent';
import FormToAddLeadsManually from './formToAddLeadsManually';
import ImportLeadsFromExcel from './ImportLeadsFromExcel';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { countryOptions, courseOptions } from '@/lib/adminData';
import { useSearch } from '@/context/SearchContext';
import { applyLeadFilters } from '@/lib/leadFilters';
interface Lead {
    leadType: 'pending' | 'follow-up' | 'negative' | 'completed';
    [key: string]: any; // other fields if you’re not typing them yet
  }
  

const CallingRecordComponent = ()  => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('allLeads');
    const [currentDataForTable, setCurrentDataForTable] = useState<any[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Global search (top-right header search bar)
    const { debouncedSearchQuery } = useSearch();

    // Leads and Student Data
    const [leads,setLeads] = useState<Lead[]>([]);
    const [registeredStudents, setRegisteredStudents] = useState([]);
    const [selectedLead,setSelectedLead] = useState<Lead|null>(null);

    // Popup Open States
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isFormToAddRegisteredStudentDialogOpen, setIsFormToAddRegisteredStudentDialogOpen] = useState(false);
    const [isFormToAddLeadsManuallyDialogOpen, setIsFormToAddLeadsManuallyDialogOpen] = useState(false);
    const [isImportLeadsFromExcelDialogOpen, setIsImportLeadsFromExcelDialogOpen] = useState(false);
    
    // Filter and selection states
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [selectedLeads, setSelectedLeads] = useState<Lead[]>([]);
    const [filterCriteria, setFilterCriteria] = useState({
      name: '',
      country: '',
      course: '',
      status: '',
      counsellor: '',
      city: '',
      state: ''
    });
    
    // Assign counsellor states
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [counsellors, setCounsellors] = useState<any[]>([]);
    const [selectedCounsellor, setSelectedCounsellor] = useState('');
    const [assigningCounsellor, setAssigningCounsellor] = useState(false);
    
    // Pending follow-ups states
    const [pendingFollowUps, setPendingFollowUps] = useState<any[]>([]);
    const [showReassignModal, setShowReassignModal] = useState(false);
    const [selectedFollowUpLeads, setSelectedFollowUpLeads] = useState<any[]>([]);
    const [reassigningCounsellor, setReassigningCounsellor] = useState('');

    const  tableHeaders = [
    "S.No",
    "Student Name",
    "Interested Country",
    "Contact No.",
    "City",
    "State",
    "Interested Course",
    activeTab=='registered'?'Enrollment Date':'Lead Date',
    "Calling Date",
    'Calling Status',
    'Lead Type'
  ];
      
      const csvHeader=[
        'Student Name',
        'Interested Country',
        'Contact No.',
        'Interested Course',
        activeTab=='registered'?'Enrollment Date':'Lead Date',
        'Calling Status',
        'Lead Type'
      ];
      
      const csvDataFields = [
        'name',
        'countryInterested',
        'phone',
        'courseName',
        'createdAt',
        'leadStatus',
        'leadType'
      ];

      const tableColumns = [
        {
          key: "sno",
          render: (lead:any, index:number) => index + 1,
        },
        {
          key: "name",
          render: (lead:any) => (
            <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">{lead.name}</div>
            </div>
          ),
        },
        {
          key: "country",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">{lead.countryInterested??'None'}</span>
          ),
        },
        {
          key: "contactNo",
          render: (lead:any) => (
      
              <span className="text-sm text-gray-500">{lead.phone}</span>
          ),
        },
        {
          key: "city",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">{lead.city || 'N/A'}</span>
          ),
        },
        {
          key: "state",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">{lead.state || 'N/A'}</span>
          ),
        },
        {
          key: "course",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">{lead.courseName??'None'}</span>
          ),
        },
        {
          key: "date",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">{new Date(lead.createdAt).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              })}</span>
          ),
        },
        {
          key: "callDate",
          render: (lead:any) => (
            <span className="text-sm text-gray-500">
              {lead.callingDate?
              new Date(lead.callingDate).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              }):'Not Available'}</span>
          ),
        },
           {
            key: "callingStatus",
            render: (lead:any) => {
              const status = lead.callingStatus || 'pending';
              const label = status
                .split('-')
                .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ');

              const getCallingStatusClasses = (value: string) => {
                switch (value) {
                  case 'pending':
                    return 'text-yellow-700 bg-yellow-50 border-yellow-200';
                  case 'follow-up':
                    return 'text-blue-700 bg-blue-50 border-blue-200';
                  case 'call-back':
                    return 'text-orange-700 bg-orange-50 border-orange-200';
                  case 'no-answer':
                    return 'text-orange-700 bg-orange-50 border-orange-200';
                  case 'expensive':
                    return 'text-pink-700 bg-pink-50 border-pink-200';
                  case 'not-interested':
                    return 'text-red-700 bg-red-50 border-red-200';
                  case 'switched-off':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'wrong-no':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'already-taken':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'incoming-not-available':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'in-10th-12th':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'confirmed':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'next-year':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'after-neet':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'call-cut':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'line-busy':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'plan-changed':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  case 'wrongly-clicked':
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                  default:
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                }
              };
              return (
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getCallingStatusClasses(
                    status
                  )}`}
                >
                  {label}
                </span>
              );
            },
          },
          {
            key: "leadType",
            render: (lead:any) => {
              const type = lead.leadType || 'none';
              const label = type !== 'none'
                ? type === 'completed'
                  ? 'Positive'
                  : type === '2027-lead'
                    ? '2027 Lead'
                    : type.charAt(0).toUpperCase() + type.slice(1)
                : 'None';

              const getLeadStatusClasses = (status: string) => {
                switch (status) {
                  case 'pending':
                    return 'text-yellow-700 bg-yellow-50 border-yellow-200';
                  case 'follow-up':
                    return 'text-blue-700 bg-blue-50 border-blue-200';
                  case 'negative':
                    return 'text-red-700 bg-red-50 border-red-200';
                  case 'completed':
                    return 'text-green-700 bg-green-50 border-green-200';
                  case 'registered':
                    return 'text-purple-700 bg-purple-50 border-purple-200';
                  case 'positive-plus':
                    return 'text-pink-700 bg-pink-50 border-pink-200';
                  case '2027-lead':
                    return 'text-teal-700 bg-teal-50 border-teal-200';
                  case 'warm':
                    return 'text-orange-700 bg-orange-50 border-orange-200';
                  case 'cold':
                    return 'text-blue-700 bg-blue-50 border-blue-200';
                  default:
                    return 'text-gray-700 bg-gray-50 border-gray-200';
                }
              };

              return (
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getLeadStatusClasses(
                    type
                  )}`}
                >
                  {label}
                </span>
              );
            },
          }
        ];

        
        // State for mapped data and tabs
        const [mappedData, setMappedData] = useState<Array<{
            type: string;
            key: string;
            label: string;
            count: number;
            data: any[];
            counsellorId?: string;
        }>>([]);

        const [tabs, setTabs] = useState<Array<{
            key: string;
            label: string;
            count: number;
        }>>([]);

        // Calculate stats for each counsellor
        const getCounsellorStats = (counsellorId: string) => {
            const counsellorLeads = leads.filter((lead: any) => 
                lead.assignedCounsellor?._id === counsellorId || lead.assignedCounsellor === counsellorId
            );

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            
            const oneWeekAgo = new Date(today);
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

            const todayLeads = counsellorLeads.filter((lead: any) => {
                if (!lead.callingDate) return false;
                const callingDate = new Date(lead.callingDate);
                callingDate.setHours(0, 0, 0, 0);
                return callingDate.getTime() === today.getTime();
            });

            const yesterdayLeads = counsellorLeads.filter((lead: any) => {
                if (!lead.callingDate) return false;
                const callingDate = new Date(lead.callingDate);
                callingDate.setHours(0, 0, 0, 0);
                return callingDate.getTime() === yesterday.getTime();
            });

            const lastWeekLeads = counsellorLeads.filter((lead: any) => {
                if (!lead.callingDate) return false;
                const callingDate = new Date(lead.callingDate);
                callingDate.setHours(0, 0, 0, 0);
                return callingDate >= oneWeekAgo && callingDate <= today;
            });

            return {
                today: todayLeads.length,
                yesterday: yesterdayLeads.length,
                lastWeek: lastWeekLeads.length
            };
        };

        // Function to create mapped data structure
        const createMappedData = (leadsData: Lead[]) => {
            const mappedData: Array<{
                type: string;
                key: string;
                label: string;
                count: number;
                data: any[];
                counsellorId?: string;
                stats?: { today: number; yesterday: number; lastWeek: number };
            }> = [];
            
            // Add all leads entry
            mappedData.push({
                type: 'allLeads',
                key: 'allLeads',
                label: 'All Leads',
                count: leadsData.length,
                data: leadsData
            });
            
      
            
             
            counsellors.forEach((counsellor:any)=>{
                const counsellorLeads = leadsData.filter((lead:any)=>{
                    return lead.assignedCounsellor?._id===counsellor._id || lead.assignedCounsellor === counsellor._id;
                });
                if(counsellorLeads.length>0){
                    const stats = getCounsellorStats(counsellor._id);
                    mappedData.push({
                        type: counsellor._id,
                        key: counsellor._id,
                        label: counsellor.firstName+' '+counsellor.lastName,
                        count: counsellorLeads.length,
                        data: counsellorLeads,
                        counsellorId: counsellor._id,
                        stats: stats
                    });
                }
            });


            // Add unassigned leads
            const unassignedLeads = leadsData.filter(lead => {
                const counsellorId = lead.assignedCounsellor || lead.counsellor || lead.assignedTo;
                const counsellorName = lead.assignedCounsellorName || lead.counsellorName || lead.assignedToName;
                return !counsellorId || !counsellorName;
            });
            
            if (unassignedLeads.length > 0) {
                mappedData.push({
                    type: 'unassigned',
                    key: 'unassigned',
                    label: 'Unassigned Leads',
                    count: unassignedLeads.length,
                    data: unassignedLeads
                });
            }

            return mappedData;
        };

        // Function to handle tab selection from mapped data
        const handleMappedTabSelect = (item: any) => {
            if (item.type === 'allLeads') {
                setCurrentDataForTable(leads);
                setActiveTab('allLeads');
            } else if (item.type === 'counsellor') {
                setCurrentDataForTable(item.data);
                setActiveTab(`counsellor-${item.counsellorId}`);
            } else if (item.type === 'unassigned') {
                setCurrentDataForTable(item.data);
                setActiveTab('unassigned');
            }
            
            // Clear filters and selections when switching tabs
            setFilterCriteria({
                name: '',
                country: '',
                course: '',
                status: '',
                counsellor: '',
                city: '',
                state: ''
            });
            setSelectedLeads([]);
            setSelectedCounsellor('');
        };  

        // Fetching leads and registered students data initialization
        useEffect(() => {
            try{   
                fetchLeadsData();
                fetchRegisteredStudents();
                fetchCounsellors();
            }catch(error){
                console.log(error);
            }
        }, []);

        // Calculate pending follow-ups (current and past dates) - Show ALL leads with followUpDate, regardless of status
        useEffect(() => {
            if (leads.length > 0) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                const pending = leads.filter((lead: any) => {
                    if (!lead.followUpDate) return false;
                    const followUpDate = new Date(lead.followUpDate);
                    followUpDate.setHours(0, 0, 0, 0);
                    // Include today and past dates - show ALL leads with followUpDate, not just those with 'follow-up' status
                    return followUpDate <= today;
                });
                
                setPendingFollowUps(pending);
            }
        }, [leads]);

        // Setting the data for the table
        useEffect(()=>{
            setCurrentDataForTable(leads)
        },[leads])

        // Update mapped data and tabs when leads or counsellors change
        useEffect(() => {
            if (leads.length > 0 && counsellors.length > 0) {
                const newMappedData = createMappedData(leads);
                setMappedData(newMappedData);
                
                // Create tabs from mapped data: All Leads + Counsellors
                const newTabs = newMappedData.map(item => ({
                    key: item.key,
                    label: item.label,
                    count: item.count,
                    stats: item.stats
                }));
                setTabs(newTabs);

            }
        }, [leads, counsellors]);


        // selecting which data to show
        useEffect(()=>{
           if(activeTab=='allLeads'){
                setCurrentDataForTable(leads)
            }else if(activeTab=='unassigned'){
                // Find unassigned data from mapped data
                const unassignedData = mappedData.find(item => item.key === 'unassigned');
                if (unassignedData) {
                    setCurrentDataForTable(unassignedData.data);
                }
            }else {
                const counsellorData = mappedData.find(item => item.key === activeTab);
                if (counsellorData) {
                    setCurrentDataForTable(counsellorData.data);
                }
            }
            // Clear filters and selections when switching tabs
            setFilterCriteria({
                name: '',
                country: '',
                course: '',
                status: '',
                counsellor: '',
                city: '',
                state: ''
            });
            setSelectedLeads([]);
            setSelectedCounsellor('');
        },[activeTab])

        
        // Function to fetch leads data
        const fetchLeadsData = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                  setError('Not authenticated. Please log in again.');
                  return;
                }
        
                // Ensure token has Bearer prefix
                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                const assignedRes = await axios.get(`${baseUrl}/api/leads/get-all`, {
                  headers: { 
                    Authorization: authToken
                  }
                });
                                 if (assignedRes.data.success) {
                   setLeads(assignedRes.data.data);
                 }
              } catch (err: any) {
                console.log("err",err);
                if (err.response?.status === 401) {
                  setError('Session expired. Please log in again.');
                  // Redirect to login page
                  window.location.href = '/admin';
                } else {
                  setError(err.response?.data?.message || 'Failed to fetch leads');
                }
              } finally {
                setLoading(false);
              }
        };

        // Filter after fetching leads


        // Fetch registered Students
        const fetchRegisteredStudents = async () => {
            try {
              const token = localStorage.getItem('adminToken');
              if (!token) {
                setError('Not authenticated. Please log in again.');
                return;
              }
      
              // Ensure token has Bearer prefix
              const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
              const assignedRes = await axios.get(`${baseUrl}/api/registered-students/get-all`, {
                headers: { 
                  Authorization: authToken
                }
              });
              if (assignedRes.data) {
                setRegisteredStudents(assignedRes.data);
              }
            } catch (err: any) {
              console.log("err",err);
              if (err.response?.status === 401) {
                setError('Session expired. Please log in again.');
                // Redirect to login page
                window.location.href = '/admin';
              } else {
                setError(err.response?.data?.message || 'Failed to fetch leads');
              }
            } finally {
              setLoading(false);
            }
          };

        // Add Student Button Function to make pop up appear
        const handleOptionSelect = (option: string) => {
            setIsPopupOpen(false);
            
            // Handle different options
            switch (option) {
                case 'registered-student':
                    setIsFormToAddRegisteredStudentDialogOpen(true);
                    break;
                case 'manual-lead':
                    setIsFormToAddLeadsManuallyDialogOpen(true);
                    break;
                case 'import-excel':
                    setIsImportLeadsFromExcelDialogOpen(true);
                    break;
                default:
                    break;
            }
        };

        // Filter leads based on criteria
        const filterLeadsByCriteria = () => {
            const filteredData = applyLeadFilters(leads as any[], filterCriteria);
            
            setCurrentDataForTable(filteredData);
            setShowFilterModal(false);
        };

        // Clear filters and show all leads
        const clearFilters = () => {
            setFilterCriteria({
                name: '',
                country: '',
                course: '',
                status: '',
                counsellor: '',
                city: '',
                state: ''
            });
            setCurrentDataForTable(leads);
            setShowFilterModal(false);
            setSelectedLeads([]); // Clear selected leads when filters are cleared
            setSelectedCounsellor('');
        };

        // Filter data for global search after tab/filter selection but before pagination
        const filteredDataForTable = useMemo(() => {
            const query = debouncedSearchQuery.trim().toLowerCase();
            if (!query) {
                return currentDataForTable;
            }

            return currentDataForTable.filter((lead: any) => {
                const name = String(lead?.name ?? '').toLowerCase();
                const email = String(lead?.email ?? '').toLowerCase();
                const phone = String(lead?.phone ?? '').toLowerCase();

                const universitySource =
                    lead?.enrolledUniversity ??
                    lead?.university ??
                    null;
                const university = Array.isArray(universitySource)
                    ? universitySource.join(' ').toLowerCase()
                    : String(universitySource ?? '').toLowerCase();

                const countrySource =
                    lead?.enrolledCountry ??
                    lead?.countryInterested ??
                    lead?.country ??
                    null;
                const country = Array.isArray(countrySource)
                    ? countrySource.join(' ').toLowerCase()
                    : String(countrySource ?? '').toLowerCase();

                return (
                    name.includes(query) ||
                    email.includes(query) ||
                    phone.includes(query) ||
                    university.includes(query) ||
                    country.includes(query)
                );
            });
        }, [currentDataForTable, debouncedSearchQuery]);

        // Delete selected leads
        const deleteSelectedLeads = async () => {
            if (selectedLeads.length === 0) {
                alert('Please select leads to delete');
                return;
            }

            if (!confirm(`Are you sure you want to delete ${selectedLeads.length} selected lead(s)?`)) {
                return;
            }

            try {
              
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    setError('Not authenticated. Please log in again.');
                    return;
                }

                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                let successCount = 0;
                let errorCount = 0;

                for (const lead of selectedLeads) {
                    const url=activeTab=='registered'?`${baseUrl}/api/registered-students/${lead._id}`:`${baseUrl}/api/leads/${lead._id}`;
                    try {
                        const response = await axios.delete(url, {
                            headers: { Authorization: authToken }
                        });
                        
                        if (response.data.success) {
                            successCount++;
                        } else {
                            errorCount++;
                        }
                    } catch (err) {
                        errorCount++;
                        console.error('Error deleting lead:', lead._id, err);
                    }
                }

                if (successCount > 0) {
                    alert(`Successfully deleted ${successCount} lead(s)${errorCount > 0 ? `, ${errorCount} failed` : ''}`);
                    setSelectedLeads([]);
                    if(activeTab=='registered'){
                      fetchRegisteredStudents();
                  }else{
                      fetchLeadsData(); // Refresh the data
                  } // Refresh the data
                } else {
                    setError(`Failed to delete any leads. ${errorCount} errors occurred.`);
                }
            } catch (err: any) {
                setError('Failed to delete leads');
                console.error('Delete error:', err);
            }
        };

        // Handle lead selection
        const handleLeadSelection = (lead: Lead, isSelected: boolean) => {
            if (isSelected) {
                setSelectedLeads(prev => [...prev, lead]);
            } else {
                setSelectedLeads(prev => prev.filter(l => l._id !== lead._id));
            }
        };

        // Fetch all counsellors
        const fetchCounsellors = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    setError('Not authenticated. Please log in again.');
                    return;
                }

                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                const response = await axios.get(`${baseUrl}/api/admin/getAllCounsellors`, {
                    headers: { Authorization: authToken }
                });

                if (response.data.success) {
                    setCounsellors(response.data.data);
                }
            } catch (err: any) {
                console.error('Error fetching counsellors:', err);
                setError('Failed to fetch counsellors');
            }
        };

        // Reassign pending follow-ups
        const reassignPendingFollowUps = async () => {
            if (selectedFollowUpLeads.length === 0) {
                alert('Please select leads to reassign');
                return;
            }

            if (!reassigningCounsellor) {
                alert('Please select a counsellor');
                return;
            }

            const selectedCounsellorData = counsellors.find(c => c._id === reassigningCounsellor);
            if (!selectedCounsellorData) {
                alert('Selected counsellor not found');
                return;
            }

            if (!confirm(`Are you sure you want to reassign ${selectedFollowUpLeads.length} follow-up lead(s) to ${selectedCounsellorData.firstName} ${selectedCounsellorData.lastName}?`)) {
                return;
            }

            setAssigningCounsellor(true);

            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    setError('Not authenticated. Please log in again.');
                    return;
                }

                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                let successCount = 0;
                let errorCount = 0;

                for (const lead of selectedFollowUpLeads) {
                    try {
                        const response = await axios.put(
                            `${baseUrl}/api/leads/${lead._id}`,
                            {
                                assignedCounsellor: reassigningCounsellor,
                                assignedCounsellorName: `${selectedCounsellorData.firstName} ${selectedCounsellorData.lastName}`
                            },
                            {
                                headers: { Authorization: authToken }
                            }
                        );
                        
                        if (response.data.success) {
                            successCount++;
                        } else {
                            errorCount++;
                        }
                    } catch (err) {
                        errorCount++;
                        console.error('Error reassigning lead:', lead._id, err);
                    }
                }

                if (successCount > 0) {
                    alert(`Successfully reassigned ${successCount} lead(s)${errorCount > 0 ? `, ${errorCount} failed` : ''}`);
                    setSelectedFollowUpLeads([]);
                    setReassigningCounsellor('');
                    setShowReassignModal(false);
                    fetchLeadsData();
                } else {
                    setError(`Failed to reassign any leads. ${errorCount} errors occurred.`);
                }
            } catch (err: any) {
                setError('Failed to reassign leads');
                console.error('Reassign error:', err);
            } finally {
                setAssigningCounsellor(false);
            }
        };

        // Assign counsellor to selected leads
        const assignCounsellorToLeads = async () => {
            if (selectedLeads.length === 0) {
                alert('Please select leads to assign counsellor');
                return;
            }

            if (!selectedCounsellor) {
                alert('Please select a counsellor');
                return;
            }

            const selectedCounsellorData = counsellors.find(c => c._id === selectedCounsellor);
            if (!selectedCounsellorData) {
                alert('Selected counsellor not found');
                return;
            }

            if (!confirm(`Are you sure you want to assign ${selectedCounsellorData.firstName} ${selectedCounsellorData.lastName} to ${selectedLeads.length} selected lead(s)?`)) {
                return;
            }

            setAssigningCounsellor(true);

            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                    setError('Not authenticated. Please log in again.');
                    return;
                }

                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                let successCount = 0;
                let errorCount = 0;

                for (const lead of selectedLeads) {

                    try {
                        const url=activeTab=='registered'?`${baseUrl}/api/registered-students/${lead._id}`:`${baseUrl}/api/leads/${lead._id}`;
                        const response = await axios.put(
                            url,
                            {
                                assignedCounsellor: selectedCounsellor,
                                assignedCounsellorName: `${selectedCounsellorData.firstName} ${selectedCounsellorData.lastName}`
                            },
                            {
                                headers: { Authorization: authToken }
                            }
                        );
                        
                        if (response.data.success) {
                            successCount++;
                        } else {
                            errorCount++;
                        }
                    } catch (err) {
                        errorCount++;
                        console.error('Error assigning counsellor to lead:', lead._id, err);
                    }
                }

                if (successCount > 0) {
                    alert(`Successfully assigned counsellor to ${successCount} lead(s)${errorCount > 0 ? `, ${errorCount} failed` : ''}`);
                    setSelectedLeads([]);
                    setSelectedCounsellor('');
                    setShowAssignModal(false);
                    if(activeTab=='registered'){
                      fetchRegisteredStudents();
                  }else{
                      fetchLeadsData(); // Refresh the data
                  } // Refresh the data
                } else {
                    setError(`Failed to assign counsellor to any leads. ${errorCount} errors occurred.`);
                }
            } catch (err: any) {
                setError('Failed to assign counsellor to leads');
                console.error('Assign error:', err);
            } finally {
                setAssigningCounsellor(false);
            }
        };

        // Add Counsellor Button

   
    return (
        <div className='m-4 sm:m-6 lg:m-[32px] rounded-[8px] bg-white py-[16px] px-[8px] shadow-sm'>
            {/* Pending Follow-ups Section */}
            {pendingFollowUps.length > 0 && (
                <div className='mb-6 mx-[32px] bg-yellow-50 border border-yellow-200 rounded-lg p-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <div>
                            <h5 className='text-lg font-semibold text-yellow-900'>Pending Follow-ups</h5>
                            <p className='text-sm text-yellow-700'>
                                {pendingFollowUps.length} follow-up(s) with current or past dates need attention
                            </p>
                        </div>
                        <button
                            onClick={() => setShowReassignModal(true)}
                            className='bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 text-sm font-medium'
                        >
                            Reassign ({selectedFollowUpLeads.length > 0 ? selectedFollowUpLeads.length : 'Select'})
                        </button>
                    </div>
                    <div className='max-h-48 overflow-y-auto'>
                        <table className='min-w-full text-sm'>
                            <thead className='bg-yellow-100'>
                                <tr>
                                    <th className='px-3 py-2 text-left text-xs font-semibold text-yellow-900'>Select</th>
                                    <th className='px-3 py-2 text-left text-xs font-semibold text-yellow-900'>Student</th>
                                    <th className='px-3 py-2 text-left text-xs font-semibold text-yellow-900'>Assigned To</th>
                                    <th className='px-3 py-2 text-left text-xs font-semibold text-yellow-900'>Follow-up Date</th>
                                    <th className='px-3 py-2 text-left text-xs font-semibold text-yellow-900'>Phone</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-yellow-200'>
                                {pendingFollowUps.map((lead: any) => (
                                    <tr key={lead._id} className='hover:bg-yellow-100'>
                                        <td className='px-3 py-2'>
                                            <input
                                                type='checkbox'
                                                checked={selectedFollowUpLeads.some(l => l._id === lead._id)}
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        setSelectedFollowUpLeads(prev => [...prev, lead]);
                                                    } else {
                                                        setSelectedFollowUpLeads(prev => prev.filter(l => l._id !== lead._id));
                                                    }
                                                }}
                                                className='w-4 h-4 text-yellow-600 border-yellow-300 rounded focus:ring-yellow-500'
                                            />
                                        </td>
                                        <td className='px-3 py-2 text-yellow-900 font-medium'>{lead.name}</td>
                                        <td className='px-3 py-2 text-yellow-700'>{lead.assignedCounsellorName || 'Unassigned'}</td>
                                        <td className='px-3 py-2 text-yellow-700'>
                                            {lead.followUpDate ? new Date(lead.followUpDate).toLocaleDateString('en-IN') : 'N/A'}
                                        </td>
                                        <td className='px-3 py-2 text-yellow-700'>{lead.phone || 'N/A'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <div className='flex justify-between items-center px-[32px]'>
            <h4 className='text-h6Text font-medium font-poppins '>Calling Dashboard</h4>
            <div className='flex items-center gap-[16px] '>
            <div className='flex items-center gap-2 mr-4'>
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
                onClick={() => setShowFilterModal(true)}
                className={`text-[#344054] text-[14px] px-[4px] py-2 rounded-[8px] hover:bg-gray-100 flex items-center ${
                    Object.values(filterCriteria).some(value => value !== '') ? 'bg-teal-100 border border-teal-300' : ''
                }`}
            >
                    <FilterListOutlinedIcon style={{fontSize:'20px'}}/>
                    <span className='ml-[4px]'>Filter</span>
                                         {Object.values(filterCriteria).some(value => value !== '') && (
                         <span className='ml-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full'>
                             {Object.values(filterCriteria).filter(value => value !== '').length}
                         </span>
                     )}
                </button>
            <button 
                onClick={deleteSelectedLeads}
                disabled={selectedLeads.length === 0}
                className={`text-[#344054] text-[14px] px-[4px] py-2 rounded-[8px] hover:bg-gray-100 flex items-center ${
                    selectedLeads.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                    <DeleteOutlinedIcon style={{fontSize:'20px'}}/>
                    <span className='ml-[4px]'>Delete ({selectedLeads.length})</span>
                </button>
                <button 
                    onClick={() => setShowAssignModal(true)}
                    disabled={selectedLeads.length === 0}
                    className={`border-[1px] border-[#D0D5DD] text-[#344054] text-[14px] px-4 py-2 rounded-[8px] hover:bg-gray-100 flex items-center ${
                        selectedLeads.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                    <ModeEditOutlineOutlinedIcon style={{fontSize:'20px'}}/>
                    <span className='ml-[4px]'>Assign ({selectedLeads.length})</span>
                </button>
            </div>
            </div>
            <div className='m-3 sm:m-4 lg:m-[16px] rounded-[8px] overflow-hidden shadow-sm'>
                <AdminTable 
                    ITEMS_PER_PAGE={itemsPerPage} 
                    tableColumns={tableColumns} 
                    tableHeaders={tableHeaders} 
                    csvHeader={csvHeader} 
                    csvDataFields={csvDataFields} 
                    loading={loading} 
                    error={error} 
                    // Apply global search filtering before pagination
                    leads={filteredDataForTable} 
                    setActiveTab={setActiveTab} 
                    tabs={tabs} 
                    activeTab={activeTab} 
                    bgColor="bg-gray-50"
                    setSelectedLead={(leads) => {
                        // Convert lead IDs to actual lead objects
                        const selectedLeadObjects = leads.map((leadId: string) => 
                            currentDataForTable.find(lead => lead._id === leadId)
                        ).filter(Boolean);
                        setSelectedLeads(selectedLeadObjects);
                    }}
                    extraButtons={
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 flex items-center"
                        >
                            <span className="mr-2">+</span>
                            Add Student
                        </button>
                    } 
                />
            </div>
            
            {/* Add Student Popup */}
            <AddStudentPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onOptionSelect={handleOptionSelect}
            />

            {/* Registered Student Form Popup */}
            <FormToAddRegisteredStudent isOpen={isFormToAddRegisteredStudentDialogOpen} onClose={() => setIsFormToAddRegisteredStudentDialogOpen(false)} onSuccess={() => {
            fetchRegisteredStudents();
          }}/>

          {/* Add Leads Manually Popup */}
          <FormToAddLeadsManually isOpen={isFormToAddLeadsManuallyDialogOpen} onClose={() => setIsFormToAddLeadsManuallyDialogOpen(false)} onSuccess={() => {
            fetchLeadsData();
          }}/>

          {/* Import Leads from Excel Popup */}
          <ImportLeadsFromExcel 
            isOpen={isImportLeadsFromExcelDialogOpen} 
            onClose={() => setIsImportLeadsFromExcelDialogOpen(false)} 
            onSuccess={() => {
              fetchLeadsData();
            }}
          />

          {/* Filter Modal */}
          {showFilterModal && (
            <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]">
              <div className="relative bg-white rounded-lg w-[90%] max-w-2xl p-6 m-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Filter Leads</h2>
                  <button onClick={() => setShowFilterModal(false)} className="text-gray-500 hover:text-gray-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        value={filterCriteria.name}
                        onChange={(e) => setFilterCriteria(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Search by name..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                                         <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                       <select
                         value={filterCriteria.country}
                         onChange={(e) => setFilterCriteria(prev => ({ ...prev, country: e.target.value }))}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                       >
                         <option value="">All Countries</option>
                         {countryOptions.map((country) => (
                           <option key={country.value} value={country.value}>
                             {country.label}
                           </option>
                         ))}
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                       <select
                         value={filterCriteria.course}
                         onChange={(e) => setFilterCriteria(prev => ({ ...prev, course: e.target.value }))}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                       >
                         <option value="">All Courses</option>
                         {courseOptions.map((course) => (
                           <option key={course.value} value={course.value}>
                             {course.label}
                           </option>
                         ))}
                       </select>
                     </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        value={filterCriteria.status}
                        onChange={(e) => setFilterCriteria(prev => ({ ...prev, status: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">All Statuses</option>
                        <option value="pending">Pending</option>
                        <option value="follow-up">Follow Up</option>
                        <option value="negative">Negative</option>
                        <option value="completed">Completed</option>
                        <option value="registered">Registered</option>
                        <option value="2027-lead">2027 Lead</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        value={filterCriteria.city}
                        onChange={(e) => setFilterCriteria(prev => ({ ...prev, city: e.target.value }))}
                        placeholder="Search by city..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        value={filterCriteria.state}
                        onChange={(e) => setFilterCriteria(prev => ({ ...prev, state: e.target.value }))}
                        placeholder="Search by state..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                                         <div className="col-span-2">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Counsellor</label>
                       <select
                         value={filterCriteria.counsellor}
                         onChange={(e) => setFilterCriteria(prev => ({ ...prev, counsellor: e.target.value }))}
                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                       >
                         <option value="">All Counsellors</option>
                         {counsellors.map((counsellor) => (
                           <option key={counsellor._id} value={counsellor._id}>
                             {counsellor.firstName} {counsellor.lastName} - {counsellor.email}
                           </option>
                         ))}
                       </select>
                     </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                    <button
                      onClick={clearFilters}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Clear Filters
                    </button>
                    <button
                      onClick={filterLeadsByCriteria}
                      className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-teal-700"
                    >
                      Apply Filters
                    </button>
                                     </div>
                 </div>
               </div>
             </div>
           )}

           {/* Reassign Follow-ups Modal */}
           {showReassignModal && (
             <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]">
               <div className="relative bg-white rounded-lg w-[90%] max-w-md p-6 m-4">
                 <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-semibold text-gray-900">Reassign Pending Follow-ups</h2>
                   <button onClick={() => {
                     setShowReassignModal(false);
                     setReassigningCounsellor('');
                     setSelectedFollowUpLeads([]);
                   }} className="text-gray-500 hover:text-gray-700">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                 </div>

                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                       Select Counsellor
                     </label>
                     <select
                       value={reassigningCounsellor}
                       onChange={(e) => setReassigningCounsellor(e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                       disabled={assigningCounsellor}
                     >
                       <option value="">Choose a counsellor...</option>
                       {counsellors.map((counsellor) => (
                         <option key={counsellor._id} value={counsellor._id}>
                           {counsellor.firstName} {counsellor.lastName} - {counsellor.email}
                         </option>
                       ))}
                     </select>
                   </div>

                   <div className="bg-blue-50 p-3 rounded-md">
                     <p className="text-sm text-blue-700">
                       <strong>Selected Leads:</strong> {selectedFollowUpLeads.length} lead(s)
                     </p>
                     <p className="text-xs text-blue-600 mt-1">
                       {selectedFollowUpLeads.map(lead => lead.name).join(', ')}
                     </p>
                   </div>

                   <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                     <button
                       onClick={() => {
                         setShowReassignModal(false);
                         setReassigningCounsellor('');
                         setSelectedFollowUpLeads([]);
                       }}
                       disabled={assigningCounsellor}
                       className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                     >
                       Cancel
                     </button>
                     <button
                       onClick={reassignPendingFollowUps}
                       disabled={!reassigningCounsellor || assigningCounsellor}
                       className="bg-yellow-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       {assigningCounsellor ? 'Reassigning...' : 'Reassign Leads'}
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           )}

           {/* Assign Counsellor Modal */}
           {showAssignModal && (
             <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]">
               <div className="relative bg-white rounded-lg w-[90%] max-w-md p-6 m-4">
                 <div className="flex justify-between items-center mb-6">
                   <h2 className="text-xl font-semibold text-gray-900">Assign Counsellor</h2>
                   <button onClick={() => {
                     setShowAssignModal(false);
                     setSelectedCounsellor('');
                   }} className="text-gray-500 hover:text-gray-700">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                 </div>

                 <div className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">
                       Select Counsellor
                     </label>
                     <select
                       value={selectedCounsellor}
                       onChange={(e) => setSelectedCounsellor(e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                       disabled={assigningCounsellor}
                     >
                       <option value="">Choose a counsellor...</option>
                       {counsellors.map((counsellor) => (
                         <option key={counsellor._id} value={counsellor._id}>
                           {counsellor.firstName} {counsellor.lastName} - {counsellor.email}
                         </option>
                       ))}
                     </select>
                   </div>

                   <div className="bg-blue-50 p-3 rounded-md">
                     <p className="text-sm text-blue-700">
                       <strong>Selected Leads:</strong> {selectedLeads.length} lead(s)
                     </p>
                     <p className="text-xs text-blue-600 mt-1">
                       {selectedLeads.map(lead => lead.name).join(', ')}
                     </p>
                   </div>

                   <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                     <button
                       onClick={() => {
                         setShowAssignModal(false);
                         setSelectedCounsellor('');
                       }}
                       disabled={assigningCounsellor}
                       className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                     >
                       Cancel
                     </button>
                     <button
                       onClick={assignCounsellorToLeads}
                       disabled={!selectedCounsellor || assigningCounsellor}
                       className="bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       {assigningCounsellor ? 'Assigning...' : 'Assign Counsellor'}
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           )}
         </div>
     );
 };

export default CallingRecordComponent
