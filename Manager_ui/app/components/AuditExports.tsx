import { GlassCard } from './GlassCard';
import { FileText, Download, Lock } from 'lucide-react';

export function AuditExports() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Audit & Exports</h3>
        <Lock size={16} className="text-purple-400" />
      </div>
      
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <FileText size={18} className="text-purple-400" />
            </div>
            <span className="text-sm text-white/90">Export Audit Logs</span>
          </div>
          <Download size={16} className="text-white/50 group-hover:text-purple-400 transition-colors" />
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <FileText size={18} className="text-blue-400" />
            </div>
            <span className="text-sm text-white/90">Generate Compliance Report</span>
          </div>
          <Download size={16} className="text-white/50 group-hover:text-blue-400 transition-colors" />
        </button>

        <button className="w-full flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] rounded-xl transition-all group">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-magenta-500/20 rounded-lg">
              <FileText size={18} className="text-magenta-400" />
            </div>
            <span className="text-sm text-white/90">Download Filing Summary</span>
          </div>
          <Download size={16} className="text-white/50 group-hover:text-magenta-400 transition-colors" />
        </button>
      </div>

      <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/50">Last Export</span>
          <span className="text-white/70">Feb 16, 2026 09:23 AM</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-white/50">Data Coverage</span>
          <span className="text-white/70">Jan 1 - Feb 16, 2026</span>
        </div>
      </div>
    </GlassCard>
  );
}
