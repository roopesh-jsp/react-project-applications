import React from "react";
import Header from "./components/Header";
import Porducts from "./components/porducts";
import { Provider } from "react-redux";
import store from "./store/cartStore";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Porducts />
      </Provider>
    </>
  );
}
