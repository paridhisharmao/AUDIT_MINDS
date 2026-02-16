import { FileText, List, Edit3, FolderOpen, History, Send } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'transactions', label: 'Transactions', icon: List },
  { id: 'draft', label: 'Draft', icon: Edit3 },
  { id: 'evidence', label: 'Evidence', icon: FolderOpen },
  { id: 'audit', label: 'Audit', icon: History },
  { id: 'submit', label: 'Submit', icon: Send },
];

export function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('overview');

  return (
    <div className="fixed left-8 top-28 bottom-8 w-[280px] z-40">
      {/* Floating Glass Rail */}
      <div className="h-full backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-5 shadow-2xl">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`group relative flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500/20 via-blue-600/20 to-slate-600/20 border border-indigo-400/30 text-white shadow-lg shadow-indigo-500/20'
                    : 'text-white/60 hover:bg-white/[0.06] hover:text-white/90 border border-transparent hover:border-white/10'
                }`}
              >
                {/* Glow effect on hover */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-blue-600/0 to-slate-600/0 group-hover:from-indigo-500/10 group-hover:via-blue-600/10 group-hover:to-slate-600/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                )}
                
                <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`} />
                <span className="text-sm relative z-10">{item.label}</span>
                
                {/* Active indicator line */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-indigo-500 via-blue-600 to-slate-600 rounded-r-full"></div>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}