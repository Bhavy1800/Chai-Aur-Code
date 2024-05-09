import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(
          "https://media.istockphoto.com/id/1499733378/photo/american-dollar-banknotes-over-financial-graph.webp?b=1&s=170667a&w=0&k=20&c=UKelXy3agLJLj9QQE9IVJWgfGkAS7d2-Yaf9IbXf53A="
        )`,
      }}
    ></div>
  );
}

export default App;
