import React, { useState, useEffect, useMemo, use } from 'react';
import AdminTable from '../AdminTable';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import AddStudentPopup from '../counsellor-admin-components/AddStudentPopup';
import FormToAddRegisteredStudent from '../counsellor-admin-components/formToAddRegisteredStudent';
import FormToAddLeadsManually from '../counsellor-admin-components/formToAddLeadsManually';
import ImportLeadsFromExcel from '../counsellor-admin-components/ImportLeadsFromExcel';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { countryOptions, courseOptions } from '@/lib/adminData';
import { useSearch } from '@/context/SearchContext';
interface Lead {
    leadType: 'pending' | 'follow-up' | 'negative' | 'completed';
    [key: string]: any; // other fields if you’re not typing them yet
  }
  

const CallingDetails:React.FC<{adminData:any,ITEMS_PER_PAGE:number}> = ({adminData,ITEMS_PER_PAGE})  => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('allLeads');
    const [currentDataForTable, setCurrentDataForTable] = useState<any[]>([]);
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE || 10);

    // Global search (top-right header search bar)
    const { debouncedSearchQuery } = useSearch();

    // Leads and Student Data
    const [leads,setLeads] = useState<Lead[]>([]);
    const [pending,setPending] = useState<Lead[]>([]);
    const [followUp,setFollowUp] = useState<Lead[]>([]);
    const [negative, setNegative] = useState<Lead[]>([]);
    const [completed, setCompleted] = useState<Lead[]>([]);
    const [registeredStudents, setRegisteredStudents] = useState<any[]>([]);

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
    const [counsellors, setCounsellors] = useState<any[]>([]);

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

    const  tableHeaders = [
        "S.No",
        "Student Name",
        "Interested Country",
        "Contact No.",
        "Interested Course",
        activeTab=='registered'?'Enrollment Date':'Lead Date',
        "source",
      ];
      
      const csvHeader=[
        'Student Name',
        'Interested Country',
        'Contact No.',
        'Interested Course',
        activeTab=='registered'?'Enrollment Date':'Lead Date',
      ];
      
      const csvDataFields = [
        'name',
        'countryInterested',
        'phone',
        'courseName',
        'createdAt',
        'leadStatus',
        'remark',
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
            { key: "registered", label: 'Students Enrolled', count:registeredStudents.length},
            ];  

        // Fetching leads and registered students data initialization
        useEffect(() => {
            try{   
                fetchLeadsData();
                fetchRegisteredStudents();
                fetchCounsellors();
            }catch(error){
                console.log(error);
            }
        }, [adminData]);

        
        // Setting the data for the table
        useEffect(()=>{
            setCurrentDataForTable(leads)
        },[leads])


        // selecting which data to show
        useEffect(()=>{
            if(activeTab=='registered'){
                setCurrentDataForTable(registeredStudents)
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
        },[activeTab])

        
        // Function to fetch leads data
        const fetchLeadsData = async () => {
            try {
                const token = localStorage.getItem('adminToken');
                if (!token) {
                  setError('Not authenticated. Please log in again.');
                  return;
                }
                if(!adminData){
                  return;
                }
        
                // Ensure token has Bearer prefix
                const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
                const assignedRes = await axios.get(`${baseUrl}/api/leads/get-all-leads-by-counsellor/${adminData._id}`, {
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
            leads.forEach((lead:any)=>{
                if(lead.leadType=='pending'){
                    setPending(prev=>[...prev,lead])
                }else if(lead.leadType=='follow-up'){
                    setFollowUp(prev=>[...prev,lead])
                }else if(lead.leadType=='negative'){
                    setNegative(prev=>[...prev,lead])
                }else if(lead.leadType=='completed'){
                    setCompleted(prev=>[...prev,lead])
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

              // Check if adminData is available
              if (!adminData || !adminData._id) {
                console.log('AdminData not available yet, skipping registered students fetch');
                return;
              }
      
              // Ensure token has Bearer prefix
              const authToken = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
             const assignedRes = await axios.get(`${baseUrl}/api/registered-students/get-by-counsellor/${adminData._id}`, {
               headers: { 
                 Authorization: authToken
               }
             });

             const registeredData = Array.isArray(assignedRes.data?.data)
               ? assignedRes.data.data
               : [];

             if (registeredData.length) {
               const sorted = [...registeredData].sort((a: any, b: any) =>
                 String(a?.name ?? '').toLowerCase().localeCompare(
                   String(b?.name ?? '').toLowerCase()
                 )
               );
               setRegisteredStudents(sorted);
             } else {
               setRegisteredStudents([]);
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
            assignedTo={adminData}
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

          
         </div>
     );
 };

export default CallingDetails
