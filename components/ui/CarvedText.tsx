import React from 'react';

interface CarvedTextProps {
  children: React.ReactNode;
  fontSize?: string;
  className?: string;
}

const CarvedText: React.FC<CarvedTextProps> = ({ children, fontSize = '4em', className = '' }) => {
  const textStyle = {
    WebkitTextStroke: '0',
    textStroke: '0',
    color: 'transparent',
    backgroundColor: 'rgba(82, 96, 117, 0.5)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    textShadow: 'rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px',
    transition: 'text-shadow 0.1s ease-out, background-color 0.2s ease-out',
    fontFamily: '"Droid Sans", sans-serif',
    fontWeight: 'bold',
    fontSize,
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div style={textStyle} className="outline-none">
        {children}
      </div>
    </div>
  );
};

export default CarvedText;
