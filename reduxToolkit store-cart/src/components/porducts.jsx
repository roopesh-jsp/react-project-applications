import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

export default function porducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  async function fetchData() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      {loading ? (
        <p className="Loading">Loading ... </p>
      ) : (
        <div id="products">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}
