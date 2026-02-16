import { GlassCard } from './GlassCard';

interface Decision {
  caseId: string;
  decision: string;
  reviewer: string;
  timestamp: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
}

const decisions: Decision[] = [
  { caseId: 'SAR-2026-1847', decision: 'Approved for Filing', reviewer: 'James Wilson', timestamp: '12 min ago', riskLevel: 'High' },
  { caseId: 'SAR-2026-1846', decision: 'Rejected - Insufficient Evidence', reviewer: 'Maria Garcia', timestamp: '24 min ago', riskLevel: 'Medium' },
  { caseId: 'SAR-2026-1845', decision: 'Approved for Filing', reviewer: 'James Wilson', timestamp: '1 hour ago', riskLevel: 'Critical' },
  { caseId: 'SAR-2026-1844', decision: 'Returned for Revision', reviewer: 'Sarah Chen', timestamp: '2 hours ago', riskLevel: 'High' },
  { caseId: 'SAR-2026-1843', decision: 'Approved for Filing', reviewer: 'Maria Garcia', timestamp: '3 hours ago', riskLevel: 'Medium' },
  { caseId: 'SAR-2026-1842', decision: 'Approved for Filing', reviewer: 'James Wilson', timestamp: '4 hours ago', riskLevel: 'Low' },
];

export function RecentDecisions() {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Low': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default: return 'bg-white/10 text-white/60 border-white/20';
    }
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Recent Decisions</h3>
      
      <div className="space-y-1 max-h-[400px] overflow-y-auto scrollbar-thin">
        {decisions.map((decision, index) => (
          <div 
            key={index}
            className="p-4 hover:bg-white/[0.03] rounded-lg transition-colors border-b border-white/[0.05] last:border-0"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-sm font-medium text-white/90 font-mono">{decision.caseId}</span>
                <p className="text-xs text-white/60 mt-1">{decision.decision}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-md border font-medium ${getRiskColor(decision.riskLevel)}`}>
                {decision.riskLevel}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>{decision.reviewer}</span>
              <span>{decision.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
