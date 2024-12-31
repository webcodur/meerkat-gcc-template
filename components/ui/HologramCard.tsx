import { ReactNode } from 'react';

interface HologramCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'solid' | 'glass';
    hoverEffect?: boolean;
}

export default function HologramCard({ 
    children, 
    className = '',
    variant = 'glass',
    hoverEffect = true 
}: HologramCardProps) {
    const baseStyles = "rounded-lg transition-all duration-300";
    
    const variantStyles = {
        solid: "bg-gradient-to-br from-gray-300 via-white to-gray-200 shadow-[0_0_25px_8px_rgba(255,255,255,0.2)] border-2 border-white/50",
        glass: "bg-gradient-to-br from-gray-300/20 via-white/10 to-gray-200/20 border border-white/30 backdrop-blur-md hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.3)]"
    };
    
    const hoverStyles = hoverEffect ? "transform hover:scale-105" : "";
    
    return (
        <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
} 