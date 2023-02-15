import ChristianName from "../components/christian";
import "../styles.css"
import { info } from "../info"; 

export default function Home() {
  return (
    <>
      <ChristianName />
      <h1>
        {info.intro}
      </h1>
      <p1>
        {info.description}
      </p1>
    </>
  );
}