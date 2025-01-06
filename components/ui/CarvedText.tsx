import React from 'react';

interface CarvedTextProps {
    children: React.ReactNode;
    fontSize?: string;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
}

const CarvedText: React.FC<CarvedTextProps> = ({ 
    children, 
    fontSize = '4em',
    className = '',
    backgroundColor = 'rgba(82, 96, 117, 0.5)',
    textColor = 'transparent',
}) => {
    // 배경색에 따른 그림자 효과 자동 계산
    const calculateShadow = () => {
        // rgba 또는 rgb 형식의 색상값에서 RGB 값 추출
        const rgbaMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!rgbaMatch) return 'rgba(255, 255, 255, 0.5) 0 5px 6px, rgba(255, 255, 255, 0.2) 1px 3px 3px';

        const [, r, g, b] = rgbaMatch.map(Number);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;

        // 밝기에 따라 그림자 색상 결정
        const shadowBase = brightness > 128 
            ? 'rgba(0, 0, 0, 0.5)' 
            : 'rgba(255, 255, 255, 0.5)';
        const softShadow = brightness > 128 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(255, 255, 255, 0.2)';

        return `${shadowBase} 0 5px 6px, ${softShadow} 1px 3px 3px`;
    };

    const textStyle = {
        WebkitTextStroke: '0',
        textStroke: '0',
        color: textColor,
        backgroundColor: backgroundColor,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        textShadow: calculateShadow(),
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
