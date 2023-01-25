import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

export const AppCounter = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount((prev: number) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "fire" : "ice"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
};
