import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("Clique em gerar!");
  const [copyText, setCopyText] = useState("Copy");
  const [passwordSize, setPasswordSize] = useState(12);

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
        <label htmlFor="passwordSize">Length:</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <button onClick={generate}>
        Create a password of {passwordSize} characters!
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      {/* <button onClick={() => setPasswordSize(99)}>Change Satate</button> */}
      <div>{password}</div>
    </div>
  );
}

export default App;
