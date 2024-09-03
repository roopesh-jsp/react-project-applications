import React, { useState } from "react";

function RooyFolder({ data }) {
  const [expand, setExpand] = useState(false);
  const [addFolder, setAddFolder] = useState({
    isFolder: false,
    isVisible: false,
  });
  function handleClick() {
    setExpand((prev) => !prev);
  }
  function addFiles(e, type) {
    e.stopPropagation();
    setAddFolder((prev) => {
      return { isFolder: type === "folder", isVisible: true };
    });
  }
  return (
    <div className="rootFolder">
      {console.log(data)}
      <div className="name" onClick={handleClick}>
        <span>
          {" "}
          {data.isFolder ? "📂" : "🗃️"}
          {data.name}
        </span>
        <span className="cta">
          {" "}
          <button onClick={(e) => addFiles(e, "folder")}>folder +</button>
          <button onClick={(e) => addFiles(e, "file")}>file +</button>
        </span>
      </div>
      {addFolder.isVisible && (
        <div className="addFolder">
          <span>{addFolder.isFolder ? "📂" : "🗃️"}</span>
          <input type="text" />
        </div>
      )}
      {expand && (
        <div className="inner_items">
          {data.items.map((item, idx) => (
            <RooyFolder key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default RooyFolder;
