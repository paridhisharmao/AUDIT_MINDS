import { TopNavBar } from './components/TopNavBar';
import { LeftSidebar } from './components/LeftSidebar';
import { CaseOverviewPanel } from './components/CaseOverviewPanel';
import { TransactionSnapshotPanel } from './components/TransactionSnapshotPanel';
import { DraftControlPanel } from './components/DraftControlPanel';
import { NarrativeDraftEditor } from './components/NarrativeDraftEditor';
import { EvidencePanel } from './components/EvidencePanel';
import { AuditPreviewPanel } from './components/AuditPreviewPanel';
import { AlertNotice } from './components/AlertNotice';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-['Inter',sans-serif]">
      {/* Deep Layered Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-950 to-violet-950"></div>
      
      {/* Radial Gradient Lighting - Top Left */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent blur-3xl"></div>
      
      {/* Radial Gradient Lighting - Bottom Right */}
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-blue-600/15 via-transparent to-transparent blur-3xl"></div>
      
      {/* Radial Gradient Lighting - Center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-indigo-600/10 via-transparent to-transparent blur-3xl"></div>
      
      {/* Grain Texture Overlay */}
      <div className="grain-texture fixed inset-0 pointer-events-none z-[100]"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Navigation Bar */}
        <TopNavBar />

        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content Area */}
        <main className="ml-[320px] pt-28 pr-12 pb-12 pl-8 max-w-[1900px]">
          <div className="space-y-6">
            {/* Row 1: Case Overview + Transaction Snapshot */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5">
                <CaseOverviewPanel />
              </div>
              <div className="col-span-7">
                <TransactionSnapshotPanel />
              </div>
            </div>

            {/* Row 2: Draft Control + Alert Notice */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-5">
                <DraftControlPanel />
              </div>
              <div className="col-span-7">
                <AlertNotice type="retry" />
              </div>
            </div>

            {/* Row 3: Narrative Draft Editor (Full Width) */}
            <NarrativeDraftEditor />

            {/* Row 4: Evidence Panel */}
            <EvidencePanel />

            {/* Row 5: Audit Preview Strip */}
            <AuditPreviewPanel />
          </div>
        </main>
      </div>
    </div>
  );
}