import React, { useState } from "react";

export default function GridLights({ grids }) {
  const [order, setOrder] = useState([]);
  function deleselecting() {
    const timer = setInterval(() => {
      setOrder((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();
        if (newOrder.length === 0) {
          clearInterval(timer);
        }
        return newOrder;
      });
    }, 300);
  }
  function handleClick(idx) {
    if (order.includes(idx)) {
      return;
    }
    let newOrder = [...order, idx];
    setOrder(newOrder);
    if (newOrder.length === grids.filter(Boolean).length) {
      newOrder = [];
      deleselecting();
    }
  }
  return (
    <div className="container">
      {grids.map((value, idx) => {
        return value ? (
          <button
            key={idx}
            className={`grid ${order.includes(idx) && "selected"}`}
            onClick={() => handleClick(idx)}
          />
        ) : (
          <span key={idx}></span>
        );
      })}
    </div>
  );
}
