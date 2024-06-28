import React from "react";

export default function SuggestionItem({
  suggestions,
  dataKey = false,
  suggIndex,
  loading,
  onSelect,
}) {
  return (
    <ul className="suggestion_item">
      {loading ? (
        <p>loading...</p>
      ) : (
        <span>
          {suggestions.map((sugg, idx) => {
            const currSugg = dataKey ? sugg[dataKey] : sugg;

            return (
              <li
                key={idx}
                className={idx === suggIndex ? "active" : ""}
                onClick={() => onSelect(currSugg)}
              >
                {currSugg}
              </li>
            );
          })}
        </span>
      )}
    </ul>
  );
}
