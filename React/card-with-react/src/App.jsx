import { Fragment } from "react";
import Card from "./components/Card";
import fsposterImg from "./assets/harrypotter.jpg";
import scposterImg from "./assets/hp-secret-chamber.jpg";
import apposterImg from "./assets/hp-askabam-prisioner.jpg";

function App() {
  return (
    <>
      <Card title="Harry Potter e a Pedra Filosofal" posterImg={fsposterImg} />
      <Card title="Harry Potter e a Câmara Secreta" posterImg={scposterImg} />
      <Card
        title="Harry Potter e o Prisioneiro de Askabam"
        posterImg={apposterImg}
      />
    </>
  );
}

export default App;
