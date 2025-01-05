import React from 'react';
import './Button.css';

type MetalButtonVariant = 'radial' | 'linear' | 'oval';

interface MetalButtonProps {
  variant: MetalButtonVariant;
  children: React.ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
}

const MetalButton: React.FC<MetalButtonProps> = ({ variant, children, width, height, fontSize }) => {
  const baseClass = "metal";
  const variantClass = variant === 'radial' ? 'radial' : 
                      variant === 'oval' ? 'linear oval' : 
                      'linear';
  
  const style = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    fontSize: fontSize ? `${fontSize}px` : undefined,
  };

  return (
    <button className={`${baseClass} ${variantClass}`} style={style}>
      {children}
    </button>
  );
};

export default MetalButton;