import React, { useRef } from "react";
import Modal from "../util/Modal";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const data = useSelector((x) => x.items);
  const modalRef = useRef();
  function handleOpen() {
    modalRef.current.showModal();
  }
  return (
    <div className="cart">
      <button onClick={handleOpen}>cart</button>
      <Modal ref={modalRef}>
        <ul>
          {data.map((el) => (
            <CartItem key={el.id} {...el} />
          ))}
        </ul>
      </Modal>
    </div>
  );
}
