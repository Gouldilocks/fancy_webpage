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

export default function O({ x, y, order, color }) {
  return (
    <>
      <motion.circle
        cx={x}
        cy={y}
        r="50"
        stroke={color}
        variants={draw}
        custom={order}
      /> 
    </>
  );
}