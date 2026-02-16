import { GlassCard } from './GlassCard';

interface PipelineStage {
  label: string;
  count: number;
  percentage: number;
}

const stages: PipelineStage[] = [
  { label: 'Alerts Generated', count: 487, percentage: 100 },
  { label: 'Drafted', count: 324, percentage: 67 },
  { label: 'Under Review', count: 198, percentage: 41 },
  { label: 'Approved', count: 142, percentage: 29 },
  { label: 'Filed', count: 89, percentage: 18 },
];

export function CasePipeline() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Case Pipeline</h3>
      
      <div className="space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80">{stage.label}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/50">{stage.percentage}%</span>
                <span className="text-base font-semibold text-white">{stage.count}</span>
              </div>
            </div>
            <div className="relative h-2 bg-white/[0.05] rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-blue-600 to-magenta-600 rounded-full transition-all duration-500"
                style={{ width: `${stage.percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
