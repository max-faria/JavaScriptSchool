import { useState } from "react";

function handleClick(ev) {
  console.log(ev);
  alert("You are following!");
}

export default function FollowButton(props) {
  // [valor, funcaoModificadora]
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      //   onClick={() => alert("You are now following!")}
      onClick={handleClick}
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs px-2.5 text-center"
    >
      {active ? "Follow" : "Unfollow"}
    </button>
  );
}
