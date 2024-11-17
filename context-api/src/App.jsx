import React from "react";

import CounterProvider from "./context/CounterProvider";
import Counter_context_api from "./components/Counter-contextapi";
import Counter_redux from "./components/Counter-redux";

export default function App() {
  return (
    // <CounterProvider>
    //   <Counter_context_api />
    // </CounterProvider>
    <>
      <Counter_redux />
    </>
  );
}
