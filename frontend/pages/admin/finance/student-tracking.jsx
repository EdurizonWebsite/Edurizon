import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import DocumentLayout from '@/components/admin/DocumentLayout';
import { baseUrl } from '@/lib/baseUrl';
import { getAdminToken } from '@/utils/adminStorage';
import { useSearch } from '@/context/SearchContext';
import { filterStudents } from '@/utils/studentFilter';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
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

const FinanceStudentTrackingPage = () => {
  const { debouncedSearchQuery } = useSearch();
  const [activeTab, setActiveTab] = useState('bills'); // 'bills' or 'feeStructure'
  const [students, setStudents] = useState([]);
  const [allBills, setAllBills] = useState([]);
  const [pendingBills, setPendingBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfModal, setPdfModal] = useState({
    open: false,
    pdfUrl: null,
    studentName: '',
  });

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

  const authHeaders = () => {
    const token = getAdminToken();
    if (!token) return {};
    const formatted = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    return { Authorization: formatted };
  };

  const fetchFinanceData = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = authHeaders();
      const [studentsRes, billsRes, pendingRes] = await Promise.all([
        axios.get(`${baseUrl}/api/admin/finance/students/all`, { headers }),
        axios.get(`${baseUrl}/api/admin/finance/bills/all`, { headers }),
        axios.get(`${baseUrl}/api/admin/finance/bills/pending`, { headers }),
      ]);

      setStudents(studentsRes.data?.data || []);
      setAllBills(billsRes.data?.data || []);
      setPendingBills(pendingRes.data?.data || []);
    } catch (err) {
      console.error('Failed to load finance student tracking data:', err);
      const message = err?.response?.data?.message || 'Failed to load finance data';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const fetchStudentsWithFeeStructure = async () => {
    setLoading(true);
    setError('');
    try {
      const headers = authHeaders();
      // Fetch all registered students with feeStructure field
      const res = await axios.get(`${baseUrl}/api/registered-students/get-all`, { headers });
      setStudents(res.data || []);
    } catch (err) {
      console.error('Failed to load students with fee structure:', err);
      const message = err?.response?.data?.message || 'Failed to load students';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'bills') {
      fetchFinanceData();
    } else {
      fetchStudentsWithFeeStructure();
    }
  }, [activeTab]);

  const studentFinancialMap = useMemo(() => {
    const map = new Map();
    allBills.forEach((bill) => {
      const key =
        bill?.studentId?._id || bill?.studentId || bill?.student?._id || String(bill?.studentId);
      if (!key) return;

      if (!map.has(key)) {
        map.set(key, {
          totalBilled: 0,
          totalPaid: 0,
          outstanding: 0,
          totalBilledUsd: 0,
          totalPaidUsd: 0,
          outstandingUsd: 0,
          hasOtcBills: false,
          status: 'Pending',
        });
      }

      const entry = map.get(key);
      const isOtcBill = bill.purpose === 'One Time Charge';
      
      if (isOtcBill) {
        entry.hasOtcBills = true;
        entry.totalBilledUsd += bill.amountDue || 0;
        entry.totalPaidUsd += bill.amountPaid || 0;
      } else {
        entry.totalBilled += bill.amountDue || 0;
        entry.totalPaid += bill.amountPaid || 0;
      }
      
      entry.outstanding = Math.max(entry.totalBilled - entry.totalPaid, 0);
      entry.outstandingUsd = Math.max(entry.totalBilledUsd - entry.totalPaidUsd, 0);

      if (bill.status === 'Overdue') {
        entry.status = 'Overdue';
      } else if (bill.status === 'Partial Payment' && entry.status !== 'Overdue') {
        entry.status = 'Partial Payment';
      } else if (
        bill.status === 'Paid' &&
        entry.status !== 'Overdue' &&
        entry.status !== 'Partial Payment'
      ) {
        entry.status = 'Paid';
      } else if (entry.outstanding === 0 && entry.outstandingUsd === 0) {
        entry.status = 'Paid';
      }
    });
    return map;
  }, [allBills]);

  const enrichedStudents = useMemo(() => {
    const mapped = students.map((student) => {
      const summary =
        studentFinancialMap.get(student._id) || {
          totalBilled: 0,
          totalPaid: 0,
          outstanding: 0,
          totalBilledUsd: 0,
          totalPaidUsd: 0,
          outstandingUsd: 0,
          hasOtcBills: false,
          status: 'Pending',
        };
      const overallStatus =
        summary.outstanding <= 0 && summary.outstandingUsd <= 0
          ? 'Paid'
          : summary.status === 'Overdue'
          ? 'Overdue'
          : summary.status === 'Partial Payment'
          ? 'Partial Payment'
          : 'Pending';

      return {
        ...student,
        totalBilled: summary.totalBilled,
        totalPaid: summary.totalPaid,
        outstanding: summary.outstanding,
        totalBilledUsd: summary.totalBilledUsd,
        totalPaidUsd: summary.totalPaidUsd,
        outstandingUsd: summary.outstandingUsd,
        hasOtcBills: summary.hasOtcBills,
        overallStatus,
      };
    });

    // Use global search filter utility
    const filtered = filterStudents(mapped, debouncedSearchQuery);

    // Sort alphabetically by student name
    return filtered.sort((a, b) =>
      (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
    );
  }, [students, studentFinancialMap, debouncedSearchQuery]);

  const filteredFeeStructureStudents = useMemo(() => {
    // Use global search filter utility
    const filtered = filterStudents(students, debouncedSearchQuery);
    return filtered.sort((a, b) =>
      (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
    );
  }, [students, debouncedSearchQuery]);

  const openStudentBillsModal = async (student) => {
    setStudentModal({
      open: true,
      student,
      bills: [],
      loading: true,
    });

    try {
      const headers = authHeaders();
      const res = await axios.get(`${baseUrl}/api/admin/finance/bills/student/${student._id}`, {
        headers,
      });
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
      await axios.patch(
        `${baseUrl}/api/admin/finance/bills/${paymentModal.bill._id}/payment`,
        payload,
        { headers }
      );
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

  const renderStatusBadge = (status) => {
    const colors = {
      Paid: 'bg-green-100 text-green-700',
      Pending: 'bg-yellow-100 text-yellow-700',
      'Partial Payment': 'bg-blue-100 text-blue-700',
      Overdue: 'bg-red-100 text-red-600',
      Cancelled: 'bg-gray-100 text-gray-600',
    };
    const color = colors[status] || 'bg-gray-100 text-gray-600';
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>{status}</span>
    );
  };

  const openPdfModal = (pdfUrl, studentName) => {
    setPdfModal({
      open: true,
      pdfUrl,
      studentName,
    });
  };

  const closePdfModal = () => {
    setPdfModal({
      open: false,
      pdfUrl: null,
      studentName: '',
    });
  };

  const handleDownloadDocument = async (url, docName) => {
    if (!url) {
      console.log('url is not found');
      return;
    }

    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;

      // filename (extract from URL or default)
      link.download = docName || 'document.jpg';

      document.body.appendChild(link);
      link.click();
      link.remove();

      // Cleanup
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed', error);
    }
  };

  /**
   * Delete a finance bill record for the current student.
   * Removes the bill from backend and refreshes both the main list and modal list.
   */
  const handleDeleteBill = async (bill) => {
    if (!bill?._id) {
      toast.error('Bill information is missing');
      return;
    }

    const confirmed = window.confirm(
      'Are you sure you want to delete this bill record? This action cannot be undone.',
    );
    if (!confirmed) return;

    try {
      const headers = authHeaders();
      await axios.delete(`${baseUrl}/api/admin/finance/bills/${bill._id}`, {
        headers,
      });

      toast.success('Bill record deleted successfully');

      // Refresh overall finance data
      await fetchFinanceData();

      // If modal is open for a student, refresh that student's bills as well
      if (studentModal.open && studentModal.student) {
        await openStudentBillsModal(studentModal.student);
      }
    } catch (err) {
      console.error('Failed to delete bill record:', err);
      const message = err?.response?.data?.message || 'Failed to delete bill record';
      toast.error(message);
    }
  };

  const formatDate = (value) =>
    value
      ? new Date(value).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })
      : '—';

  const getLastPaymentDate = (bill) => {
    if (!bill?.paymentRecords || bill.paymentRecords.length === 0) return null;
    const lastRecord = bill.paymentRecords[bill.paymentRecords.length - 1];
    return lastRecord?.date || null;
  };

  return (
    <DocumentLayout navItems={navItems}>
      <div className="min-h-screen bg-[#F5F7FA] px-6 py-8">
        <Toaster position="top-right" />
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-gray-900">Student Finance Tracking</p>
                <p className="text-sm text-gray-500">
                  {activeTab === 'bills' 
                    ? 'View student-wise billing, payments, and outstanding amounts.'
                    : 'View and manage student fee structure documents.'}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab('bills')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'bills'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                View Bills
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('feeStructure')}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'feeStructure'
                    ? 'text-teal-600 border-b-2 border-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                View Fees Structure
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-xl">
              {error}
            </div>
          )}

          {loading ? (
            <div className="bg-white rounded-xl border border-gray-100 p-10 text-center text-gray-500">
              Loading student tracking data...
            </div>
          ) : activeTab === 'bills' ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div>
                  <p className="text-lg font-semibold text-gray-900">Student Tracking</p>
                  <p className="text-sm text-gray-500">
                    Monitor billing status across all registered students
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Showing {enrichedStudents.length} of {students.length} students
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Student', 'Email', 'Total Billed', 'Total Paid', 'Outstanding', 'Status', 'Actions'].map(
                        (header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {enrichedStudents.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-8 text-center text-sm text-gray-500">
                          No students found. Adjust your search or try again later.
                        </td>
                      </tr>
                    )}
                    {enrichedStudents.map((student) => (
                      <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.phone || '—'}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          {student.hasOtcBills ? (
                            <span className="text-gray-600">
                              ₹{student.totalBilled.toLocaleString()} / ${student.totalBilledUsd?.toFixed(2) || '0.00'}
                            </span>
                          ) : (
                            `₹${student.totalBilled.toLocaleString()}`
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-teal-700 font-semibold">
                          {student.hasOtcBills ? (
                            <span className="text-gray-600">
                              ₹{student.totalPaid.toLocaleString()} / ${student.totalPaidUsd?.toFixed(2) || '0.00'}
                            </span>
                          ) : (
                            `₹${student.totalPaid.toLocaleString()}`
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-semibold">
                          {student.hasOtcBills ? (
                            <span className="text-gray-600">
                              ₹{student.outstanding.toLocaleString()} / ${student.outstandingUsd?.toFixed(2) || '0.00'}
                            </span>
                          ) : (
                            `₹${student.outstanding.toLocaleString()}`
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {renderStatusBadge(student.overallStatus)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            type="button"
                            className="text-sm font-medium text-teal-600 hover:text-teal-800"
                            onClick={() => openStudentBillsModal(student)}
                          >
                            View Bills
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div>
                  <p className="text-lg font-semibold text-gray-900">Fee Structure Management</p>
                  <p className="text-sm text-gray-500">
                    View and manage student fee structure documents
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Showing {filteredFeeStructureStudents.length} of {students.length} students
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      {['Student', 'Email', 'Phone', 'Fee Structure', 'Agreed', 'Generated Date', 'Actions'].map(
                        (header) => (
                          <th
                            key={header}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {filteredFeeStructureStudents.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-8 text-center text-sm text-gray-500">
                          No students found. Adjust your search or try again later.
                        </td>
                      </tr>
                    )}
                    {filteredFeeStructureStudents.map((student) => (
                      <tr key={student._id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="font-medium text-gray-900">{student.name}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {student.phone || '—'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.financeInfo.feeStructureLink ? (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                              Available
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              Not Generated
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.financeInfo.feeStructureLink ? (
                            student.financeInfo.feeStructureAgreed ? (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                Agreed
                              </span>
                            ) : (
                              <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                Not Agreed
                              </span>
                            )
                          ) : (
                            <span className="text-sm text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {student.financeInfo.feeStructureGeneratedDate ? (
                            new Date(student.financeInfo.feeStructureGeneratedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.financeInfo.feeStructureLink ? (
                            <div className="flex items-center gap-2">
                              <button
                              type="button"
                              className="text-sm font-medium text-teal-600 hover:text-teal-800"
                              onClick={() => openPdfModal(student.financeInfo.feeStructureLink, student.name)}
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="text-sm font-medium text-teal-600 hover:text-teal-800"
                              onClick={() => handleDownloadDocument(student.financeInfo.feeStructureLink, student.name)}
                            >
                              Download 
                            </button>
                            </div>
                            
                            
                          ) : (
                            <span className="text-sm text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {studentModal.open && (
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
                      {[
                        'Description',
                        'Amount Due',
                        'Amount Paid',
                        'Bill Date',
                        'Last Payment',
                        'Due Date',
                        'Status',
                        'Actions',
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {studentModal.bills.map((bill) => (
                      <tr key={bill._id}>
                        <td className="px-4 py-3 text-sm text-gray-900">{bill.description}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                          {bill.purpose === 'One Time Charge' ? (
                            `$${(bill.amountDue || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          ) : (
                            `₹${(bill.amountDue || 0).toLocaleString()}`
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-teal-700 font-semibold">
                          {bill.purpose === 'One Time Charge' ? (
                            `$${(bill.amountPaid || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                          ) : (
                            `₹${(bill.amountPaid || 0).toLocaleString()}`
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {formatDate(bill.issueDate || bill.createdAt)}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {formatDate(getLastPaymentDate(bill))}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {formatDate(bill.dueDate)}
                        </td>
                        <td className="px-4 py-3">{renderStatusBadge(bill.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              className="text-sm font-medium text-teal-600 hover:text-teal-800"
                              onClick={() => handleDownloadDocument(bill.url, bill.description)}
                            >
                              Download Bill Receipt
                            </button>
                            <button
                              type="button"
                              className="text-sm font-medium text-red-600 hover:text-red-800"
                              onClick={() => handleDeleteBill(bill)}
                            >
                              Delete Bill
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}

      {paymentModal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-lg font-semibold text-gray-900">Record Payment</p>
                <p className="text-sm text-gray-500">
                  {paymentModal.bill?.description || 'Bill reference'}
                </p>
              </div>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={closePaymentModal}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitPayment} className="px-6 py-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Enter payment amount"
                  value={paymentModal.amount}
                  onChange={(e) => setPaymentModal((prev) => ({ ...prev, amount: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Method</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Bank transfer, credit card..."
                  value={paymentModal.method}
                  onChange={(e) => setPaymentModal((prev) => ({ ...prev, method: e.target.value }))}
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={paymentModal.loading}
                  className="inline-flex items-center px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 disabled:opacity-60"
                >
                  {paymentModal.loading ? 'Saving...' : 'Record Payment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      {pdfModal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-6xl  max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  Fee Structure - {pdfModal.studentName}
                </p>
                <p className="text-sm text-gray-500">PDF Document</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-600 hover:text-teal-800"
                >
                  Open in New Tab
                </a>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600"
                  onClick={closePdfModal}
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="px-6 py-4 overflow-hidden h-[calc(90vh-80px)]">
            <img
                  src={pdfModal.pdfUrl}
                  alt="Fee Structure"
                  className="max-w-full max-h-full object-contain"
                />
            </div>
          </div>
        </div>
      )}
    </DocumentLayout>
  );
};

export default FinanceStudentTrackingPage;



