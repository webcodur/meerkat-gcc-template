'use client';

import { motion } from 'framer-motion';
import React from 'react';

const DragAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>드래그 애니메이션</h3>
        <p>
          요소를 드래그할 수 있게 만들고, 드래그 영역을 제한하거나 드래그 종료 시의 동작을 설정할 수
          있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 기본 드래그 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">기본 드래그</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-primary rounded-lg cursor-grab active:cursor-grabbing"
                drag
                whileDrag={{ scale: 1.2 }}
                dragSnapToOrigin
              />
            </div>
            <p className="text-sm">자유로운 드래그, 놓으면 원위치</p>
          </div>
        </div>

        {/* 축 제한 드래그 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">축 제한 드래그</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-secondary rounded-lg cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 200 }}
                whileDrag={{ scale: 1.2 }}
              />
            </div>
            <p className="text-sm">x축으로만 이동 가능, 범위 제한</p>
          </div>
        </div>

        {/* 영역 제한 드래그 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">영역 제한 드래그</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="absolute inset-8 border-2 border-dashed border-base-content/20 rounded-lg"
                style={{ zIndex: 0 }}
              />
              <motion.div
                className="w-16 h-16 bg-accent rounded-lg cursor-grab active:cursor-grabbing"
                drag
                dragConstraints={{ left: 32, right: 32, top: 32, bottom: 32 }}
                whileDrag={{ scale: 1.2 }}
              />
            </div>
            <p className="text-sm">점선 영역 내에서만 이동 가능</p>
          </div>
        </div>

        {/* 모멘텀 드래그 */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">모멘텀 드래그</h3>
            <div className="h-48 bg-base-300 rounded-lg relative">
              <motion.div
                className="w-16 h-16 bg-info rounded-lg cursor-grab active:cursor-grabbing"
                drag
                dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
                dragElastic={0.5}
                whileDrag={{ scale: 1.2 }}
              />
            </div>
            <p className="text-sm">탄성과 관성이 적용된 드래그</p>
          </div>
        </div>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>drag</code>: 드래그 활성화 (true 또는 &quot;x&quot;, &quot;y&quot;)
          </li>
          <li>
            <code>dragConstraints</code>: 드래그 가능 영역 제한
          </li>
          <li>
            <code>dragElastic</code>: 드래그 경계에서의 탄성도 (0~1)
          </li>
          <li>
            <code>dragSnapToOrigin</code>: 드래그 후 원위치로 복귀
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DragAnimation;
