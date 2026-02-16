import { Settings, FileText, Shield, RotateCcw } from "lucide-react";

export function ModelPolicyPanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Model & Prompt Policy</h2>
        <p className="text-gray-400 text-sm mt-1">Configure AI model settings and content policies</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Template Configuration</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Narrative Template Version</label>
                <div className="flex gap-2">
                  <select className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
                    <option>v2.4.1 (Current)</option>
                    <option>v2.4.0</option>
                    <option>v2.3.2</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Policy Rule Set Version</label>
                <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50">
                  <option>v1.8.3 (Current)</option>
                  <option>v1.8.2</option>
                  <option>v1.8.1</option>
                </select>
              </div>

              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Bias Guard</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Topic Restriction</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white">Policy Status</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Active Policies</span>
                  <span className="text-white text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Last Updated</span>
                  <span className="text-white text-sm font-medium">2026-02-10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Compliance Level</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    Compliant
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                  Update Template
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                  View Policy Rules
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Rollback Version
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
