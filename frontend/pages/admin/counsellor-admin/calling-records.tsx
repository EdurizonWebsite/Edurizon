import React, { useState,useEffect } from 'react'
import DocumentLayout from '@/components/admin/DocumentLayout'
import CallingRecordComponent from '@/components/admin/counsellor-admin-components/callingRecordComponent';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
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
    href: "/admin/counsellor-admin/registered-students",
    icon: <PersonIcon />,
    label: "Registered Students",
  },
]

const CounsellorAdmin = () => {
     // Table Data
    
    const [adminData, setAdminData] = useState<any>(null);
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
    

    return (
    <div>
      <DocumentLayout navItems={navItems}>
        <div className="min-w-0">
            <CallingRecordComponent/>
        </div>
        </DocumentLayout>
    </div>
  )
}


export default CounsellorAdmin
