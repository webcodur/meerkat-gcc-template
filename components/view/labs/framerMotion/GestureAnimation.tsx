'use client';

import { motion } from 'framer-motion';
import React from 'react';

const GestureAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>제스처 애니메이션</h3>
        <p>
          hover, tap, drag 등 다양한 사용자 인터랙션에 반응하는 애니메이션을 구현할 수 있습니다.
          아래 예제들과 상호작용해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Hover 제스처 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Hover 제스처</h3>
            <div className="h-32 bg-base-300 rounded-lg relative flex items-center justify-center">
              <motion.button
                className="btn btn-primary"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
              >
                Hover Me
              </motion.button>
            </div>
            <p className="text-sm">마우스를 올리면 버튼이 커집니다</p>
          </div>
        </div>

        {/* Tap 제스처 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Tap 제스처</h3>
            <div className="h-32 bg-base-300 rounded-lg relative flex items-center justify-center">
              <motion.button
                className="btn btn-secondary"
                whileTap={{
                  scale: 0.8,
                  rotate: 10,
                }}
              >
                Click Me
              </motion.button>
            </div>
            <p className="text-sm">클릭하면 버튼이 회전하며 작아집니다</p>
          </div>
        </div>

        {/* Focus 제스처 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Focus 제스처</h3>
            <div className="h-32 bg-base-300 rounded-lg relative flex items-center justify-center">
              <motion.input
                type="text"
                placeholder="Focus me"
                className="input input-bordered"
                whileFocus={{
                  scale: 1.1,
                  borderColor: '#ff0088',
                }}
              />
            </div>
            <p className="text-sm">포커스시 입력창이 커지고 테두리 색상이 변합니다</p>
          </div>
        </div>

        {/* 복합 제스처 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">복합 제스처</h3>
            <div className="h-32 bg-base-300 rounded-lg relative flex items-center justify-center">
              <motion.div
                className="w-24 h-24 bg-accent rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
              />
            </div>
            <p className="text-sm">hover, tap, drag가 모두 적용된 요소</p>
          </div>
        </div>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>whileHover</code>: hover 시 적용될 스타일
          </li>
          <li>
            <code>whileTap</code>: 클릭/터치 시 적용될 스타일
          </li>
          <li>
            <code>whileFocus</code>: 포커스 시 적용될 스타일
          </li>
          <li>
            <code>whileDrag</code>: 드래그 시 적용될 스타일
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GestureAnimation;
