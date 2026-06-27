import React, { useEffect } from 'react'
import {useState,useMemo} from 'react'
import axios from 'axios';
import Select from 'react-select';
import { baseUrl } from '@/lib/baseUrl';
import toast, {Toaster} from 'react-hot-toast';
import authHeaders from '@/components/admin/authHeader'
import { useStaticAttributes } from '@/context/StaticAttributesContext';

const addNewStyle = {
  option: (base: any, state: any) => ({
    ...base,
    color: state.data.value === '__add_new__' ? '#0d9488' : base.color,
    fontWeight: state.data.value === '__add_new__' ? 600 : base.fontWeight,
  }),
};

const FeeStructureGeneration = ({ fetchFinanceData,  students = [] }: { fetchFinanceData:()=>void ,students?:any[]}) => {

    const {
      currencies, addCurrency,
      countries, universities: universityList,
      addCountry, addUniversity,
      refresh: refreshStaticAttrs,
    } = useStaticAttributes();

    useEffect(() => { refreshStaticAttrs(); }, []);

    const [billFormOpen,setBillFormOpen] = useState(false);
    const [submittingBill, setSubmittingBill] = useState(false);
    const [billForm, setBillForm] = useState<{
      studentId: string;
      studentName: string;
      fatherName: string;
      countryName: string;
      universities: string[];
      programme: string;
      oneTimeCharge: number;
      processingCharge: number;
      otcCurrency: string;
      processingCurrency: string;
      ticketsIncluded: boolean;
      visasIncluded: boolean;
      firstYearPackageIncluded: boolean;
    }>({
        studentId: '',
        studentName: '',
        fatherName: '',
        countryName: '',
        universities: [],
        programme: '',
        oneTimeCharge: 0,
        processingCharge: 0,
        otcCurrency: '',
        processingCurrency: '',
        ticketsIncluded: false,
        visasIncluded: false,
        firstYearPackageIncluded: false,
    });

    const [studentPickerOpen, setStudentPickerOpen] = useState(false);
    const [studentPickerSearch, setStudentPickerSearch] = useState('');

    // ── Country inline-add state ──────────────────────────────────────────────
    const [addingCountry, setAddingCountry] = useState(false);
    const [newCountryName, setNewCountryName] = useState('');

    // ── University inline-add state ───────────────────────────────────────────
    const [addingUniversity, setAddingUniversity] = useState(false);
    const [newUniversityName, setNewUniversityName] = useState('');

    const [savingItem, setSavingItem] = useState(false);

    // ── Currency inline-add state ─────────────────────────────────────────────
    const [addingCurrency, setAddingCurrency] = useState<'otcCurrency' | 'processingCurrency' | null>(null);
    const [newCurrencyName, setNewCurrencyName] = useState('');
    const [savingCurrency, setSavingCurrency] = useState(false);

    // ── Select options ────────────────────────────────────────────────────────
    const countrySelectOptions = [
      ...countries.map(c => ({ value: c, label: c })),
      { value: '__add_new__', label: '+ Add new country' },
    ];

    const universitySelectOptions = [
      ...universityList.map(u => ({ value: u, label: u })),
      { value: '__add_new__', label: '+ Add new university' },
    ];

    const currencySelectOptions = [
      ...currencies.map(c => ({ value: c, label: c })),
      { value: '__add_new__', label: '+ Add new currency' },
    ];

    // ── Handlers ──────────────────────────────────────────────────────────────
    const handleBillFormChange = (field: any, value: any) => {
      setBillForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSaveNewCountry = async () => {
      if (!newCountryName.trim()) return;
      setSavingItem(true);
      try {
        await addCountry(newCountryName.trim());
        handleBillFormChange('countryName', newCountryName.trim());
        setAddingCountry(false);
        setNewCountryName('');
        toast.success('Country added');
      } catch (err: any) {
        toast.error(err?.response?.data?.message || 'Failed to add country');
      } finally {
        setSavingItem(false);
      }
    };

    const handleSaveNewUniversity = async () => {
      if (!newUniversityName.trim()) return;
      setSavingItem(true);
      try {
        await addUniversity(newUniversityName.trim());
        handleBillFormChange('universities', [...billForm.universities, newUniversityName.trim()]);
        setAddingUniversity(false);
        setNewUniversityName('');
        toast.success('University added');
      } catch (err: any) {
        toast.error(err?.response?.data?.message || 'Failed to add university');
      } finally {
        setSavingItem(false);
      }
    };

    const handleSaveNewCurrency = async () => {
      if (!newCurrencyName.trim() || !addingCurrency) return;
      setSavingCurrency(true);
      try {
        await addCurrency(newCurrencyName.trim());
        handleBillFormChange(addingCurrency, newCurrencyName.trim());
        setAddingCurrency(null);
        setNewCurrencyName('');
        toast.success('Currency added');
      } catch (err: any) {
        toast.error(err?.response?.data?.message || 'Failed to add currency');
      } finally {
        setSavingCurrency(false);
      }
    };

    const handleSelectStudentForBill = (student: any) => {
        setBillForm((prev) => ({
          ...prev,
          studentId: student._id,
          studentName: student.name,
        }));
        setStudentPickerOpen(false);
    };

    const handleCreateBill = async (event: any) => {
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

          const payload = {
            studentId: billForm.studentId,
            fatherName: billForm.fatherName,
            countryName: billForm.countryName,
            universities: billForm.universities,
            programme: billForm.programme,
            oneTimeCharge: Number(billForm.oneTimeCharge),
            processingCharge: Number(billForm.processingCharge),
            otcCurrency: billForm.otcCurrency || 'USD',
            processingCurrency: billForm.processingCurrency || 'INR',
            ticketsIncluded: billForm.ticketsIncluded,
            visasIncluded: billForm.visasIncluded,
            firstYearPackageIncluded: billForm.firstYearPackageIncluded,
          };

          await axios.put(`${baseUrl}/api/admin/finance/bills/feeStructure`, payload, { headers });

          try {
            await axios.put(`${baseUrl}/api/admin/finance/students/enrollment`, {
              studentId: billForm.studentId,
              countryName: billForm.countryName,
              universities: billForm.universities,
            }, { headers });
          } catch (enrollmentErr: any) {
            console.error('Failed to update student enrollment:', enrollmentErr);
          }

          toast.success('Fee structure generated and uploaded successfully');
          setBillForm({
            studentId: '',
            studentName: '',
            fatherName: '',
            countryName: '',
            universities: [],
            programme: '',
            oneTimeCharge: 0,
            processingCharge: 0,
            otcCurrency: '',
            processingCurrency: '',
            ticketsIncluded: false,
            visasIncluded: false,
            firstYearPackageIncluded: false,
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
    };

    const filteredStudentOptions = useMemo(() => {
        const query = studentPickerSearch.trim().toLowerCase();
        const studentsArray = Array.isArray(students) ? students : [];
        const sorted = [...studentsArray].sort((a, b) =>
          (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
        );
        if (!query) return sorted;
        return sorted.filter(
          (student) =>
            student.name?.toLowerCase().includes(query) || student.email?.toLowerCase().includes(query)
        );
    }, [studentPickerSearch, students]);

    const CurrencyField = ({ field, label }: { field: 'otcCurrency' | 'processingCurrency'; label: string }) => (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        {addingCurrency === field ? (
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
              <button type="button" onClick={() => { setAddingCurrency(null); setNewCurrencyName(''); }}
                className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <Select
            options={currencySelectOptions}
            value={currencySelectOptions.find(o => o.value === billForm[field]) || null}
            onChange={option => {
              if ((option as any)?.value === '__add_new__') { setAddingCurrency(field); return; }
              handleBillFormChange(field, (option as any)?.value || '');
            }}
            placeholder="Select currency"
            className="w-full"
            classNamePrefix="select"
            styles={addNewStyle}
          />
        )}
      </div>
    );

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
          className={`w-5 h-5 text-gray-600 transition-transform ${billFormOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {billFormOpen && (
        <div className="border-t border-gray-100 px-6 py-6">
          <form onSubmit={handleCreateBill} className="grid grid-cols-1 gap-4">
            <div className="grid gap-4 md:grid-cols-2">

              {/* ── Student picker ── */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Student</label>
                <div
                  className="border border-gray-200 rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer"
                  onClick={() => setStudentPickerOpen(!studentPickerOpen)}
                >
                  <div>
                    <p className="text-sm text-gray-900">{billForm.studentName || 'Choose a student'}</p>
                    <p className="text-xs text-gray-500">
                      {billForm.studentId ? 'Ready to generate fee structure' : 'Required field'}
                    </p>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform ${studentPickerOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
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
                          type="button" key={student._id}
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

              {/* ── Father's Name ── */}
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

              {/* ── Country dropdown ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country Name *</label>
                {addingCountry ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={newCountryName}
                      onChange={e => setNewCountryName(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="Enter country name"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={handleSaveNewCountry} disabled={savingItem}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50">
                        {savingItem ? 'Adding...' : 'Add'}
                      </button>
                      <button type="button" onClick={() => { setAddingCountry(false); setNewCountryName(''); }}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Select
                    options={countrySelectOptions}
                    value={countrySelectOptions.find(o => o.value === billForm.countryName) || null}
                    onChange={option => {
                      if ((option as any)?.value === '__add_new__') { setAddingCountry(true); return; }
                      handleBillFormChange('countryName', (option as any)?.value || '');
                    }}
                    placeholder="Select country"
                    className="w-full"
                    classNamePrefix="select"
                    styles={addNewStyle}
                  />
                )}
              </div>

              {/* ── Programme ── */}
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

              {/* ── Universities multi-select ── */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Universities</label>
                {addingUniversity ? (
                  <div className="flex flex-col gap-2">
                    <input
                      type="text"
                      value={newUniversityName}
                      onChange={e => setNewUniversityName(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                      placeholder="Enter university name"
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button type="button" onClick={handleSaveNewUniversity} disabled={savingItem}
                        className="flex-1 px-3 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50">
                        {savingItem ? 'Adding...' : 'Add'}
                      </button>
                      <button type="button" onClick={() => { setAddingUniversity(false); setNewUniversityName(''); }}
                        className="flex-1 px-3 py-2 border border-gray-300 text-gray-600 text-sm rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <Select
                    isMulti
                    options={universitySelectOptions}
                    value={universitySelectOptions.filter(o =>
                      o.value !== '__add_new__' && billForm.universities.includes(o.value)
                    )}
                    onChange={(options: any) => {
                      if (options?.some((o: any) => o.value === '__add_new__')) {
                        setAddingUniversity(true);
                        return;
                      }
                      handleBillFormChange('universities', options?.map((o: any) => o.value) || []);
                    }}
                    placeholder="Select universities..."
                    className="w-full"
                    classNamePrefix="select"
                    styles={addNewStyle}
                    closeMenuOnSelect={false}
                  />
                )}
              </div>

              {/* ── One Time Charge + Currency ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">One Time Charge *</label>
                <input
                  type="number" min="0" step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter one time charge"
                  value={billForm.oneTimeCharge}
                  onChange={(e) => handleBillFormChange('oneTimeCharge', e.target.value)}
                />
              </div>

              <CurrencyField field="otcCurrency" label="One Time Charge Currency" />

              {/* ── Processing Charge + Currency ── */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Processing Charge *</label>
                <input
                  type="number" min="0" step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter processing charge"
                  value={billForm.processingCharge}
                  onChange={(e) => handleBillFormChange('processingCharge', e.target.value)}
                />
              </div>

              <CurrencyField field="processingCurrency" label="Processing Charge Currency" />
            </div>

            {/* ── Inclusions ── */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center">
                <input type="checkbox" id="ticketsIncluded"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  checked={billForm.ticketsIncluded}
                  onChange={(e) => handleBillFormChange('ticketsIncluded', e.target.checked)}
                />
                <label htmlFor="ticketsIncluded" className="ml-2 text-sm font-medium text-gray-700">
                  Flight Tickets Included
                </label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="visasIncluded"
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  checked={billForm.visasIncluded}
                  onChange={(e) => handleBillFormChange('visasIncluded', e.target.checked)}
                />
                <label htmlFor="visasIncluded" className="ml-2 text-sm font-medium text-gray-700">
                  Visa Charges Included
                </label>
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="firstYearPackageIncluded"
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
                type="submit" disabled={submittingBill}
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
