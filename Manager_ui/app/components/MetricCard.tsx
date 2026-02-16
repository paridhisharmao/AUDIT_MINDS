import { TrendingUp, TrendingDown } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: number;
  sparklineData?: number[];
  highlight?: boolean;
}

export function MetricCard({ title, value, trend, sparklineData, highlight }: MetricCardProps) {
  const isPositiveTrend = trend && trend > 0;
  const chartData = sparklineData?.map((value) => ({ value })) || [];

  return (
    <GlassCard hover className="p-6 relative overflow-hidden">
      {highlight && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-magenta-500"></div>
      )}
      
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <span className="text-sm text-white/60">{title}</span>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 ${isPositiveTrend ? 'text-emerald-400' : 'text-red-400'}`}>
              {isPositiveTrend ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              <span className="text-xs font-medium">{Math.abs(trend)}%</span>
            </div>
          )}
        </div>

        <div className="text-3xl font-semibold text-white tracking-tight">
          {value}
        </div>

        {sparklineData && sparklineData.length > 0 && (
          <div className="h-12 -mx-2 -mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <defs>
                  <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={`url(#gradient-${title})`}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </GlassCard>
  );
}
