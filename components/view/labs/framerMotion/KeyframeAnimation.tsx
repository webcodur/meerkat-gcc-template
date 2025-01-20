'use client';

import { motion } from 'framer-motion';

const KeyframeAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>키프레임 애니메이션</h3>
        <p>
          여러 단계의 연속적인 애니메이션을 정의할 수 있습니다. 배열을 사용하여 각 단계별 값을
          지정합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 기본 키프레임 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">기본 키프레임</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-primary rounded-lg"
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </div>
            <p className="text-sm">여러 속성이 순차적으로 변화하는 애니메이션</p>
          </div>
        </div>

        {/* 경로 따라가기 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">경로 따라가기</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-secondary rounded-lg"
                animate={{
                  x: [0, 100, 100, 0, 0],
                  y: [0, 0, 100, 100, 0],
                }}
                transition={{
                  duration: 4,
                  ease: 'linear',
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                }}
              />
            </div>
            <p className="text-sm">사각형 경로를 따라 움직이는 애니메이션</p>
          </div>
        </div>

        {/* 색상 변화 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">색상 변화</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 rounded-lg"
                animate={{
                  backgroundColor: ['#ff0088', '#00ff88', '#0088ff', '#ff0088'],
                }}
                transition={{
                  duration: 4,
                  ease: 'linear',
                  times: [0, 0.33, 0.66, 1],
                  repeat: Infinity,
                }}
              />
            </div>
            <p className="text-sm">부드럽게 색상이 순환되는 애니메이션</p>
          </div>
        </div>

        {/* 텍스트 애니메이션 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">텍스트 애니메이션</h3>
            <div className="h-48 bg-base-300 rounded-lg relative flex items-center justify-center">
              <motion.div
                className="text-4xl font-bold"
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [-20, 0, 0, 20],
                  scale: [0.8, 1, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.8, 1],
                  repeat: Infinity,
                }}
              >
                Hello!
              </motion.div>
            </div>
            <p className="text-sm">페이드 인/아웃되는 텍스트 애니메이션</p>
          </div>
        </div>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>animate</code>: 배열로 각 키프레임 값 정의
          </li>
          <li>
            <code>transition.times</code>: 각 키프레임의 타이밍 (0~1)
          </li>
          <li>
            <code>transition.repeat</code>: 반복 횟수 (Infinity는 무한반복)
          </li>
          <li>
            <code>transition.repeatDelay</code>: 반복 사이의 대기 시간
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KeyframeAnimation;
