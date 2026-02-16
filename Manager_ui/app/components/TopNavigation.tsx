import { Search, Calendar, Download, Bell, ChevronDown } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function TopNavigation() {
  return (
    <GlassCard className="fixed top-0 left-0 right-0 z-50 rounded-none border-t-0 border-l-0 border-r-0 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-xl font-semibold text-white tracking-tight">RegScribe</h1>
            <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-magenta-500 rounded-full mt-1"></div>
          </div>
          <span className="text-sm text-white/60">Compliance Operations</span>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              placeholder="Search cases, analysts, or alerts..."
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] border border-white/[0.08] rounded-lg text-sm text-white/80 hover:bg-white/[0.08] transition-all">
            <Calendar size={16} />
            <span>Last 30 Days</span>
            <ChevronDown size={14} />
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] border border-white/[0.08] rounded-lg text-sm text-white/80 hover:bg-white/[0.08] transition-all">
            <span>All Regions</span>
            <ChevronDown size={14} />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg text-sm text-white hover:from-purple-600/30 hover:to-blue-600/30 transition-all">
            <Download size={16} />
            <span>Export</span>
          </button>

          <button className="relative p-2 bg-white/[0.05] border border-white/[0.08] rounded-lg hover:bg-white/[0.08] transition-all">
            <Bell size={18} className="text-white/80" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-magenta-500 rounded-full"></span>
          </button>

          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-magenta-500 flex items-center justify-center text-sm font-medium text-white">
            AM
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
