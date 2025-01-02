import { ReactNode } from 'react';

interface MetallicCardProps {
  children: ReactNode;
  className?: string;
}

export default function MetallicCard({ children, className = '' }: MetallicCardProps) {
  return (
    <div
      className={`
        bg-gradient-to-br from-gray-300 via-white to-gray-200 
        p-8 rounded-xl border-3 border-white
        shadow-[0_0_25px_8px_rgba(255,255,255,0.8)]
        relative overflow-hidden
        ${className}
      `}
    >
      {/* 내부 글로우 효과 */}
      <div className="absolute inset-0 bg-white/10 shadow-inner"></div>
      
      {/* 콘텐츠 */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 