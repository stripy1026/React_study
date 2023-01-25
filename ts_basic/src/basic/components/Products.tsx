import { useEffect, useState } from "react";

type ProductData = {
  id: string;
  name: string;
  price: string;
};

export const Products = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [checked, setChecked] = useState<number>(0);
  const handleChange = () => setChecked((prev) => (prev ? 0 : 1));

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data received");
        setProducts(data);
      });
    return () => {
      console.log("clean");
    };
  }, [checked]);

  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Show Only Hot Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};
