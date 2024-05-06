import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    //This all is one batch so it updates only 1
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    //This is the correct way to update the state using callback and it will update the state 4 times and it is dependent on previous value
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };
  return (
    <>
      <h1>React with bhavy</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value</button>
      {""}
      <button onClick={removeValue}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
