import React, { useState } from "react";
import useBookSearch from "./useBookSearch";

export default function App() {
  const [query, setQuery] = useState("");
  const [pgNo, setPgNo] = useState(1);
  console.log("hai");
  function handleQuery(e) {
    setQuery(e.target.value);
    setPgNo(1);
  }
  const { books, loading, hasMore } = useBookSearch(query, pgNo);
  console.log(books);

  return (
    <div>
      <input type="text" placeholder="enter" onChange={handleQuery} />
      {loading && <p>loading...</p>}
    </div>
  );
}
