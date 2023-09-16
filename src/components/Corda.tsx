"use client"
import { motion, useAnimation } from 'framer-motion';

const Corda = () => {
  const controls = useAnimation();

  const handlePull = () => {
    controls.start({
      opacity: 1,
      y: [-20, 0, -20],
      transition: { type: "inertia", y: { stiffness: 50, damping: 20, restDelta: 0.001 } },
    });
  };

  return (
    <motion.div
      className="w-8 h-80 bg-black"
      animate={controls}
      initial={{ opacity: 0, y: 0 }}
      onClick={handlePull}
    ></motion.div>
  );
};

export default Corda;