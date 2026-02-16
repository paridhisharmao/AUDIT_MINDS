import {
  Users,
  Shield,
  Database,
  Settings,
  FileText,
  Lock,
  Activity,
  Plug,
} from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const sections = [
    { id: "users", label: "User Management", icon: Users },
    { id: "roles", label: "Roles & Permissions", icon: Shield },
    { id: "sources", label: "Data Sources", icon: Database },
    { id: "model", label: "Model Settings", icon: Settings },
    { id: "audit", label: "Audit Controls", icon: FileText },
    { id: "security", label: "Security Policies", icon: Lock },
    { id: "health", label: "System Health", icon: Activity },
    { id: "integrations", label: "Integrations", icon: Plug },
  ];

  return (
    <div className="fixed left-0 top-24 bottom-20 w-64 z-40">
      <div className="h-full m-6 rounded-2xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
        <div className="p-4 space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/20"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-purple-400" : "text-gray-400"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-white" : "text-gray-300"
                  }`}
                >
                  {section.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
