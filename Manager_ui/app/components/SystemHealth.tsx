import { GlassCard } from './GlassCard';
import { CheckCircle, AlertCircle, Activity } from 'lucide-react';

interface SystemStatus {
  label: string;
  status: 'operational' | 'warning' | 'degraded';
  value: string;
}

const systemMetrics: SystemStatus[] = [
  { label: 'Service Uptime', status: 'operational', value: '99.98%' },
  { label: 'Processing Queue', status: 'operational', value: '23 jobs' },
  { label: 'Model Service', status: 'operational', value: 'Online' },
  { label: 'Data Sync', status: 'operational', value: '2 min ago' },
  { label: 'Fallback Mode', status: 'operational', value: 'Inactive' },
];

export function SystemHealth() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle size={14} className="text-emerald-400" />;
      case 'warning':
        return <AlertCircle size={14} className="text-amber-400" />;
      case 'degraded':
        return <Activity size={14} className="text-red-400" />;
      default:
        return <CheckCircle size={14} className="text-white/40" />;
    }
  };

  return (
    <GlassCard className="fixed bottom-0 left-0 right-0 rounded-none border-b-0 border-l-0 border-r-0 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-emerald-400" />
          <span className="text-sm font-medium text-white/80">System Health</span>
        </div>

        <div className="flex items-center gap-8">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="flex items-center gap-2">
              {getStatusIcon(metric.status)}
              <span className="text-xs text-white/60">{metric.label}:</span>
              <span className="text-xs text-white/90 font-medium">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-white/60">All Systems Operational</span>
        </div>
      </div>
    </GlassCard>
  );
}
