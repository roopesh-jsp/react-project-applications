import React, { useState } from "react";

function RooyFolder({ data, addItem }) {
  const [expand, setExpand] = useState(false);
  const [inputval, setInputval] = useState("");
  const [addFolder, setAddFolder] = useState({
    isFolder: false,
    isVisible: false,
  });
  function handleClick() {
    setExpand((prev) => !prev);
  }
  function addFiles(e, type) {
    e.stopPropagation();
    setExpand(true);
    setAddFolder((prev) => {
      return { isFolder: type === "folder", isVisible: true };
    });
  }
  function onAddFile(e) {
    if (e.target.value && e.keyCode === 13) {
      // logic ...
      addItem(data.id, addFolder.isFolder, inputval);
      setAddFolder({ ...addFolder, isVisible: false });
      setInputval("");
    }
  }

  return (
    <div className="rootFolder">
      <div className="name" onClick={handleClick}>
        <span>
          {" "}
          {data.isFolder ? "📂" : "🗃️"}
          {data.name}
        </span>
        {data.isFolder && (
          <span className="cta">
            {" "}
            <button onClick={(e) => addFiles(e, "folder")}>folder +</button>
            <button onClick={(e) => addFiles(e, "file")}>file +</button>
          </span>
        )}
      </div>

      <div
        className="inner_items"
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {addFolder.isVisible && (
          <div className="addFolder">
            <span>{addFolder.isFolder ? "📂" : "🗃️"}</span>
            <input
              type="text"
              autoFocus
              onBlur={() => {
                setAddFolder({ ...addFolder, isVisible: false });
              }}
              onKeyDown={onAddFile}
              value={inputval}
              onChange={(e) => {
                setInputval(e.target.value);
              }}
            />
          </div>
        )}
        {data.items.map((item, idx) => (
          <RooyFolder key={item.id} data={item} addItem={addItem} />
        ))}
      </div>
    </div>
  );
}

export default RooyFolder;
