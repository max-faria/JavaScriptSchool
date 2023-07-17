import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Profile from "./components/profile";

function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://avatars.githubusercontent.com/u/127763619?s=400&u=e41acd5947731c4604b1b0fd518426939e6bfdf8&v=4"
        name="Max Faria"
        bio="Freelancer Front-end Developer"
        email="mxxfaria@gmail.com"
        phone="+55 61 99901-9708"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}

export default App;
