import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartStore";

export default function ProductItem({ id, image, price, title }) {
  const y = useSelector((x) => x.items);
  const dispatch = useDispatch();
  return (
    <div className="product">
      <img src={image} alt="" />
      <h5>{title}</h5>
      <p className="price">{price}</p>
      <button
        className="btn"
        onClick={() => {
          dispatch(cartActions.onAdd({ id, image, price, title }));
        }}
      >
        add to cart
      </button>
    </div>
  );
}
