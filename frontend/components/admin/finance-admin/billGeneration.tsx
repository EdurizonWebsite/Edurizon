import React, { useEffect } from 'react'
import {useState,useMemo} from 'react'
import axios from 'axios';
import Select from 'react-select';
import { baseUrl } from '@/lib/baseUrl';
import toast, {Toaster} from 'react-hot-toast';
import authHeaders from '@/components/admin/authHeader'
import { useStaticAttributes } from '@/context/StaticAttributesContext';

type StudentStruct={
  financeInfo: Record<string, any>,
  fatherName:string,
  enrolledCountry:string[],
  enrolledUniversity:string[],
  intendedCourse:string
}

const BillGeneration = ({ fetchFinanceData,  students = [] }: { fetchFinanceData:()=>void ,students?:any[]}) => {

    const { currencies, addCurrency, refresh: refreshStaticAttrs } = useStaticAttributes();

    useEffect(() => { refreshStaticAttrs(); }, []);

    const [addingCurrency, setAddingCurrency] = useState(false);
    const [newCurrencyName, setNewCurrencyName] = useState('');
    const [savingCurrency, setSavingCurrency] = useState(false);

    const currencySelectOptions = [
      ...currencies.map(c => ({ value: c, label: c })),
      { value: '__add_new__', label: '+ Add new currency' },
    ];

    const handleSaveNewCurrency = async () => {
      if (!newCurrencyName.trim()) return;
      setSavingCurrency(true);
      try {
        await addCurrency(newCurrencyName.trim());
        handleBillFormChange('currency', newCurrencyName.trim());
        setAddingCurrency(false);
        setNewCurrencyName('');
        toast.success('Currency added');
      } catch (err: any) {
        toast.error(err?.response?.data?.message || 'Failed to add currency');
      } finally {
        setSavingCurrency(false);
      }
    };

    const [billFormOpen,setBillFormOpen] = useState(true);
    const [submittingBill, setSubmittingBill] = useState(false);
    const [billForm, setBillForm] = useState({
        studentId: '',
        studentName: '',
        amountPaid: '',
        billDate: new Date().toISOString().split('T')[0],
        description: '',
        chargeType: 'processing',
        accountDetail: 'EDURIZON',
        paymentMode: 'Online Mode',
        purpose: '',
        currency: '',
      });
    const [studentPickerOpen, setStudentPickerOpen] = useState(false);
    const [studentPickerSearch, setStudentPickerSearch] = useState('');
    const [selectedStudent, setSelectedStudent] = useState<StudentStruct>();


    const handleBillFormChange = (field:any, value:any) => {
    setBillForm((prev) => ({ ...prev, [field]: value }));
    };


    const handleSelectStudentForBill = (student:any) => {
        setBillForm((prev) => ({
          ...prev,
          studentId: student._id,
          studentName: student.name,
        }));
        setSelectedStudent(student)
        setStudentPickerOpen(false);
      };

    const handleCreateBill = async (event:any) => {
    event.preventDefault();
    if (!billForm.studentId || !billForm.amountPaid || !billForm.billDate || !billForm.description) {
        toast.error('Please complete all required fields');
        return;
    }

    if (!billForm.currency) {
        toast.error('Please select a currency');
        return;
    }

    setSubmittingBill(true);
    try {
        const headers = authHeaders();
        const currency = billForm.currency;
        const purpose = billForm.purpose || (billForm.chargeType === 'otc' ? 'OTC Payment' : 'Processing Fee Payment');

        const mappedPurpose = billForm.chargeType === 'otc' ? 'One Time Charge' : 'Processing Fee';

        const payload = {
        studentId: billForm.studentId,
        amountDue: Number(billForm.amountPaid),
        amountPaid: Number(billForm.amountPaid),
        description: billForm.description,
        studentName: billForm.studentName,
        purpose: mappedPurpose,
        currency: billForm.currency,
        paymentMode:billForm.paymentMode,
        accountName:billForm.accountDetail
        };

        const billResponse = await axios.post(`${baseUrl}/api/admin/finance/bills`, payload, { headers });

        const receiptPayload = {
          studentId: billForm.studentId,
          paymentAmount: Number(billForm.amountPaid),
          paymentNumber: 1,
          studentName: billForm.studentName,
          university: selectedStudent!.enrolledUniversity,
          country: selectedStudent!.enrolledCountry,
          status:'completed',
          currency: currency,
          chargeType: billForm.chargeType,
          purpose: purpose,
          fatherName:selectedStudent!.fatherName,
          programme:selectedStudent!.intendedCourse.toLocaleUpperCase(),
          financeInfo:selectedStudent!.financeInfo,
          accountDetail:billForm.accountDetail,
          paymentMode:billForm.paymentMode,
          description:billForm.description
        };
        const res:any= await axios.post(`${baseUrl}/api/admin/finance/bills/generate-receipt`, receiptPayload, { headers })

        await axios.patch(
          `${baseUrl}/api/admin/finance/bills/${billResponse.data?.data?._id}/url`,
          { url: res.data.url },
          { headers }
        );

        toast.success('Payment receipt generated successfully');
        setBillForm({
        studentId: '',
        studentName: '',
        amountPaid: '',
        billDate: new Date().toISOString().split('T')[0],
        description: '',
        chargeType: 'processing',
        purpose: '',
        accountDetail:"Edurizon",
        paymentMode:'Online Mode',
        currency: '',
        });
        setStudentPickerSearch('');
        await fetchFinanceData();
    } catch (err: any) {
        console.error('Failed to create bill:', err);
        toast.error(
        err?.response?.data?.message ||
        err?.message ||
        'Failed to generate receipt'
        );
    } finally {
        setSubmittingBill(false);
    }
    }

    const filteredStudentOptions = useMemo(() => {
        const query = studentPickerSearch.trim().toLowerCase();

        const studentsArray = Array.isArray(students) ? students : [];
        let sorted = [...studentsArray].sort((a, b) =>
          (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
        );
        sorted= sorted.filter((item)=>{
          return item.financeInfo.feeStructureLink!=null
        })
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
          <p className="text-lg font-semibold text-gray-900">Generate Payment Receipt</p>
          <p className="text-sm text-gray-500">
            Record payment and generate receipt for completed transactions
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
                      {billForm.studentId ? 'Ready to generate bill' : 'Required field'}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Charge Type *</label>
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={billForm.chargeType}
                  onChange={(e) => handleBillFormChange('chargeType', e.target.value)}
                >
                  <option value="processing">Processing Charge</option>
                  <option value="otc">OTC - One Time Charge</option>
                </select>
              </div>

              {/* Currency selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Currency *</label>
                {addingCurrency ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={newCurrencyName}
                      onChange={e => setNewCurrencyName(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="e.g. USD, EUR, GBP"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={handleSaveNewCurrency} disabled={savingCurrency}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50">
                        {savingCurrency ? 'Adding...' : 'Add'}
                      </button>
                      <button type="button" onClick={() => { setAddingCurrency(false); setNewCurrencyName(''); }}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Select
                    options={currencySelectOptions}
                    value={currencySelectOptions.find(o => o.value === billForm.currency) || null}
                    onChange={option => {
                      if (option?.value === '__add_new__') { setAddingCurrency(true); return; }
                      handleBillFormChange('currency', option?.value || '');
                    }}
                    placeholder="Select currency"
                    className="w-full"
                    classNamePrefix="select"
                    styles={{
                      option: (base, state) => ({
                        ...base,
                        color: (state.data as any).value === '__add_new__' ? '#0d9488' : base.color,
                        fontWeight: (state.data as any).value === '__add_new__' ? 600 : base.fontWeight,
                      })
                    }}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid *</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder={billForm.currency ? `Enter amount in ${billForm.currency}` : 'Enter amount'}
                  value={billForm.amountPaid}
                  onChange={(e) => handleBillFormChange('amountPaid', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bill Date *</label>
                <input
                  type="date"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  value={billForm.billDate}
                  onChange={(e) => handleBillFormChange('billDate', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder={billForm.chargeType === 'otc' ? 'e.g., Full OTC Payment' : 'e.g., Partial Processing Fee, Full Processing Fee'}
                  value={billForm.purpose}
                  onChange={(e) => handleBillFormChange('purpose', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="e.g., Online Mode, Cash, Bank Transfer"
                  value={billForm.paymentMode}
                  onChange={(e) => handleBillFormChange('paymentMode', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter Account Name in which money has been transferred to."
                  value={billForm.accountDetail}
                  onChange={(e) => handleBillFormChange('accountDetail', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Describe the bill purpose..."
                value={billForm.description}
                onChange={(e) => handleBillFormChange('description', e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submittingBill}
                className="inline-flex items-center px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submittingBill ? 'Generating...' : 'Generate Bill'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}


export default BillGeneration
