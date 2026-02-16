import { GlassCard } from './GlassCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const riskData = [
  { name: 'Critical', value: 34, color: '#ef4444' },
  { name: 'High', value: 87, color: '#f59e0b' },
  { name: 'Medium', value: 156, color: '#3b82f6' },
  { name: 'Low', value: 210, color: '#10b981' },
];

export function RiskDistribution() {
  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Risk Distribution</h3>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={riskData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {riskData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry: any) => (
                <span className="text-sm text-white/80">
                  {value} ({entry.payload.value})
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {riskData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white/[0.02] rounded-lg border border-white/[0.05]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-white/70">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
