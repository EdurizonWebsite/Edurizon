import React from 'react'

function formatAmount(amount: number, currency: string) {
  const code = currency.toUpperCase();
  const num = Number(amount) || 0;
  if (code === 'INR') {
    return `₹${num.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `${code} ${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

type CurrencyBreakdown = Record<string, { billed: number; paid: number; pending: number }>;

const BreakdownTable = ({ data, emptyLabel }: { data: CurrencyBreakdown; emptyLabel: string }) => {
  const currencies = Object.keys(data);
  if (currencies.length === 0) {
    return <p className="text-sm text-gray-400 mt-3 italic">{emptyLabel}</p>;
  }
  return (
    <table className="w-full mt-3 text-sm">
      <thead>
        <tr>
          <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Currency</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Billed</th>
          <th className="text-right text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Paid</th>
          <th className="text-right text-xs font-medium text-amber-500 uppercase tracking-wider pb-2">Pending</th>
        </tr>
      </thead>
      <tbody>
        {currencies.map((currency) => (
          <tr key={currency} className="border-t border-gray-50">
            <td className="py-2 font-semibold text-gray-700">{currency}</td>
            <td className="py-2 text-right text-gray-900 font-medium">
              {formatAmount(data[currency].billed, currency)}
            </td>
            <td className="py-2 text-right text-teal-700 font-medium">
              {formatAmount(data[currency].paid, currency)}
            </td>
            <td className="py-2 text-right text-amber-600 font-medium">
              {formatAmount(data[currency].pending, currency)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const SummaryCards = ({ summaryStats }: { summaryStats: any }) => {
  const {
    totalStudents = 0,
    otcByCurrency = {},
    processingByCurrency = {},
  } = summaryStats;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Total Students */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Total Students</p>
          <p className="text-4xl font-bold text-gray-900 mt-3">{totalStudents.toLocaleString()}</p>
        </div>
        <p className="text-xs text-gray-400 mt-4">Active finance profiles</p>
      </div>

      {/* OTC Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
          <p className="text-sm font-semibold text-gray-700">One Time Charge (OTC)</p>
        </div>
        <p className="text-xs text-gray-400 mb-1">Billed · Paid · Pending — per currency</p>
        <BreakdownTable data={otcByCurrency} emptyLabel="No OTC bills recorded yet" />
      </div>

      {/* Processing Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
          <p className="text-sm font-semibold text-gray-700">Processing Charge</p>
        </div>
        <p className="text-xs text-gray-400 mb-1">Billed · Paid · Pending — per currency</p>
        <BreakdownTable data={processingByCurrency} emptyLabel="No processing bills recorded yet" />
      </div>
    </div>
  );
};

export default SummaryCards;
