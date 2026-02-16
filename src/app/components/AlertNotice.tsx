import { AlertCircle, RefreshCw, Clock } from 'lucide-react';

interface AlertNoticeProps {
  type?: 'timeout' | 'retry' | 'fallback';
}

export function AlertNotice({ type = 'retry' }: AlertNoticeProps) {
  const getConfig = () => {
    switch (type) {
      case 'timeout':
        return {
          message: 'Generation timeout occurred. The system will retry automatically.',
          icon: Clock,
          gradient: 'from-orange-500/15 to-red-500/15',
          border: 'border-orange-400/30',
          shadow: 'shadow-orange-500/20',
          iconColor: 'text-orange-300',
          textColor: 'text-orange-100',
        };
      case 'fallback':
        return {
          message: 'Using fallback draft template. Manual review recommended.',
          icon: AlertCircle,
          gradient: 'from-yellow-500/15 to-amber-500/15',
          border: 'border-yellow-400/30',
          shadow: 'shadow-yellow-500/20',
          iconColor: 'text-yellow-300',
          textColor: 'text-yellow-100',
        };
      default:
        return {
          message: 'Processing delayed. Retry in progress...',
          icon: RefreshCw,
          gradient: 'from-amber-500/15 to-yellow-500/15',
          border: 'border-amber-400/30',
          shadow: 'shadow-amber-500/20',
          iconColor: 'text-amber-300',
          textColor: 'text-amber-100',
        };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <div className={`backdrop-blur-2xl bg-gradient-to-r ${config.gradient} border ${config.border} rounded-2xl p-5 shadow-xl ${config.shadow} flex items-start gap-4 hover:border-opacity-50 transition-all duration-300`}>
      <div className={`p-3 rounded-xl backdrop-blur-xl bg-white/[0.08] border border-white/10 flex-shrink-0`}>
        <Icon className={`w-5 h-5 ${config.iconColor} ${type === 'retry' ? 'animate-spin' : ''}`} />
      </div>
      <div className="flex-1 pt-1">
        <div className={`text-sm ${config.textColor} mb-3 leading-relaxed`}>{config.message}</div>
        {type === 'retry' && (
          <button className={`flex items-center gap-2 text-xs ${config.textColor} hover:text-white transition-colors px-3 py-1.5 rounded-lg backdrop-blur-xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] hover:border-white/20`}>
            <RefreshCw className="w-3.5 h-3.5" />
            Force Retry Now
          </button>
        )}
      </div>
    </div>
  );
}
