'use client';

import { motion } from 'framer-motion';
import React from 'react';

const BasicAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>기본 모션 속성</h3>
        <p>
          Framer Motion의 기본적인 애니메이션 속성들을 살펴봅니다. 각 예제의 요소를 클릭하여
          애니메이션을 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 위치 이동 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">위치 이동</h3>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-primary rounded-lg"
                whileHover={{ x: 100 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring' }}
              />
            </div>
            <p className="text-sm">hover: x축 이동, tap: 크기 축소</p>
          </div>
        </div>

        {/* 회전 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">회전</h3>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-secondary rounded-lg"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring' }}
              />
            </div>
            <p className="text-sm">hover: 180도 회전, tap: 크기 축소</p>
          </div>
        </div>

        {/* 크기 변경 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">크기 변경</h3>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-accent rounded-lg"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring' }}
              />
            </div>
            <p className="text-sm">hover: 크기 확대, tap: 크기 축소</p>
          </div>
        </div>

        {/* 색상 변경 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">색상 변경</h3>
            <div className="h-32 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 rounded-lg"
                initial={{ backgroundColor: '#ff0088' }}
                whileHover={{ backgroundColor: '#00ff88' }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring' }}
              />
            </div>
            <p className="text-sm">hover: 색상 변경, tap: 크기 축소</p>
          </div>
        </div>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>initial</code>: 초기 상태 설정
          </li>
          <li>
            <code>animate</code>: 애니메이션 적용할 상태
          </li>
          <li>
            <code>whileHover</code>: hover 시 적용할 상태
          </li>
          <li>
            <code>whileTap</code>: 클릭/터치 시 적용할 상태
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicAnimation;
