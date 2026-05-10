import { useState,useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

interface AdminTableProps {
  ITEMS_PER_PAGE: number;

    // Table And Information Related to it
  tableHeaders: string[];
  tableColumns: Array<{ key: string; render: (item: any,index:number) => React.ReactNode }>;
  leads:any[];
  loading: boolean;
  error: string;

    // Export Purpose
  csvHeader: string[];
  csvDataFields: string[];

    // Tabs
tabs: Array<{ key: string; label: string; count: number; stats?: { today: number; yesterday: number; lastWeek: number } }>;
activeTab: string;
setActiveTab: (key: string) => void;
extraButtons?:React.ReactNode;
bgColor?:string;
setSelectedLead?: (lead: any) => void;
}

const AdminTable = ({ ITEMS_PER_PAGE, tableHeaders, tableColumns,leads, loading,error,csvHeader,csvDataFields,tabs, activeTab, setActiveTab,extraButtons,bgColor,setSelectedLead }: AdminTableProps) => {


  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  
  // Pagination logic
  const totalItems = leads.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = leads.slice(startIndex, endIndex);

  // Reset page when changing tabs
  useEffect(() => {
    setCurrentPage(1);
    setSelectedLeads([]);
  }, [activeTab]);

  useEffect(()=>{
    if(setSelectedLead){
      setSelectedLead(selectedLeads);
    }
  },[selectedLeads])


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedLeads(currentItems.map(lead => lead._id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (leadId: string) => {
    setSelectedLeads(prev => {
      if (prev.includes(leadId)) {
        return prev.filter(id => id !== leadId);
      } else {
        return [...prev, leadId];
      }
    });
  };

  const handleExportToCSV = (leads: any[], filename: string) => {
    // Define the headers for CSV
    const headers = csvHeader;
    // Format the data for CSV
    const csvData = leads.map((lead) =>
      csvDataFields.map((field) => lead[field]) // dynamically pick values
    );

    // Combine headers and data
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleExportAll = () => {
    const filename = `${activeTab}-leads-${new Date().toISOString().split('T')[0]}.csv`;
    handleExportToCSV(leads, filename);
    toast.success('Export started');
  };

  const handleExportSelected = () => {
    if (selectedLeads.length === 0) {
      toast.error('Please select leads to export');
      return;
    }
    const filename = `selected-${activeTab}-leads-${new Date().toISOString().split('T')[0]}.csv`;

    const selectedLeadsData = leads.filter(lead => selectedLeads.includes(lead._id));
    handleExportToCSV(selectedLeadsData, filename);
    toast.success(`Exporting ${selectedLeads.length} leads`);
  };

  return (
    <div>
     <div className="border-b border-gray-200 ">
                <div className={`flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center px-3 sm:px-6 py-2 ${bgColor}`}>
                  <nav className="-mb-px flex gap-4 sm:gap-8 overflow-x-auto pb-1" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <div key={tab.key} className="flex flex-col items-start">
                            <button
                                onClick={() => setActiveTab(tab.key)}
                                className={`${
                                    activeTab === tab.key
                                    ? "border-teal-500 text-teal-600"
                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
                            >
                                {tab.label} ({tab.count})
                            </button>
                            {tab.stats && activeTab === tab.key && (
                                <div className="flex gap-3 text-xs text-gray-600 mt-1 px-1 pb-2">
                                    <span>Today: <strong className="text-teal-600">{tab.stats.today}</strong></span>
                                    <span>Yesterday: <strong className="text-teal-600">{tab.stats.yesterday}</strong></span>
                                    <span>Last Week: <strong className="text-teal-600">{tab.stats.lastWeek}</strong></span>
                                </div>
                            )}
                        </div>
                    ))}
                  </nav>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
                    <button
                      onClick={handleExportSelected}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        selectedLeads.length > 0
                          ? 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={selectedLeads.length === 0}
                    >
                      Export Selected ({selectedLeads.length})
                    </button>
                    <button
                      onClick={handleExportAll}
                      className="px-3 py-2 text-sm font-medium rounded-md bg-teal-600 text-white hover:bg-teal-700"
                    >
                      Export All
                    </button>
                    {extraButtons}

                  </div>
                </div>
              </div>

     {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
                </div>
              ) : error ? (
                <div className="p-4 text-red-600">{error}</div>
              ) : (
                <div className="overflow-x-auto ">
                  <table className="min-w-full divide-y  divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 sm:px-6 py-3 text-left">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                            onChange={handleSelectAll}
                            checked={selectedLeads.length === currentItems.length && currentItems.length > 0}
                          />
                        </th>
                        {tableHeaders.map((header) => (
                        <th
                            key={header}
                            scope="col"
                            className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            {header}
                        </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {currentItems.map((lead,index) => (
                        <tr key={lead._id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                              checked={selectedLeads.includes(lead._id)}
                              onChange={() => handleSelectLead(lead._id)}
                            />
                          </td>
                          
                          {tableColumns.map((col) => (
                                <td key={col.key} className="px-3 sm:px-6 py-4 whitespace-nowrap">
                                {col.render(lead, startIndex + index)}
                                </td>
                            ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex flex-wrap items-center justify-center sm:justify-end p-3 sm:p-4 gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${
                          currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {getPageNumbers().map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === pageNumber
                              ? 'bg-teal-600 text-white'
                              : 'hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          {pageNumber}
                        </button>
                      ))}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${
                          currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <span className="ml-4 text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                      </span>
                    </div>
                  )}
                </div>
              )}
    </div>
  );
};

export default AdminTable;
