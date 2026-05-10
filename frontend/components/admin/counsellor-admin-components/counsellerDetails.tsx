import React, { useState,useEffect, use } from 'react'
import AdminTable from '../AdminTable'
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import AddCounsellor from './addCounsellor';
const CounsellorDetails= ()  => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('allStudents');
    const [counsellorsData, setCounsellorsData] = useState([]);
    const  tableHeaders = [
        "S.No",
        "Member Name",
        "Country",
        "Contact No.",
        "Last Login",
      ];
      
      const csvHeader=[
        'Member Name',
        'Country',
        'Contact No.',
        'Last Login',
      ];
      
      const csvDataFields = [
        'firstName',
        'country',
        'contactNo',
        'lastLogin',
      ];

      const tableColumns = [
        {
          key: "sno",
          render: (counsellor:any, index:number) => index + 1,
        },
        {
          key: "name",
          render: (counsellor:any) => (
            <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">{counsellor.firstName} {counsellor.lastName}</div>
            </div>
          ),
        },
        {
          key: "country",
          render: (counsellor:any) => (
            <span className="text-sm text-gray-500">{counsellor.country.join(', ')}</span>
          ),
        },
        {
          key: "contactNo",
          render: (counsellor:any) => (
      
              <span className="text-sm text-gray-500">{String(counsellor.contactNo)}</span>
          ),
        },
        {
          key: "lastLogin",
          render: (counsellor:any) => (
             
            <span className="text-sm text-gray-500">{!counsellor.lastLogin?'Never Loged in':new Date(counsellor.lastLogin).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
              })}</span>
          ),
        },
        ];
        const tabs = [
            { key: "allCounsellors", label: "All Counsellors Data", count: counsellorsData.length},
            ];  
        useEffect(() => {
            try{
               
                fetchCounsellorsData();
            }catch(error){
                console.log(error);
            }
        }, []);
        const fetchCounsellorsData = async () => {
            const response = await axios.get(`${baseUrl}/api/admin/getAllCounsellors`);
            setCounsellorsData(response.data.data);
        }

    // Add Counsellor Button
    const [isAddCounsellorDialogOpen, setIsAddCounsellorDialogOpen] = useState(false);
    

   
    return (
    <div className='m-4 sm:m-6 lg:m-[32px] rounded-[16px] overflow-hidden'>
      <AdminTable ITEMS_PER_PAGE={5} tableColumns={tableColumns} tableHeaders={tableHeaders} csvHeader={csvHeader} csvDataFields={csvDataFields} loading={loading} error={error} 
        leads={counsellorsData} setActiveTab={setActiveTab} tabs={tabs} activeTab={activeTab} bgColor="bg-white"
         extraButtons={<button
            onClick={() => setIsAddCounsellorDialogOpen(true)}
            className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 flex items-center"
          >
            <span className="mr-2">+</span>
            Add Counsellor
          </button>} />

<AddCounsellor isOpen={isAddCounsellorDialogOpen} onClose={() => setIsAddCounsellorDialogOpen(false)} onSuccess={() => {
            fetchCounsellorsData();
          }}/>
    </div>

    
  )
}

export default CounsellorDetails
