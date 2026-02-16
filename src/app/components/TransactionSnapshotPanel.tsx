import { TrendingUp, Users, Globe } from 'lucide-react';

const transactions = [
  { date: 'Feb 12, 2026', amount: '$487,200', counterparty: 'Zenith Holdings SA', country: 'CH', channel: 'Wire' },
  { date: 'Feb 10, 2026', amount: '$315,000', counterparty: 'Atlantic Trust Corp', country: 'BVI', channel: 'Wire' },
  { date: 'Feb 08, 2026', amount: '$228,450', counterparty: 'Summit Investments', country: 'CY', channel: 'Wire' },
  { date: 'Feb 05, 2026', amount: '$592,100', counterparty: 'Meridian Capital Ltd', country: 'CH', channel: 'Wire' },
  { date: 'Feb 03, 2026', amount: '$401,800', counterparty: 'Vertex Financial', country: 'BVI', channel: 'Wire' },
];

export function TransactionSnapshotPanel() {
  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
      <h3 className="text-white/95 mb-6 tracking-tight">Transaction Intelligence</h3>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="relative group overflow-hidden backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent border border-indigo-400/20 rounded-2xl p-5 hover:border-indigo-400/40 transition-all duration-300 shadow-lg shadow-indigo-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-400/30">
                <TrendingUp className="w-4 h-4 text-indigo-300" />
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Total Volume</div>
            </div>
            <div className="text-2xl text-white/95 tracking-tight">$2.02M</div>
          </div>
        </div>

        <div className="relative group overflow-hidden backdrop-blur-xl bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent border border-blue-400/20 rounded-2xl p-5 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/30">
                <Users className="w-4 h-4 text-blue-300" />
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Accounts Linked</div>
            </div>
            <div className="text-2xl text-white/95 tracking-tight">3</div>
          </div>
        </div>

        <div className="relative group overflow-hidden backdrop-blur-xl bg-gradient-to-br from-slate-500/10 via-slate-500/5 to-transparent border border-slate-400/20 rounded-2xl p-5 hover:border-slate-400/40 transition-all duration-300 shadow-lg shadow-slate-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-slate-500/20 border border-slate-400/30">
                <Globe className="w-4 h-4 text-slate-300" />
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">Flagged Transfers</div>
            </div>
            <div className="text-2xl text-white/95 tracking-tight">5</div>
          </div>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] backdrop-blur-xl bg-white/[0.02]">
        <table className="w-full">
          <thead>
            <tr className="bg-white/[0.04] border-b border-white/[0.08]">
              <th className="text-left px-5 py-4 text-xs text-white/50 uppercase tracking-wider">Date</th>
              <th className="text-left px-5 py-4 text-xs text-white/50 uppercase tracking-wider">Amount</th>
              <th className="text-left px-5 py-4 text-xs text-white/50 uppercase tracking-wider">Counterparty</th>
              <th className="text-left px-5 py-4 text-xs text-white/50 uppercase tracking-wider">Country</th>
              <th className="text-left px-5 py-4 text-xs text-white/50 uppercase tracking-wider">Channel</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-b border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-200"
              >
                <td className="px-5 py-4 text-sm text-white/70">{tx.date}</td>
                <td className="px-5 py-4 text-sm text-white/90">{tx.amount}</td>
                <td className="px-5 py-4 text-sm text-white/70">{tx.counterparty}</td>
                <td className="px-5 py-4 text-sm text-white/70">{tx.country}</td>
                <td className="px-5 py-4 text-sm text-white/70">{tx.channel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}