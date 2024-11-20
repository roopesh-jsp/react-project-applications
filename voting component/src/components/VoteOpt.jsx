import React, { useState } from "react";

export default function VoteOpt({ option, vote, setVote }) {
  function handleVote(opt) {
    setVote((prev) => {
      if (prev == opt) {
        setVote("");
      } else {
        setVote(opt);
      }
    });
  }
  return (
    <div className="option" onClick={() => handleVote(option.opt)}>
      <span className={`check ${vote === option.opt ? "voted" : ""}`}></span>
      <span>{option.opt}</span>
    </div>
  );
}
