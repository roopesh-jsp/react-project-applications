import React from "react";
import { lsitData } from "./data/data.js";
import List from "./components/List";
function App() {
  return (
    <>
      <h1>dynamic list</h1>
      <List list={lsitData} />
    </>
  );
}

export default App;
