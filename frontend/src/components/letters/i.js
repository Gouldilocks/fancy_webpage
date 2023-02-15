import { motion } from "framer-motion"

export default function I({ x, y, order, color }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <>
      <motion.line
        x1={x+50}
        y1={y}
        x2={x+50}
        y2={y + 100}
        stroke={color}
        variants={draw}
        custom={order}
      /> 

      <motion.line
        x1={x+30}
        y1={y}
        x2={x+70}
        y2={y}
        stroke={color}
        variants={draw}
        custom={order}
      /> 

      <motion.line
        x1={x + 30}
        y1={y + 100}
        x2={x + 70}
        y2={y + 100}
        stroke={color}
        variants={draw}
        custom={order}
      /> 
    </>
  );
}