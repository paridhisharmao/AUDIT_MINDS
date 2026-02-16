import { Activity, AlertCircle, Archive, CheckCircle2, Clock } from "lucide-react";

export function SystemHealthBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 backdrop-blur-2xl bg-black/30">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-400 text-sm">Uptime:</span>
            <span className="text-white text-sm font-medium">99.97%</span>
          </div>

          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-400 text-sm">Error Rate:</span>
            <span className="text-white text-sm font-medium">0.02%</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Queue Load:</span>
            <span className="text-white text-sm font-medium">12%</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Primary Mode</span>
          </div>

          <div className="flex items-center gap-2">
            <Archive className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400 text-sm">Backup:</span>
            <span className="text-white text-sm font-medium">Active</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-400 text-sm">All Systems Operational</span>
        </div>
      </div>
    </div>
  );
}
