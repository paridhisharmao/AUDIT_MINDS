import { Plug, CheckCircle2, Activity } from "lucide-react";
import { integrations } from "../data/mockData";

export function IntegrationStatusPanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Integration Status</h2>
        <p className="text-gray-400 text-sm mt-1">Monitor connected services and API health</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Plug className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{integration.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-sm font-medium">
                        {integration.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Latency</span>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-white text-sm font-medium">
                      {integration.latency}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Last Check</span>
                  <span className="text-white text-sm font-medium">
                    {integration.lastCheck}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
                    style={{ width: "98%" }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400 text-xs">Uptime</span>
                  <span className="text-gray-300 text-xs font-medium">99.8%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
