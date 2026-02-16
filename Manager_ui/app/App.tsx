import { TopNavigation } from './components/TopNavigation';
import { Sidebar } from './components/Sidebar';
import { MetricCard } from './components/MetricCard';
import { CasePipeline } from './components/CasePipeline';
import { RiskDistribution } from './components/RiskDistribution';
import { AnalystWorkload } from './components/AnalystWorkload';
import { ApprovalSLA } from './components/ApprovalSLA';
import { RecentDecisions } from './components/RecentDecisions';
import { AuditExports } from './components/AuditExports';
import { SystemHealth } from './components/SystemHealth';

// Mock sparkline data for metric cards
const generateSparklineData = () => {
  return Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 50);
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-violet-950 relative overflow-hidden font-['Inter']">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Radial gradients in corners */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/15 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-violet-600/15 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-indigo-600/20 via-transparent to-transparent blur-3xl"></div>
        
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <TopNavigation />
        <Sidebar />
        
        {/* Main dashboard area */}
        <main className="ml-80 mt-20 mb-16 mr-6 p-6 space-y-6">
          {/* Global metrics row */}
          <div className="grid grid-cols-4 gap-6">
            <MetricCard 
              title="Total Active Cases" 
              value={487}
              trend={12}
              sparklineData={generateSparklineData()}
              highlight
            />
            <MetricCard 
              title="Pending Reviews" 
              value={198}
              trend={-8}
              sparklineData={generateSparklineData()}
              highlight
            />
            <MetricCard 
              title="High Risk Cases" 
              value={121}
              trend={5}
              sparklineData={generateSparklineData()}
              highlight
            />
            <MetricCard 
              title="Avg Approval Time" 
              value="4.2h"
              trend={-15}
              sparklineData={generateSparklineData()}
              highlight
            />
          </div>

          {/* Pipeline and Risk Distribution */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <CasePipeline />
            </div>
            <RiskDistribution />
          </div>

          {/* Analyst workload - full width */}
          <AnalystWorkload />

          {/* Bottom row - three columns */}
          <div className="grid grid-cols-3 gap-6">
            <ApprovalSLA />
            <RecentDecisions />
            <AuditExports />
          </div>
        </main>

        <SystemHealth />
      </div>
    </div>
  );
}
