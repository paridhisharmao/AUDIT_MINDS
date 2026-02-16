import { LayoutDashboard, GitBranch, Shield, Users, CheckCircle, FileText, Activity } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useState } from 'react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Operations Overview', active: true },
  { icon: GitBranch, label: 'Case Pipeline', active: false },
  { icon: Shield, label: 'Risk Analytics', active: false },
  { icon: Users, label: 'Analyst Performance', active: false },
  { icon: CheckCircle, label: 'Approvals', active: false },
  { icon: FileText, label: 'Audit Exports', active: false },
  { icon: Activity, label: 'System Health', active: false },
];

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <GlassCard className="fixed left-6 top-24 bottom-6 w-64 p-4 flex flex-col gap-2">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = index === activeIndex;
        
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left
              ${isActive 
                ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/40 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
                : 'text-white/60 hover:text-white/90 hover:bg-white/[0.05]'
              }
            `}
          >
            <Icon size={20} className={isActive ? 'text-purple-400' : ''} />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        );
      })}
    </GlassCard>
  );
}
