import {motion} from "framer-motion"

export default function S({ x, y, order, color }) {
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

  const drawCtop = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: .5,
        pathOffset: 0.32,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  } 

  const drawCbottom = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        pathOffset: -1.2,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  } 

  const drawCotherbottom = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: .4,
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
      <motion.circle
        cx={x}
        cy={y+25}
        r="25"
        stroke={color}
        variants={drawCtop}
        custom={order}
      /> 

      <motion.line
        x1={x - 10}
        y1={y + 48}
        x2={x + 10}
        y2={y + 57}
        stroke={color}
        variants={draw}
        custom={order}
      />

      <motion.circle
        cx={x}
        cy={y+80}
        r="25"
        stroke={color}
        variants={drawCbottom}
        custom={order}
      /> 

      <motion.circle
        cx={x}
        cy={y + 80}
        r="25"
        stroke={color}
        variants={drawCotherbottom}
        custom={order}
      /> 
    </>
  );
}