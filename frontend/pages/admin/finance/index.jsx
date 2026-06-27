import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import DocumentLayout from '@/components/admin/DocumentLayout';
import { baseUrl } from '@/lib/baseUrl';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GridViewIcon from '@mui/icons-material/GridView';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Components
import PendingBills from '@/components/admin/finance-admin/pendingBills';
import SummaryCards from '@/components/admin/finance-admin/summaryCards';
import BillGeneration from '@/components/admin/finance-admin/billGeneration';
import FeeStructureGeneration from '@/components/admin/finance-admin/feeStructureGeneration';
import StudentModal from '@/components/admin/finance-admin/studentModal';
import PaymentModal from '@/components/admin/finance-admin/paymentModal';

import BillReceipt from '@/components/admin/BillReceipt';
import authHeaders from '@/components/admin/authHeader'
import { useStaticAttributes } from '@/context/StaticAttributesContext';

const navItems = [
  {
    href: '/admin/finance',
    icon: <GridViewIcon />,
    label: 'Overview',
  },
  {
    href: '/admin/finance/student-tracking',
    icon: <AccountBalanceWalletIcon />,
    label: 'Student Payments',
  },
];

const FinanceDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState([]);
  const [allBills, setAllBills] = useState([]);
  const [pendingBills, setPendingBills] = useState([]);
  const [paidSummary, setPaidSummary] = useState({ otc: {}, processing: {} });
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [studentModal, setStudentModal] = useState({
    open: false,
    student: null,
    bills: [],
    loading: false,
  });

  const [paymentModal, setPaymentModal] = useState({
    open: false,
    bill: null,
    amount: '',
    method: '',
    loading: false,
  });

  const pdfContainerRef = useRef(null);
  const [pdfContext, setPdfContext] = useState(null);

  const { currencies, addCurrency, removeCurrency, refresh: refreshStaticAttrs } = useStaticAttributes();

  useEffect(() => { refreshStaticAttrs(); }, []);
  const [manageCurrencyOpen, setManageCurrencyOpen] = useState(false);
  const [newCurrencyName, setNewCurrencyName] = useState('');
  const [savingCurrency, setSavingCurrency] = useState(false);

  const handleAddCurrency = async () => {
    if (!newCurrencyName.trim()) return;
    setSavingCurrency(true);
    try {
      await addCurrency(newCurrencyName.trim());
      setNewCurrencyName('');
      toast.success('Currency added');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to add currency');
    } finally {
      setSavingCurrency(false);
    }
  };

  const handleRemoveCurrency = async (name) => {
    setSavingCurrency(true);
    try {
      await removeCurrency(name);
      toast.success('Currency removed');
    } catch {
      toast.error('Failed to remove currency');
    } finally {
      setSavingCurrency(false);
    }
  };

  const fetchFinanceData = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = authHeaders();
      const [studentsRes, billsRes, pendingRes, paidRes] = await Promise.all([
        axios.get(`${baseUrl}/api/admin/finance/students/all`, { headers }),
        axios.get(`${baseUrl}/api/admin/finance/bills/all`, { headers }),
        axios.get(`${baseUrl}/api/admin/finance/bills/pending`, { headers }),
        axios.get(`${baseUrl}/api/admin/finance/bills/paid-summary`, { headers }),
      ]);

      setStudents(studentsRes.data?.data || []);
      setAllBills(billsRes.data?.data || []);
      setPendingBills(pendingRes.data?.data || []);
      setPaidSummary(paidRes.data?.data || { otc: {}, processing: {} });
    } catch (err) {
      console.error('Failed to load finance dashboard:', err);
      const message = err?.response?.data?.message || 'Failed to load finance data';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFinanceData();
  }, []);

  const summaryStats = useMemo(() => {
    // ── Billed: from each student's financeInfo ──────────────────────────
    const otcBilled = {};
    const procBilled = {};

    students.forEach((student) => {
      const fi = student.financeInfo || {};

      const otcCur = (fi.otcCurrency || 'USD').toUpperCase();
      const otcAmt = fi.oneTimeCharge || fi.totalOtcUsd || 0;
      if (otcAmt > 0) otcBilled[otcCur] = (otcBilled[otcCur] || 0) + otcAmt;

      const procCur = (fi.processingCurrency || 'INR').toUpperCase();
      const procAmt = fi.processingCharge || fi.totalProcessingInr || 0;
      if (procAmt > 0) procBilled[procCur] = (procBilled[procCur] || 0) + procAmt;
    });

    // ── Paid: from server-side aggregation of FinanceBill collection ─────
    const otcPaid = paidSummary.otc || {};
    const procPaid = paidSummary.processing || {};

    // ── Merge billed + paid → pending per currency ────────────────────────
    const merge = (billed, paid) => {
      const currencies = new Set([...Object.keys(billed), ...Object.keys(paid)]);
      const result = {};
      currencies.forEach((cur) => {
        const b = billed[cur] || 0;
        const p = paid[cur] || 0;
        result[cur] = { billed: b, paid: p, pending: Math.max(b - p, 0) };
      });
      return result;
    };

    return {
      totalStudents: students.length,
      otcByCurrency: merge(otcBilled, otcPaid),
      processingByCurrency: merge(procBilled, procPaid),
    };
  }, [students, paidSummary]);

  const pendingTabRows = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return pendingBills.filter((bill) => {
      const studentName = bill?.studentId?.name?.toLowerCase() || '';
      const description = bill.description?.toLowerCase() || '';
      return (
        !query ||
        studentName.includes(query) ||
        description.includes(query) ||
        bill.status?.toLowerCase().includes(query)
      );
    });
  }, [pendingBills, searchQuery]);

  const openStudentBillsModal = async (student) => {
    setStudentModal({
      open: true,
      student,
      bills: [],
      loading: true,
    });

    try {
      const headers = authHeaders();
      const res = await axios.get(
        `${baseUrl}/api/admin/finance/bills/student/${student._id}`,
        {
          headers,
        }
      );
      setStudentModal((prev) => ({
        ...prev,
        bills: res.data?.data || [],
        loading: false,
      }));
    } catch (err) {
      console.error('Failed to fetch student bills:', err);
      toast.error(err?.response?.data?.message || 'Failed to load student bills');
      setStudentModal((prev) => ({ ...prev, loading: false }));
    }
  };

  const closeStudentModal = () => {
    setStudentModal({
      open: false,
      student: null,
      bills: [],
      loading: false,
    });
  };

  const openPaymentModal = (bill) => {
    setPaymentModal({
      open: true,
      bill,
      amount: '',
      method: '',
      loading: false,
    });
  };

  const closePaymentModal = () => {
    setPaymentModal({
      open: false,
      bill: null,
      amount: '',
      method: '',
      loading: false,
    });
  };

  const handleSubmitPayment = async (event) => {
    event.preventDefault();
    if (!paymentModal.bill?._id || !paymentModal.amount) {
      toast.error('Please enter the payment amount');
      return;
    }

    setPaymentModal((prev) => ({ ...prev, loading: true }));
    try {
      const headers = authHeaders();
      const payload = {
        amount: Number(paymentModal.amount),
        method: paymentModal.method || 'Manual',
      };
      const bill = await axios.patch(
        `${baseUrl}/api/admin/finance/bills/${paymentModal.bill._id}/payment`,
        payload,
        { headers }
      );

      const receiptPayload = {
        studentId: bill.data.data.studentId,
        paymentAmount: Number(paymentModal.amount),
        paymentNumber: 1,
        studentName: bill.data.data.studentName,
        university: bill.data.data.university,
        status: 'completed'
      };

      const res = await axios.post(`${baseUrl}/api/admin/finance/bills/generate-receipt`, receiptPayload, { headers })

      const updateStudentPayload = {
        studentId: bill.data.data.studentId,
        oldUrl: bill.data.data.url,
        newBill: { status: 'completed', url: res.data.url },
      }

      axios.patch(`${baseUrl}/api/admin/finance/update-student-receipt-status`, updateStudentPayload, { headers })

      toast.success('Payment recorded');
      closePaymentModal();
      await fetchFinanceData();
      if (studentModal.open && studentModal.student) {
        openStudentBillsModal(studentModal.student);
      }
    } catch (err) {
      console.error('Failed to record payment:', err);
      toast.error(err?.response?.data?.message || 'Failed to record payment');
      setPaymentModal((prev) => ({ ...prev, loading: false }));
    }
  };

  const handleDownloadReceipt = (bill, student) => {
    if (!bill || !student) {
      toast.error('Bill or student information missing');
      return;
    }
    setPdfContext({ bill, student });
  };

  useEffect(() => {
    const generatePdf = async () => {
      if (!pdfContext || !pdfContainerRef.current) return;

      try {
        const element = pdfContainerRef.current;
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
        });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgProps = {
          width: canvas.width,
          height: canvas.height,
        };

        const ratio = Math.min(pageWidth / imgProps.width, pageHeight / imgProps.height);
        const imgWidth = imgProps.width * ratio;
        const imgHeight = imgProps.height * ratio;

        const x = (pageWidth - imgWidth) / 2;
        const y = 0;

        pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

        const receiptNumber = pdfContext.bill?._id
          ? String(pdfContext.bill._id).slice(-8).toUpperCase()
          : 'RECEIPT';
        pdf.save(`Edurizon_Receipt_${receiptNumber}.pdf`);
      } catch (err) {
        console.error('Failed to generate PDF receipt:', err);
        toast.error('Failed to generate PDF receipt');
      } finally {
        setPdfContext(null);
      }
    };

    if (pdfContext) {
      const id = setTimeout(generatePdf, 50);
      return () => clearTimeout(id);
    }
  }, [pdfContext]);


  const renderTabs = () => (
    <div className="flex flex-wrap gap-3">
      {[
        { key: 'students', label: 'Bill Generation & Students' },
        // { key: 'pending', label: 'Pending Bills / Payments' },
      ].map((tab) => {
        const isActive = activeTab === tab.key;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive
                ? 'bg-teal-600 text-white shadow'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-400'
              }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );


  return (
    <DocumentLayout navItems={navItems}>
      <div className="min-h-screen bg-[#F5F7FA] px-6 py-8">
        <Toaster position="top-right" />
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">Finance Administration Dashboard</p>
                <p className="text-sm text-gray-500">
                  Monitor billing health, generate invoices, and follow up on dues.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search students or bills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:ring-teal-500 focus:border-teal-500 text-sm bg-gray-50"
                  />
                </div>
              </div>
            </div>
            {renderTabs()}
          </div>

          <SummaryCards summaryStats={summaryStats} />

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {loading ? (
            <div className="bg-white rounded-xl border border-gray-100 p-10 text-center text-gray-500">
              Loading finance data...
            </div>
          ) : (
            <>
              {activeTab === 'students' && (
                <div className="flex flex-col gap-6">
                  {/* Manage Currencies Panel */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-6 py-4"
                      onClick={() => setManageCurrencyOpen(prev => !prev)}
                    >
                      <div>
                        <p className="text-base font-semibold text-gray-900 text-left">Manage Currencies</p>
                        <p className="text-xs text-gray-500 text-left">Add or remove currencies available for billing</p>
                      </div>
                      <svg className={`w-5 h-5 text-gray-500 transition-transform ${manageCurrencyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {manageCurrencyOpen && (
                      <div className="border-t border-gray-100 px-6 py-5">
                        <div className="flex gap-2 mb-4">
                          <input
                            type="text"
                            value={newCurrencyName}
                            onChange={e => setNewCurrencyName(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleAddCurrency()}
                            placeholder="e.g. USD, INR, EUR, GBP"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                          />
                          <button
                            onClick={handleAddCurrency}
                            disabled={savingCurrency || !newCurrencyName.trim()}
                            className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700 disabled:opacity-50"
                          >
                            Add
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {currencies.length === 0 && <p className="text-xs text-gray-400">No currencies added yet</p>}
                          {currencies.map(c => (
                            <span key={c} className="inline-flex items-center gap-1 px-3 py-1.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-sm font-medium">
                              {c}
                              <button onClick={() => handleRemoveCurrency(c)} disabled={savingCurrency} className="ml-1 text-teal-400 hover:text-red-500 font-bold">✕</button>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <BillGeneration fetchFinanceData={fetchFinanceData} students={students} />
                  <FeeStructureGeneration fetchFinanceData={fetchFinanceData} students={students} />
                </div>
              )}
              {activeTab === 'pending' && <PendingBills pendingTabRows={pendingTabRows} openStudentBillsModal={openStudentBillsModal} openPaymentModal={openPaymentModal} />}
            </>
          )}
        </div>
      </div>

      {studentModal.open && (

        <StudentModal studentModal={studentModal} closeStudentModal={closeStudentModal} openPaymentModal={openPaymentModal} handleDownloadReceipt={handleDownloadReceipt} />
      )}

      {paymentModal.open && (
        <PaymentModal paymentModal={paymentModal} closePaymentModal={closePaymentModal} handleSubmitPayment={handleSubmitPayment} setPaymentModal={setPaymentModal} />
      )}

      {/* Hidden container used for HTML-to-PDF rendering */}
      <div style={{ position: 'fixed', left: '-9999px', top: 0, zIndex: -1 }}>
        {pdfContext && (
          <div ref={pdfContainerRef}>
            <BillReceipt bill={pdfContext.bill} student={pdfContext.student} />
          </div>
        )}
      </div>
    </DocumentLayout>
  );
};

export default FinanceDashboard;


