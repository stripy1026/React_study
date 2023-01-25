import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products";

export function AppProducts() {
  const [showProducts, setShowProducts] = useState<boolean>(true);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}
