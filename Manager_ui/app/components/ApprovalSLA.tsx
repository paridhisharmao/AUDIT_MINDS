import { GlassCard } from './GlassCard';
import { Clock, AlertTriangle } from 'lucide-react';

export function ApprovalSLA() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Approval SLA</h3>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60">Avg Review Time</span>
            <span className="text-2xl font-semibold text-white">4.2h</span>
          </div>
          <div className="relative h-2 bg-white/[0.05] rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
          </div>
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Target: 6h</span>
            <span>65% within SLA</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-xs text-white/60">SLA Breaches</span>
            </div>
            <span className="text-2xl font-semibold text-red-400">23</span>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-amber-400" />
              <span className="text-xs text-white/60">Near Deadline</span>
            </div>
            <span className="text-2xl font-semibold text-amber-400">47</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs text-white/50 mb-3">Cases by Time in Review</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">{'< 2 hours'}</span>
              <span className="text-white/90 font-medium">156 cases</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">2-4 hours</span>
              <span className="text-white/90 font-medium">89 cases</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">4-6 hours</span>
              <span className="text-white/90 font-medium">42 cases</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-red-400">{`> 6 hours`}</span>
              <span className="text-red-400 font-medium">23 cases</span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
