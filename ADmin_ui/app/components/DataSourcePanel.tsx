import { Database, CheckCircle2, AlertTriangle, RotateCw, Eye } from "lucide-react";
import { dataSources } from "../data/mockData";

export function DataSourcePanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Data Source Configuration</h2>
        <p className="text-gray-400 text-sm mt-1">Manage connected data sources and sync status</p>
      </div>

      <div className="p-6 space-y-4">
        {dataSources.map((source) => (
          <div
            key={source.id}
            className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-white">{source.name}</h3>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                      {source.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      {source.status === "Connected" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      )}
                      <span
                        className={`font-medium ${
                          source.status === "Connected"
                            ? "text-emerald-400"
                            : "text-amber-400"
                        }`}
                      >
                        {source.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Last Sync:</span>
                      <span className="text-gray-300">{source.lastSync}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          source.health === "Healthy"
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          source.health === "Healthy"
                            ? "text-emerald-400"
                            : "text-amber-400"
                        }`}
                      >
                        {source.health}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  Test Connection
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  <RotateCw className="w-4 h-4" />
                  Re-sync
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  View Schema
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
