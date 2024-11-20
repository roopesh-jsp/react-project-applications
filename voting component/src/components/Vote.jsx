import React, { useEffect, useState } from "react";
import VoteOpt from "./VoteOpt";

export default function Vote({ question, options }) {
  const [vote, setVote] = useState("");

  return (
    <div className="voteBox">
      <h1 className="question">{question}</h1>
      {options.map((opt, idx) => (
        <VoteOpt key={idx} option={opt} vote={vote} setVote={setVote} />
      ))}
    </div>
  );
}
