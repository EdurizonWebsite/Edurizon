import React, { useState, useEffect } from 'react';
import AdminTable from '@/components/admin/AdminTable';
import { getLeadsByCounsellor, updateLeadStatus } from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '@/components/admin/DocumentLayout';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSearch } from '@/context/SearchContext';

interface Lead {
  _id: string;
  name: string;
  phone: string;
  countryInterested: string;
  courseName: string;
  callingStatus: 'pending' | 'follow-up' | 'no-answer' | 'not-interested';
  leadType: 'pending' | 'follow-up' | 'negative' | 'completed' | 'registered' | 'positive-plus';
  leadStatus: 'pending' | 'hot' | 'warm' | 'cold' | 'negative' | 'completed' | 'positive-plus';
  remark: string;
  city?: string;
  state?: string;
  updatedAt: string;
  assignedCounsellor: any;
  // Explicit dates stored in DB (can be null/undefined)
  callingDate?: string | null;
  followUpDate?: string | null;
}

const CallingRecords = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [adminData, setAdminData] = useState<any>(null);
  const [showFollowUpModal, setShowFollowUpModal] = useState(false);
  const [selectedLeadForFollowUp, setSelectedLeadForFollowUp] = useState<Lead | null>(null);
  const [followUpDateInput, setFollowUpDateInput] = useState('');
  const [todayFollowUps, setTodayFollowUps] = useState<Lead[]>([]);
  const [pastFollowUps, setPastFollowUps] = useState<Lead[]>([]);
  const [editingRemarkId, setEditingRemarkId] = useState<string | null>(null);
  const [remarkInput, setRemarkInput] = useState('');
  const [editingLocationId, setEditingLocationId] = useState<string | null>(null);
  const [cityInput, setCityInput] = useState('');
  const [stateInput, setStateInput] = useState('');
  const [isSavingLocation, setIsSavingLocation] = useState(false);

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

  // Get counsellor ID from sessionStorage or localStorage
  const counsellorId = adminData?._id;

  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Global search (top-right header search bar)
  const { debouncedSearchQuery } = useSearch();

  const isSameDate = (dateStr?: string | null, refDate?: Date) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    const ref = refDate || new Date();
    const dY = d.getFullYear();
    const dM = d.getMonth();
    const dD = d.getDate();
    return (
      dY === ref.getFullYear() &&
      dM === ref.getMonth() &&
      dD === ref.getDate()
    );
  };

  // Fetch leads for the counsellor
  const fetchLeads = async () => {
    if (!counsellorId) {
      setError('Counsellor ID not found');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await getLeadsByCounsellor(counsellorId);
      if (response.success) {
        setLeads(response.data);
      } else {
        setError(response.message || 'Failed to fetch leads');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  // Filter leads based on active tab + global search (after tab, before pagination)
  useEffect(() => {
    let base: Lead[];

    if (activeTab === 'all') {
      base = leads;
    } else if (activeTab === 'followup') {
      base = leads.filter(lead => lead.leadType === 'follow-up');
    } else {
      base = leads.filter(lead => lead.leadType === activeTab);
    }

    const query = debouncedSearchQuery.trim().toLowerCase();
    if (query) {
      base = base.filter((lead) => {
        const name = (lead.name || '').toLowerCase();
        const phone = (lead.phone || '').toLowerCase();
        const country = (lead.countryInterested || '').toLowerCase();

        return (
          name.includes(query) ||
          phone.includes(query) ||
          country.includes(query)
        );
      });
    }

    setFilteredLeads(base);
  }, [activeTab, leads, debouncedSearchQuery]);

  // Compute today's and past follow-ups whenever leads change
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todayDue = leads.filter((lead) => {
      if (!lead.followUpDate) return false;
      return isSameDate(lead.followUpDate);
    });
    setTodayFollowUps(todayDue);
    
    // Also show past follow-ups (before today)
    const pastDue = leads.filter((lead) => {
      if (!lead.followUpDate) return false;
      const followUpDate = new Date(lead.followUpDate);
      followUpDate.setHours(0, 0, 0, 0);
      return followUpDate < today;
    });
    setPastFollowUps(pastDue);
  }, [leads]);

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

  // Fetch leads on component mount
  useEffect(() => {
    fetchLeads();
  }, [counsellorId]);

  // Handle status updates
  const handleStatusUpdate = async (leadId: string, field: 'callingStatus' | 'leadType' | 'leadStatus', value: string) => {
    try {
      let updateData: any = {};
      if (field === 'callingStatus') {
        updateData = { callingStatus: value };
      } else if (field === 'leadType') {
        updateData = { leadType: value };
      } else if (field === 'leadStatus') {
        updateData = { leadStatus: value };
      }
      
      const response = await updateLeadStatus(leadId, updateData);
      
      if (response.success) {
        // Update local state
        setLeads(prevLeads => 
          prevLeads.map(lead => 
            lead._id === leadId 
              ? { ...lead, [field]: value, updatedAt: new Date().toISOString() }
              : lead
          )
        );
        
        let fieldLabel = '';
        if (field === 'callingStatus') fieldLabel = 'Calling status';
        else if (field === 'leadType') fieldLabel = 'Lead type';
        else if (field === 'leadStatus') fieldLabel = 'Category';
        
        toast.success(`${fieldLabel} updated successfully`);
      } else {
        toast.error(response.message || 'Failed to update status');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || err.message || 'Failed to update status');
    }
  };

  // Define tabs
  const tabs = [
    { key: 'all', label: 'All', count: leads.length },
    { key: 'pending', label: 'Pending', count: leads.filter(lead => lead.leadType === 'pending').length },
    { key: 'followup', label: 'Follow Up', count: leads.filter(lead => lead.leadType === 'follow-up').length },
    { key: 'negative', label: 'Negative', count: leads.filter(lead => lead.leadType === 'negative').length },
    { key: 'completed', label: 'Positive', count: leads.filter(lead => lead.leadType === 'completed').length },
    { key: 'positive-plus', label: 'Positive Plus', count: leads.filter(lead => lead.leadType === 'positive-plus').length },
    { key: 'registered', label: 'Registered', count: leads.filter(lead => lead.leadType === 'registered').length },
  ];

  // Table headers
  const tableHeaders = [
    "S.No",
    "Student Name",
    "Country",
    "Contact Number",
    "City",
    "State",
    "Course",
    "Calling Status",
    "Lead Type",
    "Remark",
    "Calling Date",
    "Follow-up Date",
    "Source",
  ];

  // CSV headers
  const csvHeader = [
    "Student Name",
    "Country",
    "Contact Number",
    "Course",
    "Calling Status",
    "Lead Type",
    "Remark",
    "Calling Date",
    "Follow-up Date"
  ];

  // CSV data fields
  const csvDataFields = [
    "name",
    "countryInterested",
    "phone",
    "courseName",
    "callingStatus",
    "leadType",
    "leadStatus",
    "remark",
    "callingDate",
    "followUpDate"
  ];

  // Table columns configuration
  const tableColumns = [
    {
      key: "sno",
      render: (lead: Lead, index: number) => index + 1,
    },
    {
      key: "name",
      render: (lead: Lead) => (
        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
      ),
    },
    {
      key: "country",
      render: (lead: Lead) => (
        <span className="text-sm text-gray-500">{lead.countryInterested || 'None'}</span>
      ),
    },
    {
      key: "phone",
      render: (lead: Lead) => (
        <span className="text-sm text-gray-500">{lead.phone || 'None'}</span>
      ),
    },
    {
      key: "city",
      render: (lead: Lead) => {
        const isEditingLocation = editingLocationId === lead._id;
        if (isEditingLocation) {
          return (
            <input
              type="text"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              placeholder="City"
              className="w-full text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          );
        }

        return (
          <button
            type="button"
            onClick={() => {
              setEditingLocationId(lead._id);
              setCityInput(lead.city || '');
              setStateInput(lead.state || '');
            }}
            className="text-left text-sm text-gray-500 hover:text-gray-700 underline-offset-2 hover:underline"
          >
            {lead.city || 'Add city'}
          </button>
        );
      },
    },
    {
      key: "state",
      render: (lead: Lead) => {
        const isEditingLocation = editingLocationId === lead._id;
        if (isEditingLocation) {
          return (
            <div className="flex flex-col gap-1">
              <input
                type="text"
                value={stateInput}
                onChange={(e) => setStateInput(e.target.value)}
                placeholder="State"
                className="w-full text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={isSavingLocation}
                  onClick={async () => {
                    try {
                      setIsSavingLocation(true);
                      const response = await updateLeadStatus(lead._id, {
                        city: cityInput,
                        state: stateInput,
                      });

                      if (response.success) {
                        const persistedLead = response?.data;
                        const persistedCity = String(persistedLead?.city ?? '').trim();
                        const persistedState = String(persistedLead?.state ?? '').trim();
                        const requestedCity = cityInput.trim();
                        const requestedState = stateInput.trim();

                        const isPersisted =
                          persistedCity === requestedCity && persistedState === requestedState;

                        if (isPersisted) {
                          setLeads((prev) =>
                            prev.map((l) =>
                              l._id === lead._id
                                ? { ...l, city: persistedCity, state: persistedState }
                                : l
                            )
                          );
                          toast.success('City/State updated successfully');
                        } else {
                          // Avoid optimistic UI mismatch when backend ignores city/state update.
                          await fetchLeads();
                          toast.error('Update not persisted on server. Please check backend deployment.');
                        }
                      } else {
                        toast.error(response.message || 'Failed to update city/state');
                      }
                    } catch (err: any) {
                      toast.error(err.response?.data?.message || 'Failed to update city/state');
                    } finally {
                      setIsSavingLocation(false);
                      setEditingLocationId(null);
                    }
                  }}
                  className="text-xs px-2 py-1 rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-60"
                >
                  {isSavingLocation ? 'Saving...' : 'Save'}
                </button>
                <button
                  type="button"
                  disabled={isSavingLocation}
                  onClick={() => {
                    setEditingLocationId(null);
                    setCityInput('');
                    setStateInput('');
                  }}
                  className="text-xs px-2 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        }

        return (
          <button
            type="button"
            onClick={() => {
              setEditingLocationId(lead._id);
              setCityInput(lead.city || '');
              setStateInput(lead.state || '');
            }}
            className="text-left text-sm text-gray-500 hover:text-gray-700 underline-offset-2 hover:underline"
          >
            {lead.state || 'Add state'}
          </button>
        );
      },
    },
    {
      key: "course",
      render: (lead: Lead) => (
        <span className="text-sm text-gray-500">{lead.courseName || 'None'}</span>
      ),
    },
    
    {
      key: "callingStatus",
      render: (lead: Lead) => {
        const getCallingStatusColor = (status: string) => {
          switch (status) {
            case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'follow-up': return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'no-answer': return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'not-interested': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
          }
        };

        return (
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${lead.callingStatus === 'pending' ? 'bg-yellow-400' : lead.callingStatus === 'follow-up' ? 'bg-blue-400' : lead.callingStatus === 'no-answer' ? 'bg-orange-400' : 'bg-red-400'}`}></div>
            <select
              value={lead.callingStatus}
              onChange={(e) => handleStatusUpdate(lead._id, 'callingStatus', e.target.value)}
              className={`text-sm border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-medium ${getCallingStatusColor(lead.callingStatus)}`}
            >
              <option value="follow-up" className="bg-white text-blue-600">📞 Follow Up</option>
              <option value="call-back" className="bg-white text-blue-600">📞 Call Back</option>
              <option value="no-answer" className="bg-white text-orange-600">📵 No Answer</option>
              <option value="expensive" className="bg-white text-pink-600">💸 Expensive</option>
              <option value="not-interested" className="bg-white text-red-600">❌ Not Interested</option>
              <option value="switched-off" className="bg-white text-gray-600">🔇 Switched Off</option>
              <option value="wrong-no" className="bg-white text-gray-400">🔢 Wrong no.</option>
              <option value="already-taken" className="bg-white text-purple-600">🎓 Already Taken</option>
              <option value="incoming-not-available" className="bg-white text-yellow-800">🚫 Incoming Not Available</option>
              <option value="in-10th-12th" className="bg-white text-blue-700">📚 In 10th/12th</option>
              <option value="confirmed" className="bg-white text-green-600">✅ Confirmed</option>
              <option value="next-year" className="bg-white text-indigo-600">📅 Next Year</option>
              <option value="after-neet" className="bg-white text-teal-600">📝 After NEET</option>
              <option value="call-cut" className="bg-white text-orange-700">✂️ Call Cut</option>
              <option value="line-busy" className="bg-white text-pink-700">📞 Line is Busy</option>
              <option value="plan-changed" className="bg-white text-cyan-700">🔄 Plan Changed</option>
              <option value="wrongly-clicked" className="bg-white text-gray-700">❗ Wrongly Clicked</option>
            </select>
          </div>
        );
      },
    },
    {
      key: "leadType",
      render: (lead: Lead) => {
        const getLeadTypeColor = (type: string) => {
          switch (type) {
            case 'pending': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
            case 'follow-up': return 'text-blue-600 bg-blue-50 border-blue-200';
            case 'negative': return 'text-red-600 bg-red-50 border-red-200';
            case 'completed': return 'text-green-600 bg-green-50 border-green-200';
            case 'registered': return 'text-purple-600 bg-purple-50 border-purple-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
          }
        };

        return (
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${lead.leadType === 'pending' ? 'bg-yellow-400' : lead.leadType === 'follow-up' ? 'bg-blue-400' : lead.leadType === 'negative' ? 'bg-red-400' : lead.leadType === 'completed' ? 'bg-green-400' : 'bg-purple-400'}`}></div>
            <select
              value={lead.leadType}
              onChange={(e) => handleStatusUpdate(lead._id, 'leadType', e.target.value)}
              className={`text-sm border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent font-medium ${getLeadTypeColor(lead.leadType)}`}
            >
              <option value="pending" className="bg-white text-yellow-600">⏳ Pending</option>
              <option value="follow-up" className="bg-white text-blue-600">📞 Follow Up</option>
              <option value="negative" className="bg-white text-red-600">❌ Negative</option>
              <option value="warm" className="bg-white text-orange-600  ">🔥 Warm Lead</option>
              <option value="cold" className="bg-white text-blue-600">🥶 Cold Lead</option>
              <option value="completed" className="bg-white text-green-600">✅ Positive</option>
              <option value="positive-plus" className="bg-white text-pink-600">✅ Positive Plus</option>
              <option value="registered" className="bg-white text-purple-600">🎓 Registered</option>
            </select>
          </div>
        );
      },
    },
    {
      key: "remark",
      render: (lead: Lead) => {
        const isEditing = editingRemarkId === lead._id;
        if (isEditing) {
          return (
            <div className="flex flex-col space-y-1 max-w-xs">
              <textarea
                value={remarkInput}
                onChange={(e) => setRemarkInput(e.target.value)}
                className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500"
                rows={2}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const response = await updateLeadStatus(lead._id, { remark: remarkInput });
                      if (response.success) {
                        setLeads((prev) =>
                          prev.map((l) =>
                            l._id === lead._id ? { ...l, remark: remarkInput } : l
                          )
                        );
                        toast.success('Remark updated successfully');
                      } else {
                        toast.error(response.message || 'Failed to update remark');
                      }
                    } catch (err: any) {
                      toast.error(
                        err.response?.data?.message || 'Failed to update remark'
                      );
                    } finally {
                      setEditingRemarkId(null);
                      setRemarkInput('');
                    }
                  }}
                  className="text-xs px-2 py-1 rounded-md bg-teal-600 text-white hover:bg-teal-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingRemarkId(null);
                    setRemarkInput('');
                  }}
                  className="text-xs px-2 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          );
        }
        return (
          <button
            type="button"
            onClick={() => {
              setEditingRemarkId(lead._id);
              setRemarkInput(lead.remark || '');
            }}
            className="text-left text-sm text-gray-500 max-w-xs truncate hover:text-gray-700 underline-offset-2 hover:underline"
            title={lead.remark}
          >
            {lead.remark || 'Add remark'}
          </button>
        );
      },
    },
    {
      key: "callingDate",
      render: (lead: Lead) => {
        const valueForInput = lead.callingDate
          ? new Date(lead.callingDate).toISOString().split('T')[0]
          : '';

        const label = lead.callingDate
          ? new Date(lead.callingDate).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })
          : 'Not set';

        const isToday = isSameDate(lead.callingDate || undefined);

        const handleChange = async (dateStr: string) => {
          const payloadValue = dateStr || null;
          try {
            const response = await updateLeadStatus(lead._id, {
              callingDate: payloadValue,
            });
            if (response.success) {
              setLeads((prev) =>
                prev.map((l) =>
                  l._id === lead._id ? { ...l, callingDate: payloadValue } : l
                )
              );
              toast.success(
                payloadValue
                  ? 'Calling date updated successfully'
                  : 'Calling date cleared'
              );
            } else {
              toast.error(response.message || 'Failed to update calling date');
            }
          } catch (err: any) {
            toast.error(
              err.response?.data?.message || 'Failed to update calling date'
            );
          }
        };

        return (
          <div className="flex flex-col gap-1">
            <span
              className={`text-sm ${
                isToday ? 'font-semibold text-blue-700' : 'text-gray-500'
              }`}
            >
              {label}
              {isToday && ' (Today)'}
            </span>
            <input
              type="date"
              value={valueForInput}
              onChange={(e) => handleChange(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        );
      },
    },
    {
      key: "followUpDate",
      render: (lead: Lead) => {
        const isToday = isSameDate(lead.followUpDate || undefined);

        return (
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${
                isToday ? 'font-semibold text-orange-700' : 'text-gray-500'
              }`}
            >
              {lead.followUpDate
                ? new Date(lead.followUpDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : 'Not set'}
              {isToday && ' (Today)'}
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedLeadForFollowUp(lead);
                setFollowUpDateInput(
                  lead.followUpDate
                    ? new Date(lead.followUpDate).toISOString().split('T')[0]
                    : ''
                );
                setShowFollowUpModal(true);
              }}
              className="text-xs text-teal-700 hover:text-teal-900 underline"
            >
              {lead.followUpDate ? 'Update' : 'Set'}
            </button>
          </div>
        );
      },
    },
    {
      key: "source",
      render: (lead:any) => (
        <span className="text-sm text-gray-500">{lead.source || 'Website'}</span>
      ),
    },
  ];

  // Handle tab change
  const handleTabChange = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  // Refresh data
  const handleRefresh = () => {
    fetchLeads();
  };

  // Save or clear follow-up date for selected lead
  const handleSaveFollowUpDate = async (overrideValue?: string | null) => {
    if (!selectedLeadForFollowUp) return;
    try {
      const value =
        overrideValue !== undefined
          ? overrideValue
          : followUpDateInput
          ? followUpDateInput
          : null;

      const response = await updateLeadStatus(selectedLeadForFollowUp._id, {
        followUpDate: value,
      } as any);

      if (response.success) {
        setLeads((prev) =>
          prev.map((lead) =>
            lead._id === selectedLeadForFollowUp._id
              ? { ...lead, followUpDate: value }
              : lead
          )
        );
        toast.success(
          value ? 'Follow-up date updated successfully' : 'Follow-up date cleared'
        );
        setShowFollowUpModal(false);
        setSelectedLeadForFollowUp(null);
        setFollowUpDateInput('');
      } else {
        toast.error(response.message || 'Failed to update follow-up date');
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to update follow-up date');
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
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Calling Records</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage and track leads assigned to you
              </p>
            </div>
            <div className="flex items-center space-x-3">
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
        {todayFollowUps.length > 0 && (
          <div className="mb-4 rounded-lg border border-orange-200 bg-orange-50 px-4 py-3">
            <p className="text-sm font-semibold text-orange-800">
              You have {todayFollowUps.length} lead
              {todayFollowUps.length > 1 ? 's' : ''} scheduled for follow-up today.
            </p>
            <p className="mt-1 text-xs text-orange-700">
              {todayFollowUps
                .slice(0, 5)
                .map((l) => l.name)
                .join(', ')}
              {todayFollowUps.length > 5 && ' ...'}
            </p>
          </div>
        )}
        {pastFollowUps.length > 0 && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-sm font-semibold text-red-800">
              ⚠️ You have {pastFollowUps.length} lead
              {pastFollowUps.length > 1 ? 's' : ''} with past follow-up dates that need attention.
            </p>
            <p className="mt-1 text-xs text-red-700">
              {pastFollowUps
                .slice(0, 5)
                .map((l) => l.name)
                .join(', ')}
              {pastFollowUps.length > 5 && ' ...'}
            </p>
          </div>
        )}
        {/* Status Legend */}
        {/* <div className="bg-white rounded-lg shadow mb-6 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Calling Status</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-600">Follow Up</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-sm text-gray-600">No Answer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm text-gray-600">Not Interested</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Lead Type</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-600">Follow Up</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm text-gray-600">Negative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span className="text-sm text-gray-600">Registered</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Category</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <span className="text-sm text-gray-600">Hot</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-sm text-gray-600">Warm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-sm text-gray-600">Cold</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                  <span className="text-sm text-gray-600">Negative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-600">Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        
        <div className="bg-white rounded-lg shadow">
          <AdminTable
            ITEMS_PER_PAGE={itemsPerPage}
            tableHeaders={tableHeaders}
            tableColumns={tableColumns}
            leads={filteredLeads}
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
      {showFollowUpModal && selectedLeadForFollowUp && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full shadow-xl">
            <div className="px-4 py-3 border-b flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Set Follow-up Date
              </h3>
              <button
                onClick={() => {
                  setShowFollowUpModal(false);
                  setSelectedLeadForFollowUp(null);
                  setFollowUpDateInput('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {selectedLeadForFollowUp.name}
                </p>
                <p className="text-xs text-gray-500">
                  {selectedLeadForFollowUp.phone || selectedLeadForFollowUp.countryInterested}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Follow-up Date
                </label>
                <input
                  type="date"
                  value={followUpDateInput}
                  onChange={(e) => setFollowUpDateInput(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>
            <div className="px-4 py-3 border-t flex items-center justify-end gap-2">
              {selectedLeadForFollowUp.followUpDate && (
                <button
                  type="button"
                  onClick={() => {
                    // Clear directly to avoid stale state issues
                    handleSaveFollowUpDate(null);
                  }}
                  className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Clear Date
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setShowFollowUpModal(false);
                  setSelectedLeadForFollowUp(null);
                  setFollowUpDateInput('');
                }}
                className="px-3 py-1.5 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleSaveFollowUpDate()}
                disabled={!followUpDateInput}
                className="px-3 py-1.5 text-xs rounded-md bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-60"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CallingRecords;
