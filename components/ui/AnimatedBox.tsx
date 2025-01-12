import { motion } from 'framer-motion';

export const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-primary text-primary-content rounded-lg"
    >
      애니메이션이 적용된 박스
    </motion.div>
  );
};
