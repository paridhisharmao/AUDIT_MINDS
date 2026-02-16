import { GlassCard } from './GlassCard';

interface Analyst {
  name: string;
  activeCases: number;
  draftsPending: number;
  reviewsPending: number;
  avgDraftTime: string;
  qualityScore: number;
  status: 'Balanced' | 'High' | 'Critical';
}

const analysts: Analyst[] = [
  { name: 'Sarah Chen', activeCases: 23, draftsPending: 7, reviewsPending: 4, avgDraftTime: '2.3h', qualityScore: 94, status: 'Balanced' },
  { name: 'Michael Rodriguez', activeCases: 31, draftsPending: 12, reviewsPending: 8, avgDraftTime: '3.1h', qualityScore: 89, status: 'High' },
  { name: 'Emma Johnson', activeCases: 19, draftsPending: 5, reviewsPending: 3, avgDraftTime: '2.1h', qualityScore: 96, status: 'Balanced' },
  { name: 'David Kim', activeCases: 28, draftsPending: 9, reviewsPending: 6, avgDraftTime: '2.7h', qualityScore: 91, status: 'Balanced' },
  { name: 'Lisa Patel', activeCases: 42, draftsPending: 18, reviewsPending: 11, avgDraftTime: '4.2h', qualityScore: 82, status: 'Critical' },
];

export function AnalystWorkload() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Balanced': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'High': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Analyst Workload</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left text-xs text-white/50 font-medium pb-3 pr-4">Analyst Name</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 px-4">Active Cases</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 px-4">Drafts Pending</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 px-4">Reviews Pending</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 px-4">Avg Draft Time</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 px-4">Quality Score</th>
              <th className="text-right text-xs text-white/50 font-medium pb-3 pl-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {analysts.map((analyst, index) => (
              <tr 
                key={index} 
                className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors"
              >
                <td className="py-4 pr-4">
                  <span className="text-sm text-white/90">{analyst.name}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-medium text-white">{analyst.activeCases}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-medium text-white">{analyst.draftsPending}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-medium text-white">{analyst.reviewsPending}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm text-white/70">{analyst.avgDraftTime}</span>
                </td>
                <td className="text-right py-4 px-4">
                  <span className="text-sm font-medium text-white">{analyst.qualityScore}%</span>
                </td>
                <td className="text-right py-4 pl-4">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-md border ${getStatusColor(analyst.status)}`}>
                    {analyst.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
