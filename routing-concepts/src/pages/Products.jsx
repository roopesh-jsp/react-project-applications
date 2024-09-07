import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <>
      <div>Products</div>
      {data.map((item) => (
        <h5 key={item.id}>
          <Link to={`${item.id}`}>{item.title}</Link>
        </h5>
      ))}
    </>
  );
}
