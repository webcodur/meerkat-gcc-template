'use client';

import { motion } from 'framer-motion';
import React from 'react';

const ViewportAnimation = () => {
  return (
    <div className="space-y-6">
      <div className="prose">
        <h3>뷰포트 애니메이션</h3>
        <p>
          요소가 화면에 보일 때 자동으로 실행되는 애니메이션입니다. 스크롤하면서 각 요소의 등장
          효과를 확인해보세요.
        </p>
      </div>

      <div className="space-y-8">
        {/* 페이드인 효과 */}
        <motion.div
          className="p-6 bg-primary text-primary-content rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-bold mb-2">페이드인 효과</h4>
          <p>아래에서 위로 부드럽게 나타나는 애니메이션</p>
        </motion.div>

        {/* 스케일 효과 */}
        <motion.div
          className="p-6 bg-secondary text-secondary-content rounded-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-bold mb-2">스케일 효과</h4>
          <p>크기가 점점 커지면서 나타나는 애니메이션</p>
        </motion.div>

        {/* 회전 효과 */}
        <motion.div
          className="p-6 bg-accent text-accent-content rounded-lg"
          initial={{ rotate: -10, opacity: 0, x: -100 }}
          whileInView={{ rotate: 0, opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-lg font-bold mb-2">회전 효과</h4>
          <p>회전하면서 슬라이드되는 애니메이션</p>
        </motion.div>
      </div>

      <div className="prose">
        <h4>주요 속성 설명</h4>
        <ul>
          <li>
            <code>whileInView</code>: 요소가 뷰포트에 보일 때의 상태
          </li>
          <li>
            <code>viewport.once</code>: 한 번만 실행할지 여부
          </li>
          <li>
            <code>viewport.margin</code>: 뷰포트 감지 여백 설정
          </li>
          <li>
            <code>viewport.amount</code>: 요소가 얼마나 보여야 실행될지 설정
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ViewportAnimation;
