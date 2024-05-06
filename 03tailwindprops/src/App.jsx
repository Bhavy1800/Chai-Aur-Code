import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Bhavy",
    age: 21,
    address: {
      city: "Himatnagar",
      state: "Gujarat",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Bhavy Patel" post="Sr. Software developer, Google" />
      <Card
        username={myObj.name}
        post="jr. Software developer, Apple"
        myArr={newArr}
      />
      <Card />
    </>
  );
}

export default App;
