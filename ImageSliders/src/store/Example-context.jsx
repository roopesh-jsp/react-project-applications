// ************     context-file  *** (linking context to states)
import { createContext, useState } from "react";
export const ExContext = createContext({
  count: 0, // this was optional just for
  inc: () => {}, // auto-completion
  dec: () => {},
});

export default function ExContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((prev) => prev + 1);
  }
  function decrement() {
    setCounter((prev) => prev - 1);
  }
  const ctxValue = {
    count: counter,
    inc: increment, // this is mandatory
    dec: decrement,
  };
  return <ExContext.Provider value={ctxValue}>{children}</ExContext.Provider>;
}
