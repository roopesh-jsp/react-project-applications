import React, { useState } from "react";
import ListItem from "./ListItem";

function List({ list }) {
  const [items, setItem] = useState(list);
  function handleDelete(idx) {
    // const reqItem = items.splice(idx, 1);
    // const newItems = items.filter((el) => el != reqItem);
    // setItem(newItems);

    setItem((prev) => {
      console.log(prev.splice(idx, 1), prev);
      const newArr = [...prev];
      return newArr;
    });
  }
  return (
    <div className="list">
      {items.map((el, index) => (
        <ListItem key={el} data={el} idx={index} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
