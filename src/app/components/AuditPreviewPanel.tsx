import { Lock, ExternalLink } from 'lucide-react';

export function AuditPreviewPanel() {
  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white/95 tracking-tight">Audit Trace</h3>
        <div className="p-2 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10">
          <Lock className="w-4 h-4 text-white/60" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Prompt Reference</div>
          <div className="text-sm text-white/80 font-mono">PR-89F3A2C7</div>
        </div>

        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Model Version</div>
          <div className="text-sm text-white/80">RegScribe v3.2.1</div>
        </div>

        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Data Sources</div>
          <div className="text-sm text-white/80">12 sources</div>
        </div>

        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
          <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">Generated</div>
          <div className="text-sm text-white/80">Feb 15, 14:28</div>
        </div>
      </div>

      <button className="mt-5 w-full py-3 px-4 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white/80 group">
        <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
        View Full Audit Log
      </button>
    </div>
  );
}