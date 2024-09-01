import React, { useState } from "react";

function ListItem({ data, onDelete, idx }) {
  const [check, setCheck] = useState(false);

  return (
    <div className="list_item">
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => {
          setCheck((prev) => !prev);
        }}
      />
      <h4 className={`${check && " line_throught"}`}>{data}</h4>
      {check && <button onClick={() => onDelete(idx)}>delete</button>}
    </div>
  );
}

export default ListItem;
