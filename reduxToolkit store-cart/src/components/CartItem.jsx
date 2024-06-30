import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartStore";

export default function CartItem({ id, title, price, quantity, total }) {
  const dispatch = useDispatch();

  return (
    <>
      <li className="cartItem">
        <span className="title">{title}</span>
        <span>price :{price}/-</span>
        <div className="cta">
          <button
            onClick={() =>
              dispatch(
                cartActions.onRemove({ title, price, quantity, total, id })
              )
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() =>
              dispatch(cartActions.onAdd({ title, price, quantity, total, id }))
            }
          >
            +
          </button>
        </div>
        <span>total :{total.toFixed(2)}/-</span>
      </li>
      <hr />
    </>
  );
}
