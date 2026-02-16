import { 
  Users, 
  Shield, 
  Database, 
  Settings, 
  FileText, 
  Lock, 
  Activity, 
  Plug,
  Search,
  Bell,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Circle,
  Plus,
  RotateCw,
  Eye,
  Download,
  Calendar,
  Archive
} from "lucide-react";

interface TopNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TopNavBar({ activeTab, setActiveTab }: TopNavBarProps) {
  const tabs = [
    "User Management",
    "Roles & Permissions",
    "Data Sources",
    "Audit Controls",
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-2xl bg-black/30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600" />
            <span className="font-semibold text-white">RegScribe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">System Administration</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 w-64 backdrop-blur-xl"
            />
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Prod</span>
          </div>

          <button className="relative p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-gray-300" />
            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500" />
          </button>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600" />
            <span className="text-white text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>

      <div className="flex gap-6 px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "text-white"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
