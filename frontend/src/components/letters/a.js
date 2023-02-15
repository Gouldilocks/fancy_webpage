import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      pathOffset: 0,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

export default function A({ x, y, order, color }) {
  return (
    <>
    <motion.line
      x1={x + 25}
      y1={y}
      x2={x}
      y2={y + 100}
      stroke={color}
      variants={draw}
      custom={order}
    /> 

        <motion.line
      x1={x+25}
      y1={y}
      x2={x + 50}
      y2={y + 100}
        stroke={color}
      variants={draw}
      custom={order}
    /> 

      <motion.line
        x1={x + 12}
        y1={y + 55}
        x2={x + 38}
        y2={y + 55}
        stroke={color}
        variants={draw}
        custom={order}
      /> 
    </>
  );
}