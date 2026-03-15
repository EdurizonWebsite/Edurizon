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
interface Lead {
    leadType: 'pending' | 'follow-up' | 'negative' | 'completed' | 'registered';
    [key: string]: any; // other fields if you’re not typing them yet
  }
  

const CallingDetails = ()  => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('allLeads');
    const [currentDataForTable, setCurrentDataForTable] = useState<any[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Global search (top-right header search bar)
    const { debouncedSearchQuery } = useSearch();

    // Leads and Student Data
    const [leads,setLeads] = useState<Lead[]>([]);
    const [pending,setPending] = useState<Lead[]>([]);
    const [followUp,setFollowUp] = useState<Lead[]>([]);
    const [negative, setNegative] = useState<Lead[]>([]);
    const [completed, setCompleted] = useState<Lead[]>([]);
    const [registered, setRegistered] = useState<Lead[]>([]);
    const [enrolledStudents, setenrolledStudents] = useState([]);
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
      source: '',
    });
    
    // Assign counsellor states
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [counsellors, setCounsellors] = useState<any[]>([]);
    const [selectedCounsellor, setSelectedCounsellor] = useState('');
    const [assigningCounsellor, setAssigningCounsellor] = useState(false);

    const  tableHeaders = [
        "S.No",
        "Student Name",
        "Interested Country",
        "Contact No.",
        "Interested Course",
        activeTab=='registered'?'Enrollment Date':'Lead Date',
        'Assigned to',
        'Source',
      ];
      
      const csvHeader=[
        'Student Name',
        'Interested Country',
        'Contact No.',
        'Interested Course',
        activeTab=='registered'?'Enrollment Date':'Lead Date',
        'Current Status',
        'Remark',
        'Assigned to',
        'Source',
      ];
      
      const csvDataFields = [
        'name',
        'countryInterested',
        'phone',
        'courseName',
        'createdAt',
        'leadStatus',
        'remark',
        'assignedCounsellorName',
        'source'
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
            key: "assigned to",
            render: (lead:any) => (
              <span className="text-sm text-gray-500">{lead.assignedCounsellorName??'None'}</span>
            ),
          },
        {
            key: "source",
            render: (lead:any) => (
              <span className="text-sm text-gray-500">{lead.source || 'Website'}</span>
            ),
          },
        ];
        const tabs = [
            { key: "allLeads", label: "All Leads", count: leads.length},
            { key: "pending", label:'Pending', count:pending.length},
            { key: "follow-up", label:'Follow Up', count:followUp.length},
            { key: "negative", label: 'Negative', count:negative.length},
            { key: "completed", label: 'Positive', count:completed.length},
            { key: "registered", label: 'Registered', count:registered.length},
            { key: "enrolled", label: 'Students Enrolled', count:enrolledStudents.length},
            ];  

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

                // Prefer enrolledCountry/enrolledUniversity if present, else fall back to lead fields
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

        // Setting the data for the table
        useEffect(()=>{
            setCurrentDataForTable(leads)
        },[leads])


        // selecting which data to show
        useEffect(()=>{
            if(activeTab=='enrolled'){
                setCurrentDataForTable(enrolledStudents)
            }else if(activeTab=='allLeads'){
                setCurrentDataForTable(leads)
            }else if(activeTab=='pending'){
                setCurrentDataForTable(pending)
            }else if(activeTab=='follow-up'){
                setCurrentDataForTable(followUp)
            }else if(activeTab=='negative'){
                setCurrentDataForTable(negative)
            }else if(activeTab=='completed'){
                setCurrentDataForTable(completed)
            }else if(activeTab=='registered'){
                setCurrentDataForTable(registered)
            }
            // Clear filters and selections when switching tabs
            setFilterCriteria({
                name: '',
                country: '',
                course: '',
                status: '',
                counsellor: '',
                source: '',
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
                  filterLeads(assignedRes.data.data);
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
        const filterLeads = (leads:any)=>{

            setPending([])
            setFollowUp([])
            setNegative([])
            setCompleted([])
            setRegistered([])
            leads.forEach((lead:any)=>{
                if(lead.leadType=='pending'){
                    setPending(prev=>[...prev,lead])
                }else if(lead.leadType=='follow-up'){
                    setFollowUp(prev=>[...prev,lead])
                }else if(lead.leadType=='negative'){
                    setNegative(prev=>[...prev,lead])
                }else if(lead.leadType=='completed'){
                    setCompleted(prev=>[...prev,lead])
                }else if(lead.leadType=='registered'){
                    setRegistered(prev=>[...prev,lead])
                }
            })
        }


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
                setenrolledStudents(assignedRes.data);
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
            let filteredData = [...leads];
            
            if (filterCriteria.name) {
                filteredData = filteredData.filter(lead => 
                    lead.name.toLowerCase().includes(filterCriteria.name.toLowerCase())
                );
            }
            
            if (filterCriteria.country) {
                filteredData = filteredData.filter(lead => 
                    lead.countryInterested?.toLowerCase() === filterCriteria.country.toLowerCase()
                );
            }
            
            if (filterCriteria.course) {
                filteredData = filteredData.filter(lead => 
                    lead.courseName?.toLowerCase() === filterCriteria.course.toLowerCase()
                );
            }
            
            if (filterCriteria.status) {
                filteredData = filteredData.filter(lead => 
                    lead.leadType === filterCriteria.status
                );
            }
            
            if (filterCriteria.counsellor) {
                filteredData = filteredData.filter(lead => 
                    lead.assignedCounsellor === filterCriteria.counsellor
                );
            }

            if (filterCriteria.source.trim()) {
                const sourceQuery = filterCriteria.source.trim().toLowerCase();
                filteredData = filteredData.filter(lead =>
                    String(lead.source || 'Website').toLowerCase().includes(sourceQuery)
                );
            }
            
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
                source: '',
            });
            setCurrentDataForTable(leads);
            setShowFilterModal(false);
            setSelectedLeads([]); // Clear selected leads when filters are cleared
            setSelectedCounsellor('');
        };

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
                setLoading(true);
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
                        const url=activeTab=='enrolled'?`${baseUrl}/api/registered-students/${lead._id}`:`${baseUrl}/api/leads/${lead._id}`;
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
                    }
                } else {
                    setError(`Failed to delete any leads. ${errorCount} errors occurred.`);
                }
            } catch (err: any) {
                setError('Failed to delete leads');
                console.error('Delete error:', err);
            } finally {
                setLoading(false);
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
                        console.log("url",url);
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
                    }
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
        <div className='m-[32px] rounded-[8px] bg-white py-[16px] px-[8px] shadow-sm'>
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
            <div className=' m-[16px] rounded-[8px] overflow-hidden shadow-sm'>
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
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                      <input
                        type="text"
                        value={filterCriteria.source}
                        onChange={(e) => setFilterCriteria(prev => ({ ...prev, source: e.target.value }))}
                        placeholder="Search by source..."
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

export default CallingDetails
