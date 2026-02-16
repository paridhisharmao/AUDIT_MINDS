import { Shield, Edit } from "lucide-react";
import { roles } from "../data/mockData";

export function RolesPermissionsPanel() {
  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <h2 className="font-semibold text-white text-lg">Roles & Permissions</h2>
        <p className="text-gray-400 text-sm mt-1">Configure role-based access control</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div
              key={role.name}
              className="rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-white">{role.name}</h3>
                </div>
                <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Edit className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Access Level</span>
                  <span className="text-white text-sm font-medium">{role.accessLevel}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Data Scope</span>
                  <span className="text-white text-sm font-medium">{role.dataScope}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Edit Rights</span>
                  <span className="text-white text-sm font-medium">{role.editRights}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Approval Rights</span>
                  <span className="text-white text-sm font-medium">{role.approvalRights}</span>
                </div>
              </div>

              <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 font-medium hover:from-purple-500/20 hover:to-blue-500/20 transition-all">
                Edit Role
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
