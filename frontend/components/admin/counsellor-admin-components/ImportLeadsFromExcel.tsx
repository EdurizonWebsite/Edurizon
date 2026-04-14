import React, { useState, useRef } from 'react';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import * as XLSX from 'xlsx';

interface ImportLeadsFromExcelDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  assignedTo?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

interface ExcelLead {
  name: string;
  email: string;
  phone: string;
  countryInterested: string;
  courseName: string;
  remark: string;
  source: string;
  city: string;
  state: string;
}

const ImportLeadsFromExcel = ({ isOpen, onClose, onSuccess, assignedTo }: ImportLeadsFromExcelDialogProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [leads, setLeads] = useState<ExcelLead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [importProgress, setImportProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Reset form when dialog opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setFile(null);
      setLeads([]);
      setError('');
      setShowNotification(false);
      setImportProgress(0);
    }
  }, [isOpen]);

  // Auto-hide notification after 3 seconds
  React.useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        if (notificationType === 'success') {
          onClose();
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification, notificationType, onClose]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          selectedFile.type === 'application/vnd.ms-excel') {
        setFile(selectedFile);
        parseExcelFile(selectedFile);
      } else {
        setError('Please select a valid Excel file (.xlsx or .xls)');
      }
    }
  };

  const parseExcelFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length < 2) {
          setError('Excel file must have at least a header row and one data row');
          return;
        }

        const headers = jsonData[0] as string[];
        const rows = jsonData.slice(1) as any[][];

        // Map Excel columns to our lead fields
        const mappedLeads: ExcelLead[] = rows.map((row, index) => {
          const lead: ExcelLead = {
            name: '',
            email: '',
            phone: '',
            countryInterested: '',
            courseName: '',
            remark: '',
            source: 'Website',
            city: '',
            state: '',
          };

                     headers.forEach((header, colIndex) => {
             const value = row[colIndex] || '';
             const headerLower = header.toLowerCase().trim();
             
             // More specific matching to avoid conflicts
             if (headerLower === 'name' || headerLower === 'full name' || headerLower === 'student name') {
               lead.name = String(value);
             } else if (headerLower === 'email' || headerLower === 'e-mail') {
               lead.email = String(value);
             } else if (headerLower === 'phone' || headerLower === 'contact' || headerLower === 'mobile' || headerLower === 'contact no.') {
               lead.phone = String(value);
             } else if (headerLower === 'country' || headerLower === 'destination' || headerLower === 'country interested') {
               lead.countryInterested = String(value);
             } else if (headerLower === 'course' || headerLower === 'program' || headerLower === 'course name' || headerLower === 'intended course') {
               lead.courseName = String(value);
             } else if (headerLower === 'remark' || headerLower === 'note' || headerLower === 'comment') {
               lead.remark = String(value);
             } else if (headerLower === 'source' || headerLower === 'lead source') {
               const sourceValue = String(value).trim();
               if (sourceValue) {
                 lead.source = sourceValue;
               }
             } else if (headerLower === 'city') {
               lead.city = String(value);
             } else if (headerLower === 'state') {
               lead.state = String(value);
             }
             
           
           });

          return lead;
        });

        // Filter out rows where name is empty
        const validLeads = mappedLeads.filter(lead => lead.name.trim() !== '');
        
        if (validLeads.length === 0) {
          setError('No valid leads found in the Excel file. Please ensure the file has a "Name" column with data.');
          return;
        }

        setLeads(validLeads);
        setError('');
        
     
      } catch (err) {
        setError('Error parsing Excel file. Please ensure it\'s a valid Excel file.');
        console.error('Excel parsing error:', err);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleImport = async () => {
    if (leads.length === 0) {
      setError('No leads to import');
      return;
    }

    setLoading(true);
    setError('');
    setImportProgress(0);

    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Not authenticated. Please log in again.');
        return;
      }

      let successCount = 0;
      let errorCount = 0;

      // Import leads one by one to show progress
      for (let i = 0; i < leads.length; i++) {
        try {
          const lead = leads[i];
          
          // Skip if name is empty
          if (!lead.name.trim()) continue;

          const response = await axios.post(
            `${baseUrl}/api/leads`,
            {
              name: lead.name.trim(),
              email: lead.email.trim() || undefined,
              phone: lead.phone.trim() || undefined,
              countryInterested: lead.countryInterested.trim() || 'None',
              courseName: lead.courseName.trim() || 'None',
              remark: lead.remark.trim() || undefined,
              source: (lead.source && lead.source.trim()) ? lead.source.trim() : 'Website',
              leadType: 'pending',
              callingStatus: 'pending',
              leadStatus: 'pending',
              assignedCounsellor: assignedTo?._id,
              assignedCounsellorName: assignedTo ? `${assignedTo.firstName} ${assignedTo.lastName}` : undefined,
              city: lead.city.trim() || undefined,
              state: lead.state.trim() || undefined
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.success) {
            successCount++;
          } else {
            errorCount++;
          }
        } catch (err) {
          errorCount++;
          console.error('Error importing lead:', leads[i], err);
        }

        // Update progress
        setImportProgress(((i + 1) / leads.length) * 100);
      }

      if (successCount > 0) {
        setNotificationType('success');
        setNotificationMessage(`Successfully imported ${successCount} leads${errorCount > 0 ? `, ${errorCount} failed` : ''}!`);
        setShowNotification(true);
        onSuccess();
      } else {
        setError(`Failed to import any leads. ${errorCount} errors occurred.`);
      }
    } catch (err: any) {
      setNotificationType('error');
      setNotificationMessage(err.response?.data?.message || 'Failed to import leads');
      setShowNotification(true);
      setError(err.response?.data?.message || 'Failed to import leads');
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    const template = [
      ['Name', 'Email', 'Phone', 'Country Interested', 'Course Name', 'Remark', 'Source', 'City', 'State'],
      ['John Doe', 'john@example.com', '+1234567890', 'Russia', 'MBBS', 'Interested in medical studies', 'Website', 'Mumbai', 'Maharashtra'],
      ['Jane Smith', 'jane@example.com', '+0987654321', 'Germany', 'B.Tech', 'Looking for engineering programs', 'Referral', 'Berlin', 'Berlin']
    ];

    const ws = XLSX.utils.aoa_to_sheet(template);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads Template');
    
    XLSX.writeFile(wb, 'leads_import_template.xlsx');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 flex items-center justify-center z-[100]" style={{ margin: 0 }}>
      {/* Notification */}
      {showNotification && (
        <div
          className={`absolute top-0 left-0 right-0 p-4 ${
            notificationType === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white rounded-t-lg text-center transition-all duration-300 transform ${
            showNotification ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {notificationMessage}
        </div>
      )}

      <div className="relative bg-white rounded-lg w-[90%] max-w-4xl p-6 m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Import Leads from Excel</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* File Upload Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upload Excel File</h3>
            
            <div className="flex items-center space-x-4 mb-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Select Excel File
              </button>
              
              <button
                onClick={downloadTemplate}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Template
              </button>
            </div>

            {file && (
              <div className="bg-white p-3 rounded border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFile(null);
                      setLeads([]);
                      setError('');
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Data Preview Section */}
          {leads.length > 0 && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Data Preview ({leads.length} leads found)
              </h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Phone</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Country</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Course</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Remark</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Source</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">City</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {leads.slice(0, 5).map((lead, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-sm text-gray-900 border-b">{lead.name}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.email || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.phone || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.countryInterested || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.courseName || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.remark || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.source || 'Website'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.city || '-'}</td>
                        <td className="px-4 py-2 text-sm text-gray-500 border-b">{lead.state || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {leads.length > 5 && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Showing first 5 rows. Total: {leads.length} leads
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Import Progress */}
          {loading && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-900 mb-2">Importing Leads...</h3>
              <div className="w-full bg-blue-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${importProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-blue-700 mt-2">{Math.round(importProgress)}% Complete</p>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Cancel
            </button>
            <button
              onClick={handleImport}
              disabled={loading || leads.length === 0}
              className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
                (loading || leads.length === 0) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Importing...' : `Import ${leads.length} Leads`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportLeadsFromExcel;
