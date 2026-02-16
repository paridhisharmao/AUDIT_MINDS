import { Lock, Shield, Eye, Timer } from "lucide-react";

export function SecurityControlsPanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Security Controls</h2>
        <p className="text-gray-400 text-sm mt-1">Configure system-wide security policies and controls</p>
      </div>

      <div className="p-6 space-y-4">
        <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Encryption</h3>
                <p className="text-gray-400 text-sm">End-to-end data encryption</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-medium">Enabled</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Eye className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Access Logging</h3>
                <p className="text-gray-400 text-sm">Track all user access events</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-medium">Enabled</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Timer className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Session Timeout</h3>
                <p className="text-gray-400 text-sm">Auto-logout inactive sessions</p>
              </div>
            </div>
          </div>
          <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
            <option>15 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
          </select>
        </div>

        <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Data Masking</h3>
                <p className="text-gray-400 text-sm">Mask sensitive PII in displays</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-medium">Enabled</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Cross-Domain Isolation</h3>
                <p className="text-gray-400 text-sm">Prevent cross-domain data access</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 text-sm font-medium">Enabled</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
