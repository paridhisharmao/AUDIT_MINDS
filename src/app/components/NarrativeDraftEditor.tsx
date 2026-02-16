import { Save, RotateCcw, Send, MessageSquare } from 'lucide-react';

export function NarrativeDraftEditor() {
  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-white/95 tracking-tight">Narrative Draft</h3>
          <span className="px-3 py-1 rounded-lg backdrop-blur-xl bg-white/[0.06] border border-white/10 text-xs text-white/60">
            v1.3
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex items-center gap-2 text-sm text-white/80">
            <Save className="w-4 h-4" />
            Save
          </button>
          <button className="px-4 py-2 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex items-center gap-2 text-sm text-white/80">
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-slate-700 hover:from-indigo-700 hover:via-blue-700 hover:to-slate-800 transition-all duration-300 flex items-center gap-2 text-sm text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02]">
            <Send className="w-4 h-4" />
            Submit for Review
          </button>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="backdrop-blur-xl bg-black/20 rounded-2xl p-8 border border-white/[0.06] min-h-[450px] text-white/85 leading-relaxed">
          <div className="space-y-6">
            <div className="group relative">
              <p className="text-white/95">
                <span className="text-white/60">Subject:</span> Maxwell Enterprises Ltd - Suspicious Cross-Border Wire Transfer Activity
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                This Suspicious Activity Report concerns Maxwell Enterprises Ltd (Account #4892-3847-5612), a business entity registered in Delaware with operations spanning multiple jurisdictions. During the monitoring period from January 1, 2026 to February 15, 2026, the account exhibited transaction patterns that deviate significantly from established baseline behavior and industry norms.
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                <span className="text-white/95">Transaction Pattern Analysis:</span>
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                Five high-value wire transfers totaling $2,024,550 were executed to counterparties located in Switzerland, British Virgin Islands, and Cyprus. These transfers occurred within a compressed 12-day timeframe, representing a 340% increase in monthly transaction volume compared to the account's 12-month historical average.
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                The receiving entities—Zenith Holdings SA, Atlantic Trust Corp, Summit Investments, Meridian Capital Ltd, and Vertex Financial—share common characteristics including offshore registration, limited publicly available corporate information, and classification within high-risk jurisdictions per institutional risk assessment frameworks.
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                <span className="text-white/95">Risk Indicators Identified:</span>
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <ul className="list-disc list-inside space-y-2 text-white/80">
                <li>Rapid succession of large-value cross-border transfers</li>
                <li>Concentration of activity with high-risk jurisdictions</li>
                <li>Lack of apparent business rationale documented in transaction memos</li>
                <li>Counterparty due diligence revealed insufficient beneficial ownership transparency</li>
              </ul>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>

            <div className="group relative">
              <p>
                Based on the above factors, this activity warrants regulatory reporting under applicable suspicious activity reporting requirements. Further investigation is recommended to determine ultimate beneficial ownership and underlying transaction purpose.
              </p>
              <button className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg">
                <MessageSquare className="w-4 h-4 text-white/40" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}