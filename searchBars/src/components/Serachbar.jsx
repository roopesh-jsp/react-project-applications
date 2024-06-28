import React, { useEffect, useState } from "react";
import SuggestionItem from "./SuggestionItem";

export default function Serachbar({ staticData, dataKey, fetchData }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [currSugg, setCurrSugg] = useState(-1);

  async function getSuggestions(input) {
    setLoading(true);
    try {
      let results;
      if (staticData) {
        results = staticData.filter((item) =>
          item.toLowerCase().includes(input.toLocaleLowerCase())
        );
      } else {
        results = await fetchData(input);
      }
      setSuggestions(results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (input.length > 1) {
      getSuggestions(input);
    }
  }, [input]);

  function handleKeyDown(e) {
    if (currSugg < suggestions.length) {
      if (e.key === "ArrowUp" && currSugg > 0) {
        setCurrSugg((prev) => prev - 1);
      } else if (e.key === "ArrowDown" && currSugg < suggestions.length - 1) {
        setCurrSugg((prev) => prev + 1);
      } else if (e.key === "Enter" && currSugg >= 0) {
        setInput(suggestions[currSugg]);
        setSuggestions([]);
      }
    } else {
      setCurrSugg(-1);
    }
  }
  function handleBlur(e) {
    // e.preventDefault();
    // setSuggestions([]);
  }
  function handleClick(sugg) {
    console.log(sugg);
    setInput(sugg);
  }
  return (
    <div className="container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
        <button>🔍</button>

        {suggestions.length > 0 && (
          <SuggestionItem
            suggestions={suggestions}
            dataKey={dataKey}
            suggIndex={currSugg}
            loading={loading}
            onSelect={handleClick}
          />
        )}
      </div>
    </div>
  );
}
