import React, { use, useEffect } from 'react'
import {useState,useMemo} from 'react'
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import toast, {Toaster} from 'react-hot-toast';
import authHeaders from '@/components/admin/authHeader'

const FeeStructureGeneration = ({ fetchFinanceData,  students = [] }: { fetchFinanceData:()=>void ,students?:any[]}) => {
    
    const [billFormOpen,setBillFormOpen] = useState(false);
    const [submittingBill, setSubmittingBill] = useState(false);
    const [billForm, setBillForm] = useState({
        studentId: '',
        studentName: '',
        fatherName:'',
        countryName:'',
        universities:'',
        programme:'',
        oneTimeCharge:0,
        processingCharge:0,
        ticketsIncluded:false,
        visasIncluded:false,
        firstYearPackageIncluded:false,
      });
    const [studentPickerOpen, setStudentPickerOpen] = useState(false);
    const [studentPickerSearch, setStudentPickerSearch] = useState('');

   
    const handleBillFormChange = (field:any, value:any) => {
    setBillForm((prev) => ({ ...prev, [field]: value }));
    };


    const handleSelectStudentForBill = (student:any) => {
        setBillForm((prev) => ({
          ...prev,
          studentId: student._id,
          studentName: student.name,
        }));
        setStudentPickerOpen(false);
      };

    const handleCreateBill = async (event:any) => {
    event.preventDefault();
    if (!billForm.studentId || !billForm.studentName || !billForm.fatherName || !billForm.countryName 
      || !billForm.programme || billForm.oneTimeCharge === undefined || billForm.processingCharge === undefined
    ) {
        toast.error('Please complete all required fields');
        return;
    }

    setSubmittingBill(true);
    try {
        const headers = authHeaders();
        // Convert universities string to array (support both newline and comma separated)
        const universitiesArray = billForm.universities
          ? billForm.universities
              .split(/[,\n]/)
              .map(u => u.trim())
              .filter(u => u)
          : [];

        const payload = {
        studentId: billForm.studentId,
        fatherName: billForm.fatherName,
        countryName: billForm.countryName,
        universities: universitiesArray,
        programme: billForm.programme,
        oneTimeCharge: Number(billForm.oneTimeCharge),
        processingCharge: Number(billForm.processingCharge),
        ticketsIncluded: billForm.ticketsIncluded,
        visasIncluded: billForm.visasIncluded,
        firstYearPackageIncluded: billForm.firstYearPackageIncluded,
        };

        await axios.put(`${baseUrl}/api/admin/finance/bills/feeStructure`, payload, { headers });
        
        // Update student enrollment (countries and universities)
        try {
          const enrollmentPayload = {
            studentId: billForm.studentId,
            countryName: billForm.countryName,
            universities: universitiesArray,
          };
          await axios.put(`${baseUrl}/api/admin/finance/students/enrollment`, enrollmentPayload, { headers });
        } catch (enrollmentErr: any) {
          console.error('Failed to update student enrollment:', enrollmentErr);
          // Don't show error toast as fee structure was already generated successfully
        }
        
        toast.success('Fee structure generated and uploaded successfully');
        setBillForm({
        studentId: '',
        studentName: '',
        fatherName:'',
        countryName:'',
        universities:'',
        programme:'',
        oneTimeCharge:0,
        processingCharge:0,
        ticketsIncluded:false,
        visasIncluded:false,
        firstYearPackageIncluded:false,
        });
        setStudentPickerSearch('');
        await fetchFinanceData();
    } catch (err: any) {
        console.error('Failed to generate fee structure:', err);
        toast.error(
        err?.response?.data?.message ||
        err?.message ||
        'Failed to generate fee structure'
        );
    } finally {
        setSubmittingBill(false);
    }
    }
    
    const filteredStudentOptions = useMemo(() => {
        const query = studentPickerSearch.trim().toLowerCase();
    
        // Ensure students is an array before iterating
        const studentsArray = Array.isArray(students) ? students : [];
        let sorted = [...studentsArray].sort((a, b) =>
          (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
        );
       

        if (!query) return sorted;
        return sorted.filter(
          (student) =>
            student.name?.toLowerCase().includes(query) || student.email?.toLowerCase().includes(query)
        );
      }, [studentPickerSearch, students]);
    return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <button
        type="button"
        className="w-full flex items-center justify-between px-6 py-4"
        onClick={() => setBillFormOpen(!billFormOpen)}
      >
        <div className='mx-auto'>
          <p className="text-lg font-semibold text-gray-900">Generate New Fees Structure</p>
          <p className="text-sm text-gray-500">
            Create and assign a new fees structure to an enrolled student
          </p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${
            billFormOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {billFormOpen && (
        <div className="border-t border-gray-100 px-6 py-6">
          <form onSubmit={handleCreateBill} className="grid grid-cols-1 gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Student
                </label>
                <div
                  className="border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                  onClick={() => setStudentPickerOpen(!studentPickerOpen)}
                >
                  <div>
                    <p className="text-sm text-gray-900">
                      {billForm.studentName || 'Choose a student'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {billForm.studentId ? 'Ready to generate fee structure' : 'Required field'}
                    </p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform ${
                      studentPickerOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {studentPickerOpen && (
                  <div className="absolute z-20 mt-2 w-full bg-white border border-gray-100 rounded-xl shadow-lg">
                    <div className="p-3 border-b border-gray-100">
                      <input
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                        placeholder="Search student..."
                        value={studentPickerSearch}
                        onChange={(e) => setStudentPickerSearch(e.target.value)}
                      />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredStudentOptions.length === 0 && (
                        <p className="text-xs text-center text-gray-500 py-3">No students found</p>
                      )}
                      {filteredStudentOptions.map((student) => (
                        <button
                          type="button"
                          key={student._id}
                          className="w-full px-4 py-2 text-left hover:bg-gray-50"
                          onClick={() => handleSelectStudentForBill(student)}
                        >
                          <p className="text-sm font-medium text-gray-900">{student.name}</p>
                          <p className="text-xs text-gray-500">{student.email}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter father's name"
                  value={billForm.fatherName}
                  onChange={(e) => handleBillFormChange('fatherName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country Name *</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter country name (comma separated for multiple)"
                  value={billForm.countryName}
                  onChange={(e) => handleBillFormChange('countryName', e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">You can enter multiple countries separated by commas</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Programme *</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter programme name"
                  value={billForm.programme}
                  onChange={(e) => handleBillFormChange('programme', e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Universities</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter university names (one per line or comma separated)"
                  value={billForm.universities}
                  onChange={(e) => handleBillFormChange('universities', e.target.value)}
                />
                <p className="text-xs text-gray-500 mt-1">You can enter multiple universities, one per line or separated by commas</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">One Time Charge (USD) *</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter one time charge"
                  value={billForm.oneTimeCharge}
                  onChange={(e) => handleBillFormChange('oneTimeCharge', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Processing Charge (INR) *</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter processing charge"
                  value={billForm.processingCharge}
                  onChange={(e) => handleBillFormChange('processingCharge', e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ticketsIncluded"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  checked={billForm.ticketsIncluded}
                  onChange={(e) => handleBillFormChange('ticketsIncluded', e.target.checked)}
                />
                <label htmlFor="ticketsIncluded" className="ml-2 text-sm font-medium text-gray-700">
                  Flight Tickets Included
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="visasIncluded"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  checked={billForm.visasIncluded}
                  onChange={(e) => handleBillFormChange('visasIncluded', e.target.checked)}
                />
                <label htmlFor="visasIncluded" className="ml-2 text-sm font-medium text-gray-700">
                  Visa Charges Included
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="firstYearPackageIncluded"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  checked={billForm.firstYearPackageIncluded}
                  onChange={(e) => handleBillFormChange('firstYearPackageIncluded', e.target.checked)}
                />
                <label htmlFor="firstYearPackageIncluded" className="ml-2 text-sm font-medium text-gray-700">
                  First Year Package Included
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submittingBill}
                className="inline-flex items-center px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submittingBill ? 'Generating...' : 'Generate Fee Structure'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}


export default FeeStructureGeneration
