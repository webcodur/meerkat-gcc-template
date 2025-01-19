'use client';

import CarvedText from './CarvedText';
import { fi, md, fo } from '@/data/constants/animation';
import { useEffect, useState } from 'react';

interface LoadingUIProps {
  className?: string;
  fullHeight?: boolean;
  onFadeOutComplete?: () => void;
}

export default function LoadingUI({
  className = '',
  fullHeight = true,
  onFadeOutComplete,
}: LoadingUIProps) {
  const topScene = `fadeIn ${fi}ms forwards`;
  const botScene = `fadeOut ${fo}ms forwards`;
  const [currentAnimation, setCurrentAnimation] = useState(topScene);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setCurrentAnimation(topScene);
    }, fi);

    const fadeOutTimer = setTimeout(() => {
      setCurrentAnimation(botScene);
    }, fi + md);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [topScene, botScene]);

  return (
    <div className={`flex justify-center items-center ${fullHeight ? 'h-full' : ''} ${className}`}>
      <div
        className="opacity-0"
        style={{
          animation: currentAnimation,
        }}
        onAnimationEnd={(e) => {
          if (e.animationName === 'fadeOut' && onFadeOutComplete) {
            onFadeOutComplete();
          }
        }}
      >
        <CarvedText>7MEERKAT</CarvedText>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
