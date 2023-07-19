export default function Title(props) {
  return (
    <h2
      className={`${props.className} text-2xl font-semibold py-4 px-10 text-2xl flex gap-4 justify-center`}
    >
      {props.children}
    </h2>
  );
}
