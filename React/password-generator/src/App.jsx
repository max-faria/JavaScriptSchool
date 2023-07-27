import { useState } from "react";
import "./App.css";
import Input from "./componentes/Input";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  const [passwordSize, setPasswordSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const customPassword = showInput ? passwordSize : 8;

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length); //gera um indice e o Mathh.flor arredonda
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copy");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copied!");
  }

  return (
    <div className="app">
      <h1>Password Generator</h1>
      <div>
        <label htmlFor="showInput">Customize lenght?</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>
      {showInput ? (
        <div>
          <label htmlFor="passwordSize">Lenght:</label>
          <Input
            passwordSize={passwordSize}
            setPasswordSize={setPasswordSize}
          />
        </div>
      ) : null}
      <button onClick={generate}>
        Create a password of {customPassword} characters!
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      {/* <button onClick={() => setPasswordSize(99)}>Change Satate</button> */}
      <div>{password}</div>
    </div>
  );
}

export default App;
