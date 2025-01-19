import React, { CSSProperties } from 'react';

interface MetallicPatternNoiseProps {
  width?: number;
  height?: number;
  className?: string;
}

interface CustomStyles extends CSSProperties {
  '--bg': string;
  '--fg': string;
  '--fg-alpha': string;
  '--ac': string;
}

const MetallicPatternNoise = ({
  width,
  height = 200,
  className = '',
}: MetallicPatternNoiseProps) => {
  const styles: CustomStyles = {
    '--bg': '#FFFFFF',
    '--fg': '#E5E5E7',
    '--fg-alpha': '#E5E5E700',
    '--ac': '#F5F5F7',
  };

  return (
    <div
      style={styles as CSSProperties}
      className={`grid place-items-center w-full ${className}`.trim()}
    >
      <svg className="absolute w-px h-px -m-px">
        <defs>
          <filter id="noise">
            <feOffset in="SourceGraphic" dx="-2" dy="-2" result="offset" />
            <feGaussianBlur in="offset" stdDeviation="16" result="blur" />
            <feTurbulence
              result="waves"
              type="turbulence"
              baseFrequency="1.2 1.3"
              numOctaves="2"
              seed="256"
            ></feTurbulence>
            <feDisplacementMap
              in="blur"
              in2="waves"
              scale="80"
              xChannelSelector="R"
              yChannelSelector="B"
              result="ripples"
            ></feDisplacementMap>
            <feComposite
              in="waves"
              in2="ripples"
              operator="arithmetic"
              k1="1.2"
              k2="0"
              k3="1"
              k4="0"
            ></feComposite>
          </filter>
        </defs>
      </svg>

      <div
        className="relative overflow-hidden rounded-lg w-full"
        style={{
          width: width || '100%',
          height,
          background: 'var(--ac)',
          filter: 'blur(0.25px)',
          boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'var(--fg)',
            filter: 'url("#noise")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 100% 100%, var(--fg) 15%, 40%, var(--fg-alpha) 70%)',
          }}
        />
      </div>
    </div>
  );
};

export default MetallicPatternNoise;
