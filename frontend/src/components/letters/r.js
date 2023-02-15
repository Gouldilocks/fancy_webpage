import {motion} from "framer-motion"

export default function R({x, y, order, color}) {
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

  const drawC = {
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

  return (
    <>
      <motion.line
        x1={x}
        y1={y}
        x2={x}
        y2={y + 100}
        stroke={color}
        variants={draw}
        custom={order}
      /> 
      <motion.circle
        cx={x+30}
        cy={y+30}
        r="30"
        stroke={color}
        variants={drawC}
        custom={order}
      />
      <motion.line
        x1={x+40}
        y1={y+60}
        x2={x+60}
        y2={y + 100}
        stroke={color}
        variants={draw}
        custom={order}
      /> 
    </>
  );

}