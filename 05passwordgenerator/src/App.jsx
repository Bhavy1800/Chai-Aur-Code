import { useState } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow mb-4 rounded-lg overflow-hidden">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          value={password}
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-blue-700   text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex item-center gap-x-1 ">
          <input
            type="range"
            name=""
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex item-center gap-x-1 ">
          <input
            type="checkbox"
            name=""
            id=""
            className=""
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex item-center gap-x-1 ">
          <input
            type="checkbox"
            name=""
            id=""
            className=""
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
