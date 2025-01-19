'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">스크롤 애니메이션</h2>
      <div className="space-y-4">
        {/* 왼쪽에서 나타나는 요소 */}
        <motion.div
          className="w-full h-20 bg-info rounded-lg flex items-center justify-center text-white"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          왼쪽에서 등장
        </motion.div>

        {/* 오른쪽에서 나타나는 요소 */}
        <motion.div
          className="w-full h-20 bg-success rounded-lg flex items-center justify-center text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          오른쪽에서 등장
        </motion.div>

        {/* 아래에서 나타나는 요소 */}
        <motion.div
          className="w-full h-20 bg-warning rounded-lg flex items-center justify-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          아래에서 등장
        </motion.div>

        {/* 페이드인 효과 */}
        <motion.div
          className="w-full h-20 bg-error rounded-lg flex items-center justify-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          페이드인 + 확대
        </motion.div>
      </div>

      {/* 스크롤 테스트를 위한 여백 */}
      <div className="h-[50vh]" />
    </section>
  );
};

export default ScrollAnimation;
