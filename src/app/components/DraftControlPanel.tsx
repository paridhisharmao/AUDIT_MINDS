import { Sparkles, CheckCircle2, Save, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export function DraftControlPanel() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsProcessing(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500">
      <h3 className="text-white/95 mb-6 tracking-tight">Draft Control</h3>
      
      <div className="space-y-5">
        {/* Primary Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isProcessing}
          className="group relative w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-slate-700 hover:from-indigo-700 hover:via-blue-700 hover:to-slate-800 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] disabled:hover:scale-100 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="relative z-10">Processing...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Generate Draft</span>
            </>
          )}
        </button>

        {/* Progress Bar */}
        {isProcessing && (
          <div className="relative h-2 bg-white/[0.08] rounded-full overflow-hidden backdrop-blur-xl border border-white/10">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-600 via-blue-600 to-slate-700 transition-all duration-200 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 px-4 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white/80">
            <Save className="w-4 h-4" />
            Save Draft
          </button>
          <button className="py-3 px-4 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white/80">
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
            <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Model Version</div>
            <div className="text-sm text-white/80">RegScribe v3.2.1</div>
          </div>
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
            <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Templates</div>
            <div className="text-sm text-white/80">4 loaded</div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30 shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="w-5 h-5 text-emerald-300" />
          <span className="text-sm text-emerald-200">Ready</span>
        </div>
      </div>
    </div>
  );
}