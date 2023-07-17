import CurrentStatus from "./components/CurrentStatus";
import { Subtitle } from "./components/Subtitle";
import Title from "./components/Title";
import style from "./App.module.css";

function sum(a, b) {
  return a + b;
}

export default function App() {
  return (
    <div
      className={style.app}
      // style={{
      //   backgroundColor: "#2C2C2D",
      //   display: "grid",
      //   minHeight: "100vh",
      //   placeContent: "center",
      //   textAlign: "center",
      // }}
    >
      <Title />
      <Subtitle />
      <h2>Using functions: 1 + 3 is {sum(1, 3)}</h2>
      <CurrentStatus />
      <p>
        It's not possible to use if or for in a JSX achive, but it's possible to
        use a ternary operation.
      </p>
    </div>
  );
}
