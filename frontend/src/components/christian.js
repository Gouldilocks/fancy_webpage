import "../styles.css";
import { motion } from "framer-motion";
import C from "./letters/c";
import H from "./letters/h";
import R from "./letters/r";
import I from "./letters/i";
import S from "./letters/s";
import T from "./letters/t";
import A from "./letters/a";
import N from "./letters/n";
import G from "./letters/g";
import O from "./letters/o";
import U from "./letters/u";
import L from "./letters/l";
import D from "./letters/d";
import Line from "./letters/line";

export default function ChristianName() {
  const color1 = "#2b638d";
  const color2 = "#CCF381";
  return (
    <div>
    <motion.svg
      width="25rem"
      height="25rem"
      viewBox="0 0 800 300"
      initial="hidden"
      animate="visible"
    >
      <C x={150} y={100} order={1} color={color1}/>
      <H x={185} y={50} order={2} color={color2} /> 
      <R x={255} y={50} order={3} color={color2} />
      <I x={300} y={50} order={1} color={color2} />
      <S x={410} y={47} order={2} color={color2} />
      <T x={440} y={50} order={3} color={color2} />
      <I x={475} y={50} order={1} color={color2} />
      <A x={560} y={50} order={2} color={color2} />
      <N x={625} y={50} order={3} color={color2} />

      <G x={150} y={225} order={4} color={color1} />
      <O x={260} y={225} order={5} color={color1} />
      <U x={380} y={225} order={4} color={color2} />
      <L x={435} y={225} order={5} color={color2} />
      <D x={483} y={225} order={4} color={color2} />
      <Line x={0} y={300} order={5} color={color1} />
    </motion.svg>
    </ div>
  );
}