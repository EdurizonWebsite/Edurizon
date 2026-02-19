import React, { useState,useEffect } from 'react'
import DocumentLayout from '@/components/admin/DocumentLayout'
import CounsellorDetails from '@/components/admin/counsellor-admin-components/counsellerDetails';
import CallingDetails from '@/components/admin/counsellor-admin-components/callingDetails';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
    //     href: "/admin/counsellor-admin/view-sessions",
    //     icon: <ArrowForwardIosIcon />,
    //     label: "View Sessions",
    // },
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
        <div>
            <CounsellorDetails/>
            <CallingDetails/>
        </div>
        </DocumentLayout>
    </div>
  )
}


export default CounsellorAdmin
