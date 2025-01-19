'use client';

import { motion } from 'framer-motion';
import React from 'react';

const PathAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>SVG 패스 애니메이션</h3>
        <p>
          SVG 패스를 따라 움직이는 애니메이션을 구현합니다. 아래 예제에서는 원이 곡선 경로를 따라
          움직입니다.
        </p>
      </div>

      <div className="w-full h-[300px] bg-base-200 rounded-lg relative">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* 참고용 패스 (시각화) */}
          <path
            d="M 50 150 C 100 50, 300 50, 350 150"
            fill="none"
            stroke="#666"
            strokeWidth="2"
            strokeDasharray="5 5"
          />

          {/* 애니메이션 적용될 원 */}
          <motion.circle
            cx="0"
            cy="0"
            r="20"
            fill="hsl(var(--p))"
            animate={{
              offsetDistance: '100%',
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              offsetPath: "path('M 50 150 C 100 50, 300 50, 350 150')",
            }}
          />
        </svg>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>offsetPath</code>: SVG 패스 문자열을 지정하여 움직임 경로 정의
          </li>
          <li>
            <code>offsetDistance</code>: 패스상의 위치 (0% ~ 100%)
          </li>
          <li>
            CSS <code>offset-path</code> 속성을 활용
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PathAnimation;
