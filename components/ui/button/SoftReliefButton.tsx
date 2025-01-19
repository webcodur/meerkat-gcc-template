import React from 'react';

type MetalColor = 'gold' | 'silver';
type ButtonStyle = 'basic' | 'glossy';

interface SoftReliefButtonProps {
  variant?: ButtonStyle;
  color?: MetalColor;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  textEffect?: 'emboss' | 'deboss' | 'none';
}

const METAL_COLORS = {
  gold: {
    light: '#fea',
    medium: '#dc8',
    dark: '#ba6',
    text: 'hsl(45, 20%, 25%)',
  },
  silver: {
    light: '#e6e6e6',
    medium: '#c5c5c5',
    dark: '#7c7c7c',
    text: 'hsl(0, 0%, 25%)',
  },
};

const SoftReliefButton: React.FC<SoftReliefButtonProps> = ({
  variant = 'basic',
  color = 'gold',
  children = 'Button',
  className = '',
  onClick,
  textEffect = 'none',
}) => {
  const colors = METAL_COLORS[color];

  // Base styles
  const baseStyles = `
        relative inline-block px-6 py-2 m-2 rounded
        font-bold cursor-pointer whitespace-nowrap
        shadow-[inset_0_1px_0_rgba(255,255,255,1),0_1px_3px_rgba(0,0,0,0.3)]
        border border-solid transition-all duration-150
    `;

  // Text effect styles
  const getTextEffectClasses = () => {
    switch (textEffect) {
      case 'emboss':
        return `
                    [text-shadow:-1px_-1px_0px_rgba(0,0,0,0.6),0px_2px_2px_${colors.light}]
                    active:[text-shadow:0px_-2px_2px_${colors.light},1px_1px_0px_rgba(0,0,0,0.4)]
                    tracking-wider
                `;
      case 'deboss':
        return `
                    [text-shadow:0px_2px_1px_${colors.light},0px_-1px_1px_rgba(0,0,0,0.4)]
                    active:[text-shadow:0px_-2px_1px_${colors.light},0px_1px_1px_rgba(0,0,0,0.6)]
                    tracking-wider opacity-90 active:opacity-80
                `;
      default:
        return `
                    [text-shadow:0px_1px_1px_theme(colors.white/50)]
                    active:[text-shadow:0px_-1px_1px_theme(colors.white/30)]
                `;
    }
  };

  // Variant styles
  const getVariantStyles = () => {
    const baseGradient =
      variant === 'basic'
        ? `linear-gradient(180deg, ${colors.light} 0%, ${colors.medium} 49%, ${colors.dark} 51%, ${colors.medium} 100%)`
        : `-webkit-linear-gradient(top, ${colors.dark}, ${colors.light} 25%, #ffffff 38%, ${colors.medium} 63%, ${colors.light} 87%, ${colors.dark})`;

    return {
      background: baseGradient,
      borderColor: colors.dark,
      backfaceVisibility: 'hidden' as const,
    };
  };

  return (
    <button
      className={`
                ${baseStyles}
                ${getTextEffectClasses()}
                ${className}
                active:shadow-inner active:shadow-gray-700
                transition-[text-shadow] duration-150
            `}
      style={{
        ...getVariantStyles(),
        color: colors.text,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SoftReliefButton;
