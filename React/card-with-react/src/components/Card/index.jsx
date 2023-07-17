import Button from "../Button";
import styles from "./styles.module.css";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={props.posterImg}
        alt="Harry Potter Poster"
      />
      <div>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim,
          ullam deleniti nemo laborum vitae fugit molestiae facere voluptatibus
          earum minus sapiente sequi ut expedita perferendis a labore dolor
          voluptatum.
        </p>
        <Button text="Comprar agora" />
      </div>
    </div>
  );
}
