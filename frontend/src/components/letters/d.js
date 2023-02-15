import { motion } from "framer-motion"

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 0.25,
      pathOffset: 0,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

const drawTopHalf = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      pathOffset: .75,
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
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
}

export default function D({ x, y, order, color }) {
  return (
    <>
      <motion.line
        x1={x}
        y1={y - 50}
        x2={x}
        y2={y + 50}
        stroke={color}
        variants={drawL}
        custom={order}
      />

      <motion.circle
        cx={x}
        cy={y}
        r="50"
        stroke={color}
        variants={draw}
        custom={order}
      /> 

      <motion.circle
        cx={x}
        cy={y}
        r="50"
        stroke={color}
        variants={drawTopHalf}
        custom={order}
      /> 

    </>
  );
}