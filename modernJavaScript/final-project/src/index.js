import dayjs from "dayjs";
import "./styles/style.css";

alert("Olá, mundo!");
alert(`Today is: ${dayjs().format("DD/MM/YYYY")}`);

const hello = () => console.log(`It works! ${1 + 1}`);

hello();
