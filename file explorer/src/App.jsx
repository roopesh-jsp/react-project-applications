import React, { useState } from "react";
import RooyFolder from "./components/RooyFolder";
import explorer from "./data";
import useTraversalTree from "./hooks/useTraversalTree";
function App() {
  const [explorerr, setExlorerr] = useState(explorer);
  const { insertNode } = useTraversalTree();
  function addItem(folderId, isFolder, item) {
    const finalTree = insertNode(explorerr, folderId, isFolder, item);

    setExlorerr(finalTree);
  }
  return (
    <div className="main">
      <RooyFolder data={explorerr} addItem={addItem} />
    </div>
  );
}

export default App;
