import React, { useState, useEffect, useMemo } from 'react';
import DocumentLayout from '@/components/admin/DocumentLayout';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import toast, { Toaster } from 'react-hot-toast';
import AdminTable from '@/components/admin/AdminTable';
import { useRouter } from "next/router";
import { TransitionLink } from '@/utils/TransitionLink';
import { useSearch } from '@/context/SearchContext';
import { filterStudents } from '@/utils/studentFilter';
import GridViewIcon from '@mui/icons-material/GridView';
const navItems = [
  {
    href: "/admin/document",
    icon: <GridViewIcon />,
    label: "Overview",
  }
]

const  tableHeaders = [
  "S.No",
  "Student Name",
  "Country",
  "Contact Number",
  "Email",
  "Status of Upload",
  "Uploaded Documents",
];

const csvHeader=[
  'Student Name',
  'Country Studying',
  'Contact Number',
  'Email',
  'Status of Upload',
  'Uploaded Documents',
];

const csvDataFields = [
  'name',
  'interestedCountry',
  'phone',
  'email',
  'counsellingStatus',
  'typeofLead',
  'createdAt'
];  

const DocumentManagement = () => {
  const { debouncedSearchQuery } = useSearch();

  // Action Button
  const [openDropdownId2, setOpenDropdownId2] = useState<string | null>(null);  

  // Table Data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [adminData, setAdminData] = useState<any>(null);
  const [registeredStudents, setRegisteredStudents] = useState<any[]>([]);
  const [currentLeads,setCurrentLeads] = useState<any[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
   const router = useRouter();


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
    key: "studyDestination",
    render: (lead:any) => (
      <span className="text-sm text-gray-500">{lead.studyDestination}</span>
    ),
  },
  {
    key: "phone",
    render: (lead:any) => (

        <span className="text-sm text-gray-500">{lead.phone}</span>
    ),
  },
  {
    key: "email",
    render: (lead:any) => (
            <a
        className="text-sm text-gray-500"
        href={`mailto:${lead.email}`}
      >
      <span className="text-sm text-gray-500">{lead.email}</span>
      </a>
    ),
  },
  {
    key: "documentsUploadStatus",
    render: (lead:any) => (
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdownId2(openDropdownId2 === lead._id ? null : lead._id)
          }
          className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium  items-center"
        >
          {lead.documentsUploadStatus}
          <ExpandMoreIcon className="w-4 h-4 ml-1" />
        </button>
        {openDropdownId2 === lead._id && (
          <div className="absolute z-10 mt-2 w-min rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1 max-h-48"
              role="menu"
            >
              <button
                onClick={()=>{updateStatusOfUpload(lead._id,"pending");}
                }
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Pending
              </button>
              
            </div>
            <div
              className="py-1 max-h-48"
              role="menu"
            >
            <button
                onClick={()=>{updateStatusOfUpload(lead._id,"completed");}
                }
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Completed
              </button>
              </div>
          </div>
        )}
      </div>
    ),
  },
  {
    key: "view",
    render: (lead:any) => (
      <div className="relative">
        <TransitionLink href={`/admin/document/${lead._id}`}>
          <button
            className="bg-teal-100  text-teal-800 px-[64px] py-[8px] rounded-full text-sm font-medium  items-center"
        >
          View
        </button>
        </TransitionLink>
      </div>
    ),
  },
  ];

  useEffect(() => {
    if(sessionStorage.getItem('adminData')){
      const value = sessionStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }else{
      const value = localStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
    
  }, []);

  useEffect(() => {
    if(adminData){fetchRegisteredStudents();
  }
  }, [adminData]);

    // Tabs and its 
  const [activeTab, setActiveTab] = useState('allStudents');

   const tabs = [
    { key: "allStudents", label: "All Students", count: registeredStudents.length },
    ];


  // Fetch registered students
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

  // Update Status of Upload
  const updateStatusOfUpload=async(id:string,status:string)=>{
    try {
      const response = await axios.put(
        `${baseUrl}/api/registered-students/updateStatus/${id}`,
        { id, status },
      );
      if (response.data) {
        toast.success('Updated successfully', {
          duration: 3000,
          position: 'top-right',
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
          },
        });
        setOpenDropdownId2(null);
        fetchRegisteredStudents();
      }
    } catch (err: any) {
      console.log("err",err);
    }
  }




  // Filter students based on global search query
  const filteredStudents = useMemo(() => {
    const students = activeTab === 'allStudents' ? registeredStudents : [];
    return filterStudents(students, debouncedSearchQuery);
  }, [activeTab, registeredStudents, debouncedSearchQuery]);

  useEffect(() => {
    setCurrentLeads(filteredStudents);
  }, [filteredStudents]);

  return (
    <DocumentLayout navItems={navItems}>
      <Toaster />
      <div>
        {}
        <div className="py-8">
            <div className="px-4 sm:px-6 md:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Document Management</h1>
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
          </div>
        </div>
        <AdminTable ITEMS_PER_PAGE={itemsPerPage} tableHeaders={tableHeaders} tableColumns={tableColumns} leads={currentLeads} loading={loading} error={error} csvHeader={csvHeader} csvDataFields={csvDataFields} tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </DocumentLayout>
  );
};

export default DocumentManagement;
