import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import { baseUrl } from '../../lib/baseUrl';
import { 
  CloudUpload as CloudUploadIcon, 
  CheckCircle as CheckCircleIcon, 
  AccessTime as ClockIcon, 
  Cancel as XCircleIcon,
  Visibility as EyeIcon,
  Delete as TrashIcon,
  Description as DocumentIcon
} from '@mui/icons-material';

interface FeeInfo {
    status: 'due' | 'completed';
    url: string;
    description:string;
  }

interface DocumentsProps {
  activeTab: string;
  userData: any;
}

const Fees = ({ activeTab, userData }: DocumentsProps) => {
  const [loading, setLoading] = useState(true);
  const [billsLoading, setBillsLoading] = useState(false);
  const [bills, setBills] = useState<any[]>([]);
  const [imgModal, setImgModal] = useState({
    open: false,
    imgUrl: '',
    studentName: '',
  });
  const [agreeDialogOpen, setAgreeDialogOpen] = useState(false);
  const [updatingAgreement, setUpdatingAgreement] = useState(false); 

  const openImgModal = (imgUrl:string, studentName:string) => {
    setImgModal({
      open: true,
      imgUrl,
      studentName,
    });
  };
  
  const closeImgModal = () => {
    setImgModal({
      open: false,
      imgUrl: '',
      studentName: '',
    });
  };


  useEffect(() => {
    if (userData) {
      setLoading(false);
    }
  }, [userData]);

  // Fetch bills from FinanceBill model
  useEffect(() => {
    const fetchBills = async () => {
      if (!userData?._id) return;
      
      setBillsLoading(true);
      try {
        const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}').token : null;
        
        if (!token) {
          console.error('Authentication required');
          setBillsLoading(false);
          return;
        }

        const response = await axios.get(
          `${baseUrl}/api/registered-students/bills`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        if (response.data.success) {
          setBills(response.data.data || []);
        }
      } catch (error: any) {
        console.error('Failed to fetch bills:', error);
        toast.error(error?.response?.data?.message || 'Failed to load bills');
      } finally {
        setBillsLoading(false);
      }
    };

    fetchBills();
  }, [userData?._id]);
  

  const handleDownloadDocument = async (url: string, docName:string) => {
    if (!url){
      console.log('url is not found');
      return};
  
    try {
      const response = await fetch(url);
      const blob = await response.blob();
  
      const blobUrl = window.URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = blobUrl;
  
      // filename (extract from URL or default)
      link.download = docName ||"document.jpg";
  
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      // Cleanup
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  const handleAgreementCheckbox = () => {
    if (!userData.financeInfo.feeStructureAgreed) {
      setAgreeDialogOpen(true);
    }
  };

  const handleConfirmAgreement = async () => {
    try {
      setUpdatingAgreement(true);
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}').token : null;
      
      if (!token) {
        toast.error('Authentication required');
        return;
      }

      const response = await axios.put(
        `${baseUrl}/api/registered-students/fee-structure/agree`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        toast.success('You have successfully agreed to the fee structure terms');
        setAgreeDialogOpen(false);
        // Refresh user data
        window.location.reload(); // Or use a refetch function if available
      }
    } catch (error: any) {
      console.error('Failed to update agreement:', error);
      toast.error(error?.response?.data?.message || 'Failed to update agreement');
    } finally {
      setUpdatingAgreement(false);
    }
  };
  
  
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Toaster />

      {/* Bills Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bills</h2>
          <p className="text-sm text-gray-600">Payment receipts for completed transactions</p>
        </div>

        {billsLoading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : bills.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
            <DocumentIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No bills available yet.</p>
            <p className="text-sm text-gray-500 mt-2">Your payment receipts will appear here once generated.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount Due
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Amount Paid
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Issue Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill: any) => (
                  <tr key={bill._id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <DocumentIcon className="w-6 h-6 text-blue-600" />
                      <span className="font-medium text-gray-900">{bill.description || 'Payment Receipt'}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      ₹{(bill.amountDue || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-sm text-teal-700 font-semibold">
                      ₹{(bill.amountPaid || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        bill.status === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : bill.status === 'Partial Payment'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {bill.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {bill.issueDate ? new Date(bill.issueDate).toLocaleDateString('en-IN') : '—'}
                    </td>
                    <td className="px-6 py-4">
                      {bill.url ? (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => openImgModal(bill.url, userData.name)}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium flex items-center"
                          >
                            <EyeIcon className="w-4 h-4 mr-1" />
                            View
                          </button>
                          <button
                            onClick={() => handleDownloadDocument(bill.url, `${bill.description || 'bill'}.pdf`)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                          >
                            Download
                          </button>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">No receipt available</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    {imgModal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-6xl  max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                   {imgModal.studentName}
                </p>
                <p className="text-sm text-gray-500">Document</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={imgModal.imgUrl || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-600 hover:text-teal-800"
                >
                  Open in New Tab
                </a>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                  onClick={closeImgModal}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="px-6 py-4 overflow-hidden h-[calc(90vh-80px)]">
              {imgModal.imgUrl && imgModal.imgUrl.toLowerCase().endsWith('.pdf') ? (
                <iframe
                  src={imgModal.imgUrl}
                  className="w-full h-full border-0"
                  title="Document Viewer"
                />
              ) : (
                <img
                  src={imgModal.imgUrl || ''}
                  alt="Document"
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Agreement Confirmation Dialog */}
      {agreeDialogOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirm Agreement
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              Are you sure you want to agree to the fees, information, and terms given in the fee structure? 
              This action will notify the finance admin.
            </p>
            <div className="flex space-x-3 justify-end">
              <button
                type="button"
                onClick={() => setAgreeDialogOpen(false)}
                disabled={updatingAgreement}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmAgreement}
                disabled={updatingAgreement}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updatingAgreement ? 'Confirming...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fees;
