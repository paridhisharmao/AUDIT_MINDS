import { ChevronDown, User } from 'lucide-react';

export function TopNavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-20">
      {/* Glass Nav Bar */}
      <div className="h-full backdrop-blur-2xl bg-white/[0.03] border-b border-white/[0.08] shadow-2xl">
        <div className="h-full flex items-center justify-between max-w-full mx-auto px-8">
          {/* Left: Brand and Case Selector */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              {/* RegScribe Logo/Brand */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-slate-700 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="text-white text-xl font-semibold">R</span>
                </div>
                <div>
                  <h1 className="text-xl text-white/95 tracking-tight font-medium">RegScribe</h1>
                  <div className="text-xs text-white/40">SAR Workspace</div>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 ml-2"></div>
            </div>
            
            <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 shadow-lg">
              <span className="text-sm text-white/80">Case #SAR-2026-0847</span>
              <ChevronDown className="w-4 h-4 text-white/60" />
            </button>
          </div>

          {/* Right: Status, Role, Timestamp, Avatar */}
          <div className="flex items-center gap-4">
            {/* Risk Level Badge */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-red-500/15 to-orange-500/15 border border-red-400/30 shadow-lg shadow-red-500/10">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
              <span className="text-sm text-red-200">High Risk</span>
            </div>

            {/* Case Status */}
            <div className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-amber-500/15 to-yellow-500/15 border border-amber-400/30 shadow-lg shadow-amber-500/10">
              <span className="text-sm text-amber-200">Draft</span>
            </div>

            {/* Last Updated */}
            <div className="text-sm text-white/40 font-light">
              Updated: Feb 15, 14:32
            </div>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 via-blue-500/30 to-slate-600/30 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <User className="w-5 h-5 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}