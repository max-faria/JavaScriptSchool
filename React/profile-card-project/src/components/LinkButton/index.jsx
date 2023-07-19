export default function Linkbutton(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="bg-linkblue bg-gradient-to-r from-linearfrom to-linearto rounded-xl drop-shadow-sm width-700 font-bold duration-200 w-40 hover:drop-shadow-md hover:mb-1 p-2 text-white"
    >
      {props.children}
    </a>
  );
}
