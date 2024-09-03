import React from "react";
import RooyFolder from "./components/RooyFolder";
import explorer from "./data";
function App() {
  return (
    <div className="main">
      <RooyFolder data={explorer} />
    </div>
  );
}

export default App;
