import React from 'react'
import renderStatusBadge from './renderStatusBadge'

function formatBillAmount(amount: number, currency: string | null | undefined, purpose: string) {
  const code = (currency || (purpose === 'One Time Charge' ? 'USD' : 'INR')).toUpperCase();
  const num = Number(amount) || 0;
  if (code === 'INR') return `₹${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  return `${code} ${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const StudentModal = ({ studentModal, closeStudentModal, openPaymentModal, handleDownloadReceipt }: { studentModal: any, closeStudentModal: () => void, openPaymentModal: (bill: any) => void, handleDownloadReceipt: (bill: any, student: any) => void }) => {
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
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <p className="text-lg font-semibold text-gray-900">
            {studentModal.student?.name || 'Student'}
          </p>
          <p className="text-sm text-gray-500">{studentModal.student?.email}</p>
        </div>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-600"
          onClick={closeStudentModal}
        >
          ✕
        </button>
      </div>

      <div className="px-6 py-4 overflow-y-auto max-h-[65vh]">
        {studentModal.loading ? (
          <p className="text-center text-sm text-gray-500 py-6">Loading bills...</p>
        ) : studentModal.bills.length === 0 ? (
          <p className="text-center text-sm text-gray-500 py-6">
            No bills available for this student.
          </p>
        ) : (
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                {['Description', 'Amount Due', 'Amount Paid', 'Due Date', 'Status', 'Actions'].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {studentModal.bills.map((bill: any) => (
                <tr key={bill._id}>
                  <td className="px-4 py-3 text-sm text-gray-900">{bill.description}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                    {formatBillAmount(bill.amountDue, bill.currency, bill.purpose)}
                  </td>
                  <td className="px-4 py-3 text-sm text-teal-700 font-semibold">
                    {formatBillAmount(bill.amountPaid, bill.currency, bill.purpose)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {bill.dueDate ? new Date(bill.dueDate).toLocaleDateString() : '—'}
                  </td>
                  <td className="px-4 py-3">{renderStatusBadge(bill.status)}</td>
                  <td className="px-4 py-3 space-x-3 whitespace-nowrap">
                    <button
                      type="button"
                      className="text-sm font-medium text-teal-600 hover:text-teal-800"
                      onClick={() => openPaymentModal(bill)}
                    >
                      Record Payment
                    </button>
                    <button
                      type="button"
                      className="text-sm font-medium text-gray-600 hover:text-gray-800"
                      onClick={() => handleDownloadDocument(bill.url, bill.description)}
                    >
                      Download Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  </div>
  )
}

export default StudentModal
