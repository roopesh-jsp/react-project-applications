import React from "react";
import { useCounter } from "../context/CounterProvider";

export default function Counter_context_api() {
  const { value, add, reduce } = useCounter();
  return (
    <div>
      <span onClick={reduce}>-</span>
      <span>{value}</span>
      <span onClick={add}>+</span>
    </div>
  );
}
