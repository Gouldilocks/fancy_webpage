import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.5,
      pathOffset: 0,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

export default function U({ x, y, order, color }) {
  return (
    <>
      <motion.circle
        cx={x-20}
        cy={y+20}
        r="35"
        stroke={color}
        variants={draw}
        custom={order}
      /> 

      <motion.line
        x1={x - 55}
        y1={y - 50}
        x2={x - 55}
        y2={y + 90}
        stroke={color}
        variants={draw}
        custom={order}
      />

      <motion.line
        x1={x + 15}
        y1={y - 50}
        x2={x + 15}
        y2={y + 90}
        stroke={color}
        variants={draw}
        custom={order}
      />
    </>
  );
}