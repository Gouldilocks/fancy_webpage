import { motion } from "framer-motion"

const drawC = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.75,
      pathOffset: 0.05,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

const drawL = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.75,
      pathOffset: 0,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

export default function G({ x, y, order, color }) {
  return (
    <>
      <motion.circle
        cx={x}
        cy={y}
        r="50"
        stroke={color}
        variants={drawC}
        custom={order}
      /> 
      <motion.line
        x1={x+5}
        y1={y + 15}
        x2={x + 60}
        y2={y + 15}
        stroke={color}
        variants={drawL}
        custom={order}
      />
    </>
  );
}