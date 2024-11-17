import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, increaseByN } from "../store/Counter-store";

export default function Counter_redux() {
  const data = useSelector((state) => state.counter.value);
  const dis = useDispatch();
  return (
    <div>
      <span onClick={() => dis(dec())}>-</span>
      <span>{data}</span>
      <span onClick={() => dis(inc())}>+</span>
      <span onClick={() => dis(increaseByN(10))}>+5</span>
    </div>
  );
}
