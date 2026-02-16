import { AlertTriangle } from 'lucide-react';

export function CaseOverviewPanel() {
  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500">
      <h3 className="text-white/95 mb-6 tracking-tight">Case Overview</h3>
      
      <div className="space-y-6">
        {/* Customer Name & Risk Badge */}
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Customer Name</div>
            <div className="text-white/90">Maxwell Enterprises Ltd</div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-red-500/15 to-orange-500/15 border border-red-400/30 shadow-lg shadow-red-500/20">
            <AlertTriangle className="w-4 h-4 text-red-300" />
            <span className="text-xs text-red-200">High Risk</span>
          </div>
        </div>

        {/* Risk Score */}
        <div>
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Risk Score</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-xl border border-white/10">
              <div className="h-full w-[82%] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"></div>
            </div>
            <span className="text-sm text-white/80">8.2/10</span>
          </div>
        </div>

        {/* Alert Reason */}
        <div>
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Alert Reason</div>
          <div className="text-white/80 text-sm leading-relaxed">
            Unusual cross-border transaction pattern with high-risk jurisdictions
          </div>
        </div>

        {/* Monitoring Period & Regions */}
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Monitoring Window</div>
            <div className="text-white/80 text-sm">Jan 1 - Feb 15, 2026</div>
          </div>
          <div>
            <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Regions</div>
            <div className="text-white/80 text-sm">US, CH, CY, BVI</div>
          </div>
        </div>

        {/* Source Tags */}
        <div>
          <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Data Sources</div>
          <div className="flex flex-wrap gap-2">
            {['KYC', 'Transactions', 'Alerts', 'Risk Scoring'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg backdrop-blur-xl bg-white/[0.06] border border-white/10 text-xs text-white/70 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
