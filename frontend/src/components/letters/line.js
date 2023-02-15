import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.6,
      pathOffset: 0.2,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

export default function Line({ x, y, order, color }) {
  return (
    <>
      <motion.line
        x1={x - 100}
        y1={y}
        x2={x + 900}
        y2={y}
        stroke={color}
        variants={draw}
        custom={order}
      />
    </>
  );
}