import { useState } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <h1 className="bg-red-400">Setup Ready</h1>
    </>
  );
}

export default App;
