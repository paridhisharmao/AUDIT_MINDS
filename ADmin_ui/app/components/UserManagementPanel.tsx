import { CheckCircle2, AlertTriangle, Circle, Plus, RotateCw, Eye } from "lucide-react";
import { users } from "../data/mockData";
import { useState } from "react";

export function UserManagementPanel() {
  const [userList, setUserList] = useState(users);

  const toggleUserStatus = (id: number) => {
    setUserList(userList.map(user => 
      user.id === id 
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" }
        : user
    ));
  };

  return (
    <div className="rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-white text-lg">User & Access Management</h2>
            <p className="text-gray-400 text-sm mt-1">Manage user accounts and access controls</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Last Login
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Access Scope
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                MFA
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Controls
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {userList.map((user) => (
              <tr key={user.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-300 font-medium text-sm">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-white font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${user.status === "Active" ? "bg-emerald-400" : "bg-gray-500"}`} />
                    <span className={`text-sm font-medium ${user.status === "Active" ? "text-emerald-400" : "text-gray-500"}`}>
                      {user.status}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300 text-sm">{user.lastLogin}</td>
                <td className="px-6 py-4 text-gray-300 text-sm">{user.accessScope}</td>
                <td className="px-6 py-4">
                  {user.mfaEnabled ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-600" />
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors"
                    >
                      {user.status === "Active" ? "Disable" : "Enable"}
                    </button>
                    <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors">
                      Reset
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
