import React from 'react';
import './DeepReliefButton.css';

type DeepReliefButtonVariant = 'radial' | 'linear' | 'oval';

interface DeepReliefButtonProps {
  variant: DeepReliefButtonVariant;
  children: React.ReactNode;
  width?: number;
  height?: number;
  fontSize?: number;
}

const DeepReliefButton: React.FC<DeepReliefButtonProps> = ({
  variant,
  children,
  width,
  height,
  fontSize,
}) => {
  const baseClass = 'deep-relief';
  const variantClass =
    variant === 'radial' ? 'radial' : variant === 'oval' ? 'linear oval' : 'linear';

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

export default DeepReliefButton;
