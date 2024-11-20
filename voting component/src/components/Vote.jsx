import React, { useEffect, useState } from "react";
import VoteOpt from "./VoteOpt";

export default function Vote({ question, options }) {
  const [vote, setVote] = useState("");
  const [totalVotes, SetTotalVotes] = useState(0);
  function caluclateVotes() {
    let votes = options.reduce((acc, option) => acc + option.votes, 0);
    SetTotalVotes(votes);
    console.log(totalVotes);
  }
  //   useEffect(() => {
  //     caluclateVotes();
  //   }, [vote]);
  return (
    <div className="voteBox">
      <h1 className="question">{question}</h1>
      {options.map((opt, idx) => (
        <VoteOpt key={idx} option={opt} vote={vote} setVote={setVote} />
      ))}
    </div>
  );
}
