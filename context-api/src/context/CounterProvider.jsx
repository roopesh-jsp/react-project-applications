import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  value: "",
  add: () => {},
  reduce: () => {},
});
export default function CounterProvider({ children }) {
  const [value, setValue] = useState(0);
  function add() {
    setValue((prev) => prev + 1);
  }
  function reduce() {
    setValue((prev) => prev - 1);
  }

  const ctxVal = {
    value,
    add,
    reduce,
  };
  return (
    <CounterContext.Provider value={ctxVal}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const data = useContext(CounterContext);
  return data;
}
