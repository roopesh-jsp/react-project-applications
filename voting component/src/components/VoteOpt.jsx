import React, { useState } from "react";

export default function VoteOpt({ option, vote, setVote }) {
  function handleVote(opt) {
    console.log(opt);

    setVote((prev) => {
      if (prev == opt) {
        return "";
      } else {
        return opt;
      }
    });
  }
  // console.log(option);

  return (
    <div className={` ${vote === option.opt ? "outline box" : "box"}`}>
      <div className="option" onClick={() => handleVote(option.opt)}>
        <span className={`check ${vote === option.opt ? "voted" : ""}`}></span>
        <span>{option.opt}</span>
        {vote.length !== 0 && <div className="percentage">{option.votes}%</div>}
      </div>
      {vote.length !== 0 && (
        <div className="progress_bar">
          <div
            className="progress"
            style={{
              width: `${option.votes}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
