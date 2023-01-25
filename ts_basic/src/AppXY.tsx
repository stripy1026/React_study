import { useState } from "react";
import "./AppXY.css";

type Position = {
  x: number;
  y: number;
};

export const AppXY = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
};
