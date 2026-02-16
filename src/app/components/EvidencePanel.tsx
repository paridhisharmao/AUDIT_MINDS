import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function EvidencePanel() {
  const [isExpanded, setIsExpanded] = useState(true);

  const rules = [
    'AML-301: High-risk jurisdiction wire transfer threshold exceeded',
    'AML-405: Rapid transaction velocity anomaly detected',
    'KYC-208: Insufficient beneficial ownership documentation',
  ];

  const indicators = [
    { label: 'Transaction Velocity', value: '+340%', status: 'critical' },
    { label: 'Jurisdiction Risk Score', value: '8.2/10', status: 'high' },
    { label: 'Counterparty Transparency', value: 'Low', status: 'warning' },
  ];

  const sources = [
    'FinCEN Advisory FIN-2019-A003',
    'FATF Guidance on High-Risk Jurisdictions',
    'Internal Risk Assessment Framework v4.1',
  ];

  return (
    <div className="backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-3xl p-7 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between mb-6 group"
      >
        <h3 className="text-white/95 tracking-tight">Evidence & Reasoning</h3>
        <div className="p-2 rounded-xl backdrop-blur-xl bg-white/[0.06] border border-white/10 group-hover:bg-white/[0.1] group-hover:border-white/20 transition-all duration-300">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-white/60" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/60" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="space-y-6">
          {/* Supporting Rules */}
          <div>
            <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Supporting Rules Matched</div>
            <div className="space-y-3">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="px-4 py-3 rounded-xl backdrop-blur-xl bg-white/[0.04] border border-white/10 text-sm text-white/80 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          {/* Key Risk Indicators */}
          <div>
            <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Key Risk Indicators</div>
            <div className="space-y-3">
              {indicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 rounded-xl backdrop-blur-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm text-white/80">{indicator.label}</span>
                  <span
                    className={`text-sm px-3 py-1 rounded-lg backdrop-blur-xl ${
                      indicator.status === 'critical'
                        ? 'bg-red-500/20 border border-red-400/30 text-red-300'
                        : indicator.status === 'high'
                        ? 'bg-orange-500/20 border border-orange-400/30 text-orange-300'
                        : 'bg-yellow-500/20 border border-yellow-400/30 text-yellow-300'
                    }`}
                  >
                    {indicator.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Source References */}
          <div>
            <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Source References</div>
            <div className="flex flex-wrap gap-2">
              {sources.map((source, index) => (
                <span
                  key={index}
                  className="px-3 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 text-xs text-blue-200 hover:border-blue-400/50 transition-all duration-300"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>

          {/* Guideline Tags */}
          <div>
            <div className="text-xs text-white/40 mb-3 uppercase tracking-wider">Supporting Notes</div>
            <div className="flex flex-wrap gap-2">
              {['Cross-Border', 'High-Risk Jurisdiction', 'Structuring', 'Beneficial Ownership'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-indigo-500/10 to-slate-500/10 border border-indigo-400/30 text-xs text-indigo-200 hover:border-indigo-400/50 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}