import { useState } from "react";
import { TopNavBar } from "./components/TopNavBar";
import { Sidebar } from "./components/Sidebar";
import { UserManagementPanel } from "./components/UserManagementPanel";
import { RolesPermissionsPanel } from "./components/RolesPermissionsPanel";
import { DataSourcePanel } from "./components/DataSourcePanel";
import { AuditExportPanel } from "./components/AuditExportPanel";
import { SecurityControlsPanel } from "./components/SecurityControlsPanel";
import { ModelPolicyPanel } from "./components/ModelPolicyPanel";
import { IntegrationStatusPanel } from "./components/IntegrationStatusPanel";
import { SystemHealthBar } from "./components/SystemHealthBar";

export default function App() {
  const [activeTab, setActiveTab] = useState("User Management");
  const [activeSection, setActiveSection] = useState("users");

  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return (
          <div className="space-y-6">
            <UserManagementPanel />
          </div>
        );
      case "roles":
        return (
          <div className="space-y-6">
            <RolesPermissionsPanel />
          </div>
        );
      case "sources":
        return (
          <div className="space-y-6">
            <DataSourcePanel />
          </div>
        );
      case "model":
        return (
          <div className="space-y-6">
            <ModelPolicyPanel />
          </div>
        );
      case "audit":
        return (
          <div className="space-y-6">
            <AuditExportPanel />
          </div>
        );
      case "security":
        return (
          <div className="space-y-6">
            <SecurityControlsPanel />
          </div>
        );
      case "health":
        return (
          <div className="grid grid-cols-1 gap-6">
            <IntegrationStatusPanel />
          </div>
        );
      case "integrations":
        return (
          <div className="space-y-6">
            <IntegrationStatusPanel />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <UserManagementPanel />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Deep Layered Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-950 to-black" />
      
      {/* Radial Corner Lighting */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] opacity-30" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-30" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] opacity-25" />
      
      {/* Grain Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Top Navigation */}
      <TopNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="relative pt-32 pb-24 pl-80 pr-6">
        <div className="max-w-[1600px] mx-auto">
          {renderContent()}
        </div>
      </div>

      {/* System Health Bar */}
      <SystemHealthBar />
    </div>
  );
}
