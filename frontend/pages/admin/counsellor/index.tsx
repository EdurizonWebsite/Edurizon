import Layout from '@/components/admin/DocumentLayout';
import { useState } from 'react';
import BreadcrumbAdmin from '@/components/BreadcumbAdmin';
import { useEffect } from 'react';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
import {  TrashIcon, ShareIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import toast, { Toaster } from 'react-hot-toast';
import CallingDetails from '@/components/admin/counsellor-components/callingDetails';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const navItems = [
    {
      href: "/admin/counsellor",
      icon: <GridViewIcon />,
      label: "Overview",
    },
  {
    href: "/admin/counsellor/calling-records",
    icon: <CallIcon />,
    label: "Calling Records",
  },
  // {
  //   href: "/admin/counsellor/messages",
  //   icon: <MessageIcon />,
  //   label: "Messages",
  // },
  // {
  //   href: "/admin/counsellor/view-sessions",
  //   icon: <ArrowForwardIosIcon />,
  //   label: "View Sessions",
  // },
];

const Dashboard = () => {
  const [adminData, setAdminData] = useState<any>(null);
  useEffect(() => {
    if(sessionStorage.getItem('adminData')){
      const value = sessionStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
    else{
      const value = localStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
  }, []);
  

  return (
     <Layout navItems={navItems}>
      <Toaster />
      <div className="min-w-0 px-2 sm:px-0">
        <CallingDetails adminData={adminData} ITEMS_PER_PAGE={10} />
      </div>
      </Layout>

  );
};

export default Dashboard;