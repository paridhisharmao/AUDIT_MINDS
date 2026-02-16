import { Download, Calendar, Archive, Lock, CheckCircle2 } from "lucide-react";

export function AuditExportPanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Audit Export & Retention</h2>
        <p className="text-gray-400 text-sm mt-1">Configure audit logging and data retention policies</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Download className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Export Controls</h3>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Export Audit Logs
              </button>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Schedule Export</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
                  <option>Daily at 2:00 AM</option>
                  <option>Weekly on Sunday</option>
                  <option>Monthly</option>
                  <option>Manual Only</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Retention Period</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
                  <option>90 Days</option>
                  <option>180 Days</option>
                  <option>365 Days</option>
                  <option>7 Years</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-gray-400 text-sm">Archive Old Logs</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Audit Status</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Last Export</span>
                  <span className="text-white text-sm font-medium">2026-02-15 02:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Records Covered</span>
                  <span className="text-white text-sm font-medium">2,847,192</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Storage Used</span>
                  <span className="text-white text-sm font-medium">847 GB</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <div className="flex-1">
                  <div className="text-emerald-400 text-sm font-medium">Integrity Check Passed</div>
                  <div className="text-emerald-400/70 text-xs">Verified 30m ago</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Lock className="w-5 h-5 text-purple-400" />
                <div className="flex-1">
                  <div className="text-purple-300 text-sm font-medium">Encryption Active</div>
                  <div className="text-purple-300/70 text-xs">AES-256 Applied</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
