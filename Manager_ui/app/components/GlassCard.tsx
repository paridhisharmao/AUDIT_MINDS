interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-xl bg-white/[0.03] 
        border border-white/[0.08]
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        ${hover ? 'transition-all duration-300 hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
