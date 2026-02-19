import React,{useState,useEffect} from "react";
import { GetServerSideProps } from "next";
import DocumentLayout from "@/components/admin/DocumentLayout";
import AdminTable from "@/components/admin/AdminTable";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { baseUrl } from "@/lib/baseUrl";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';

type DocumentPageProps = {
  id: string;
};
const navItems = [
  {
    href: "/admin/document",
    icon: <GridViewIcon />,
    label: "Overview",
  }
]

const  tableHeaders = [
  "S.No",
  "Document Name",
  "View Document",
  "Verification Status",
  "Actions",
];

const csvHeader=[
  'Document Name',
  'Document Link',
  'Verification Status',
];

const csvDataFields = [
  'name',
  'interestedCountry',
  'phone',
];

const DocumentPage: React.FC<DocumentPageProps> = ({ id }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState<any>(null);
    const [documentsList,setDocumentsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
     const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
    const [openUploadDropdownId, setOpenUploadDropdownId] = useState<string | null>(null);  
    const [selectedDocument, setSelectedDocument] = useState<any>(null);
    const [showOverlay, setShowOverlay] = useState(false);
  const [showRemarkPopup, setShowRemarkPopup] = useState(false);
  const [selectedDocumentForRemark, setSelectedDocumentForRemark] = useState<any>(null);
  const [remarkText, setRemarkText] = useState('');
  const [remarkMethod, setRemarkMethod] = useState<'email' | 'whatsapp'>('email');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadDocumentName, setUploadDocumentName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [selectedDocumentForUpload, setSelectedDocumentForUpload] = useState<any>(null);
  const [showAddDocumentModal, setShowAddDocumentModal] = useState(false);
  const [newDocumentName, setNewDocumentName] = useState('');
  const [addingDocument, setAddingDocument] = useState(false);

    const tableColumns = [
  {
    key: "sno",
    render: (lead:any, index:number) => index+1,
  },
  
  {
    key: "documentName",
    render: (lead:any) => (
      <span className="text-sm text-gray-500">{lead.name}</span>
    ),
  },
  {
      key: "view",
      render: (lead:any) => (
        <div className="relative">
            <button
              onClick={() => handleViewDocument(lead)}
              className="bg-teal-100  text-teal-800 px-[32px] py-[8px] rounded-full text-sm font-medium  items-center"
          >
            View
          </button>
        </div>
      ),
  },
  {
    key: "verificationStatus",
    render: (lead:any) => {
      const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
          case 'verified':
            return 'bg-green-100 text-green-800';
          case 'pending':
            return 'bg-yellow-100 text-yellow-800';
          case 'rejected':
            return 'bg-red-100 text-red-800';
          default:
            return 'bg-gray-100 text-gray-800';
        }
      };

      return (
        <div className="relative">
          <button
            onClick={() =>
              setOpenDropdownId(openDropdownId === lead.name ? null : lead.name)
            }
            className={`${getStatusColor(lead.status)} px-3 py-1 rounded-full text-sm font-medium items-center`}
          >
            {lead.status}
            <ExpandMoreIcon className="w-4 h-4 ml-1" />
          </button>
        {openDropdownId === lead.name && (
          <div className="absolute z-10 mt-2 w-min rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div>
              <button
                onClick={()=>{updateStatusOfUpload(id,"pending",lead.name);}
                }
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Pending
              </button>
              </div>
                <div>
            <button
                onClick={()=>{updateStatusOfUpload(id,"verified",lead.name);}
                }
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Verified
              </button>
              </div>
              <div>
            <button
                onClick={()=>{updateStatusOfUpload(id,"rejected",lead.name);}
                }
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Rejected
              </button>
              </div>
          </div>
        )}
      </div>
      );
    },
  },
  {
      key: "actionButtons",
      render: (lead:any) => (
        <div className="flex gap-[8px]">
            <button 
              onClick={() => handleDeleteDocument(lead.name)}
              className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors" 
              title="Delete"
            >
              <DeleteIcon className="w-4 h-4"/>
            </button>
            <button 
              onClick={() => handleSendRemark(lead)}
              className="p-2 text-orange-500 hover:bg-orange-50 rounded-full transition-colors" 
              title="Send Remark"
            >
              <AnnouncementIcon className="w-4 h-4"/>
            </button>
            <div className="relative">
              <button 
                onClick={() => setOpenUploadDropdownId(openUploadDropdownId === lead.name ? null : lead.name)}
                className="p-2 text-purple-500 hover:bg-purple-50 rounded-full transition-colors" 
                title="More Options"
              >
                <MoreVertIcon className="w-4 h-4"/>
              </button>
              {openUploadDropdownId === lead.name && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setSelectedDocumentForUpload(lead);
                        setUploadDocumentName(lead.name);
                        setShowUploadModal(true);
                        setOpenUploadDropdownId(null);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">📁</span>
                      Upload Document
                    </button>
                  </div>
                </div>
              )}
            </div>
        </div>
      ),
  },
 
  ];

    useEffect(() => {
      fetchUser();
    }, []);
    useEffect(()=>{
      filterDocumentList();
    },[userData])

    const fetchUser=async()=>{
      try {
        const assignedRes = await axios.get(`${baseUrl}/api/registered-students/get-single/${id}`);
        if (assignedRes.data) {
          setUserData(assignedRes.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }finally {
        setLoading(false);
      }
    }

    
    const filterDocumentList =  ()=>{
      if(userData){
        const filteredDocuments = userData.documents.filter((doc:any) =>
          doc.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDocumentsList(filteredDocuments);
      }
    }

      // Update Status of Upload
  const updateStatusOfUpload=async(id:string,status:string,documentName:string)=>{
    try {
      const response = await axios.put(
        `${baseUrl}/api/registered-students/updateDocumentConditionStatus/${id}`,
        { id, status,documentName },
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
        setOpenDropdownId(null);
        fetchUser();
      }
    } catch (err: any) {
      console.log("err",err);
    }
  }

  const [activeTab, setActiveTab] = useState('allStudents');
  
     const tabs = [
      { key: "allStudents", label: `Documents By ${userData?userData.name:'Student'}`, count: documentsList.length },
      ];

    const handleViewDocument = (document: any) => {
      setSelectedDocument(document);
      setShowOverlay(true);
    };

    const handleCloseOverlay = () => {
      setShowOverlay(false);
      setSelectedDocument(null);
    };

    const handleDownloadDocument = () => {
      if (selectedDocument?.link) {
        const link = document.createElement('a');
        link.href = selectedDocument.link;
        link.download = selectedDocument.name || 'document';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };


    const handleDeleteDocument = async (documentName: string) => {
      if (window.confirm(`Are you sure you want to delete "${documentName}"?`)) {
        try {
          const response = await axios.delete(`${baseUrl}/api/registered-students/deleteOneDocument/${id}`, {
            data: { documentName }
          });

          if (response.data) {
            toast.success('Document deleted successfully!', {
              duration: 3000,
              position: 'top-right',
              style: {
                background: '#10B981',
                color: '#fff',
                padding: '16px',
              },
            });
            fetchUser(); // Refresh the document list
          }
        } catch (error: any) {
          console.error('Error deleting document:', error);
          toast.error(error.response?.data?.error || 'Failed to delete document');
        }
      }
    };

    const handleSendRemark = (document: any) => {
      setSelectedDocumentForRemark(document);
      setRemarkText('');
      setShowRemarkPopup(true);
    };

    const handleSubmitRemark = async () => {
      if (!remarkText.trim()) {
        toast.error('Please enter a remark');
        return;
      }

      if (remarkMethod === 'whatsapp') {
        // Open WhatsApp with pre-generated message
        const phoneNumber = userData?.phoneNumber || userData?.phone;
        if (!phoneNumber) {
          toast.error('Student phone number not found');
          return;
        }
        
        const whatsappMessage = `Hello ${userData?.name},\n\nA remark has been added to your document by our administrative team.\n\nDocument: ${selectedDocumentForRemark.name}\nRemark: "${remarkText.trim()}"\n\nPlease take necessary action based on this feedback. If you have any questions, feel free to contact our support team.\n\nBest regards,\nEdurizon Team`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        toast.success('WhatsApp opened with pre-generated message!', {
          duration: 3000,
          position: 'top-right',
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
          },
        });
        
        setRemarkText('');
        setShowRemarkPopup(false);
        setSelectedDocumentForRemark(null);
        setRemarkMethod('email');
        return;
      }

      // Handle email method
      try {
        const response = await axios.post(`${baseUrl}/api/registered-students/sendRemark/${id}`, {
          documentName: selectedDocumentForRemark.name,
          remark: remarkText.trim(),
          studentEmail: userData?.email,
          method: 'email'
        });

        if (response.data) {
          toast.success('Remark sent successfully via Email!', {
            duration: 3000,
            position: 'top-right',
            style: {
              background: '#10B981',
              color: '#fff',
              padding: '16px',
            },
          });
          setRemarkText('');
          setShowRemarkPopup(false);
          setSelectedDocumentForRemark(null);
          setRemarkMethod('email');
        }
      } catch (error: any) {
        console.error('Error sending remark:', error);
        toast.error(error.response?.data?.error || 'Failed to send remark');
      }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setUploadFile(file);
        // Don't change the document name - keep it as selected
      }
    };

    const handleUploadDocument = async () => {
      if (!uploadFile || !uploadDocumentName.trim()) {
        toast.error('Please fill in document name and select a file');
        return;
      }

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append('document', uploadFile);
        formData.append('documentName', uploadDocumentName.trim());

        const response = await axios.post(`${baseUrl}/api/registered-students/uploadDocument/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.data) {
          toast.success('Document uploaded successfully!', {
            duration: 3000,
            position: 'top-right',
            style: {
              background: '#10B981',
              color: '#fff',
              padding: '16px',
            },
          });
          setShowUploadModal(false);
          setUploadFile(null);
          setUploadDocumentName('');
          setSelectedDocumentForUpload(null);
          fetchUser(); // Refresh the document list
        }
      } catch (error: any) {
        console.error('Error uploading document:', error);
        toast.error(error.response?.data?.error || 'Failed to upload document');
      } finally {
        setUploading(false);
      }
    };

    const handleAddDocument = async () => {
      const trimmedName = newDocumentName?.trim() || '';
      if (trimmedName === '') {
        toast.error('Please enter a document name');
        return;
      }

      setAddingDocument(true);
      try {
        const response = await axios.post(`${baseUrl}/api/registered-students/addOneDocument/${id}`, {
          name: trimmedName
        });

        if (response.data) {
          toast.success('Document added successfully!', {
            duration: 3000,
            position: 'top-right',
            style: {
              background: '#10B981',
              color: '#fff',
              padding: '16px',
            },
          });
          setShowAddDocumentModal(false);
          setNewDocumentName('');
          fetchUser(); // Refresh the document list
        }
      } catch (error: any) {
        console.error('Error adding document:', error);
        toast.error(error.response?.data?.error || 'Failed to add document');
      } finally {
        setAddingDocument(false);
      }
    };

  return (
    <DocumentLayout navItems={navItems} >
      <Toaster/>
      <div>
        <div className="py-8">
            <div className="px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Document Management</h1>
          </div>
        </div>
        <AdminTable 
          extraButtons={
            <button
              onClick={() => setShowAddDocumentModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Add Document
            </button>
          } 
          ITEMS_PER_PAGE={10} 
          tableHeaders={tableHeaders} 
          tableColumns={tableColumns} 
          leads={documentsList} 
          loading={loading} 
          error={error} 
          csvHeader={csvHeader} 
          csvDataFields={csvDataFields} 
          tabs={tabs} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
      </div>

      {/* Document Viewer Overlay */}
      {showOverlay && selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedDocument.name}
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleDownloadDocument}
                  className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                >
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Download
                </button>
                <button
                  onClick={handleCloseOverlay}
                  className="flex items-center px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >
                  <CloseIcon className="w-4 h-4 mr-2" />
                  Close
                </button>
              </div>
            </div>

            {/* Document Content */}
            <div className="p-6 overflow-auto max-h-[calc(90vh-120px)]">
              {selectedDocument.link ? (
                <div className="w-full h-full">
                  {/* Check if it's an image */}
                  {selectedDocument.link.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <img
                      src={selectedDocument.link}
                      alt={selectedDocument.name}
                      className="max-w-full h-auto mx-auto"
                    />
                  ) : (
                    /* Check if it's a PDF */
                    selectedDocument.link.match(/\.pdf$/i) ? (
                      <iframe
                        src={selectedDocument.link}
                        className="w-full h-[70vh] border-0"
                        title={selectedDocument.name}
                      />
                    ) : (
                      /* For other file types, show a download link */
                      <div className="text-center py-12">
                        <div className="text-gray-500 mb-4">
                          <DownloadIcon className="w-16 h-16 mx-auto text-gray-400" />
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                          This document cannot be previewed directly.
                        </p>
                        <p className="text-sm text-gray-500 mb-6">
                          Click the download button above to view the file.
                        </p>
                        <a
                          href={selectedDocument.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                        >
                          <DownloadIcon className="w-4 h-4 mr-2" />
                          Open in New Tab
                        </a>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-500 mb-4">
                    <AnnouncementIcon className="w-16 h-16 mx-auto text-gray-400" />
                  </div>
                  <p className="text-lg text-gray-700 mb-2">
                    No document link available
                  </p>
                  <p className="text-sm text-gray-500">
                    This document doesn't have a downloadable link.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* Send Remark Popup */}
      {showRemarkPopup && selectedDocumentForRemark && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Send Remark for {selectedDocumentForRemark.name}
              </h3>
              <button
                onClick={() => {
                  setShowRemarkPopup(false);
                  setRemarkText('');
                  setSelectedDocumentForRemark(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

             {/* Content */}
             <div className="p-6">
               <div className="mb-4">
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   Send Method
                 </label>
                 <div className="flex gap-4 mb-4">
                   <label className="flex items-center">
                     <input
                       type="radio"
                       name="remarkMethod"
                       value="email"
                       checked={remarkMethod === 'email'}
                       onChange={(e) => setRemarkMethod(e.target.value as 'email' | 'whatsapp')}
                       className="mr-2"
                     />
                     <span className="text-sm text-gray-700">📧 Email</span>
                   </label>
                   <label className="flex items-center">
                     <input
                       type="radio"
                       name="remarkMethod"
                       value="whatsapp"
                       checked={remarkMethod === 'whatsapp'}
                       onChange={(e) => setRemarkMethod(e.target.value as 'email' | 'whatsapp')}
                       className="mr-2"
                     />
                     <span className="text-sm text-gray-700">📱 WhatsApp</span>
                   </label>
                 </div>
               </div>
               <div className="mb-4">
                 <label className="block text-sm font-medium text-gray-700 mb-2">
                   Remark
                 </label>
                 <textarea
                   value={remarkText}
                   onChange={(e) => setRemarkText(e.target.value)}
                   placeholder="Enter your remark about this document..."
                   rows={4}
                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                 />
               </div>
               <p className="text-sm text-gray-500">
                 This remark will be sent to the student via {remarkMethod === 'email' ? 'email' : 'WhatsApp'} regarding their document.
               </p>
             </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowRemarkPopup(false);
                  setRemarkText('');
                  setSelectedDocumentForRemark(null);
                }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitRemark}
                className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Remark
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Upload Document
              </h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFile(null);
                  setUploadDocumentName('');
                  setSelectedDocumentForUpload(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Name
                </label>
                <input
                  type="text"
                  value={uploadDocumentName}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  This document will be replaced with the new file
                </p>
              </div>


              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select File
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.txt"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {uploadFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {uploadFile.name}
                  </p>
                )}
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG, GIF, TXT (Max 10MB)
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadFile(null);
                  setUploadDocumentName('');
                  setSelectedDocumentForUpload(null);
                }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUploadDocument}
                disabled={uploading || !uploadFile || !uploadDocumentName.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'Uploading...' : 'Upload Document'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Document Modal */}
      {showAddDocumentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Add New Document
              </h3>
              <button
                onClick={() => {
                  setShowAddDocumentModal(false);
                  setNewDocumentName('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Document Name
                </label>
                <input
                  type="text"
                  value={newDocumentName}
                  onChange={(e) => setNewDocumentName(e.target.value)}
                  placeholder="Enter document name (e.g., Passport, Visa, Academic Certificate)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <p className="text-sm text-gray-500 mb-4">
                This will create a new document requirement for the student. The student can then upload their document.
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setShowAddDocumentModal(false);
                  setNewDocumentName('');
                }}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDocument}
                disabled={addingDocument || !newDocumentName?.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addingDocument ? 'Adding...' : 'Add Document'}
              </button>
            </div>
          </div>
        </div>
      )}
    </DocumentLayout>
    );
};




export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string; // explicitly cast to string


  return {
    props: { id }, // passed to the component as props
  };
};

export default DocumentPage;
