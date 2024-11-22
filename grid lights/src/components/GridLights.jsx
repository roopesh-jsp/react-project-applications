import React, { useState } from "react";

export default function GridLights({ grids }) {
  const [queue, setQueue] = useState([]);
  function handleClick(idx) {
    if (queue.includes(idx)) {
      return;
    }
    setQueue((prev) => [...prev, idx]);

    if (queue.length + 1 === grids.flat().filter(Boolean).length) {
      removeLights();
    }
  }
  function removeLights() {
    const timer = setInterval(() => {
      setQueue((prev) => {
        const newOrder = prev.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  }
  return (
    <div
      className="container"
      style={{
        gridTemplateColumns: `repeat(${grids[0].length},1fr)`,
      }}
    >
      {grids.flat().map((ele, idx) => {
        return ele ? (
          <div
            key={idx}
            className={`grid ${queue.includes(idx) ? "selected" : ""}`}
            onClick={() => handleClick(idx)}
          ></div>
        ) : (
          <span key={idx}></span>
        );
      })}
    </div>
  );
}
