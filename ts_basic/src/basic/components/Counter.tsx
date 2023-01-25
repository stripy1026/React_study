import { useState } from "react";

type Prop = {
  total: number;
  onClick(): void;
};

export const Counter = (props: Prop) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="counter">
      <span className="number">
        {count} <span className="total">/{props.total}</span>
      </span>
      <button
        className="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          props.onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
};
