'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const TransitionAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>트랜지션 타입</h3>
        <p>
          Framer Motion은 spring, tween, inertia 등 다양한 트랜지션 타입을 제공합니다. 각각의 특성을
          아래에서 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Spring 트랜지션 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Spring</h3>
            <p className="text-sm">자연스러운 스프링 효과</p>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-primary rounded-lg"
                animate={{
                  x: isAnimating ? 200 : 0,
                  rotate: isAnimating ? 180 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                }}
              />
            </div>
          </div>
        </div>

        {/* Tween 트랜지션 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Tween</h3>
            <p className="text-sm">일정한 속도의 선형 움직임</p>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-secondary rounded-lg"
                animate={{
                  x: isAnimating ? 200 : 0,
                  rotate: isAnimating ? 180 : 0,
                }}
                transition={{
                  type: 'tween',
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </div>

        {/* Inertia 트랜지션 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Inertia</h3>
            <p className="text-sm">관성을 이용한 자연스러운 감속</p>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-accent rounded-lg"
                animate={{
                  x: isAnimating ? 200 : 0,
                  rotate: isAnimating ? 180 : 0,
                }}
                transition={{
                  type: 'inertia',
                  velocity: 50,
                  power: 0.5,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={() => setIsAnimating(!isAnimating)}>
        애니메이션 토글
      </button>

      <div className="prose">
        <h4>트랜지션 속성</h4>
        <ul>
          <li>
            <code>type</code>: 트랜지션 종류 (spring, tween, inertia)
          </li>
          <li>
            <code>duration</code>: 애니메이션 지속 시간 (tween)
          </li>
          <li>
            <code>stiffness</code>: 스프링의 강도 (spring)
          </li>
          <li>
            <code>damping</code>: 감쇠율 (spring)
          </li>
          <li>
            <code>velocity</code>: 초기 속도 (inertia)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TransitionAnimation;
