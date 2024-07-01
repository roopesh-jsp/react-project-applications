import React, { useState } from "react";

export default function CommentItem({ comment, insertComment }) {
  const [showReplies, setShowReplies] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [votes, setVots] = useState(comment.votes);
  const [flag, setFlag] = useState({
    up: false,
    down: false,
  });
  const [reply, setReply] = useState("");
  function handleClick() {
    setShowReplies(true);
    setShowTextarea((prev) => !prev);
  }
  function handelVotes(type) {
    if (type == "up") {
      if (flag.up === true) {
        setVots((prev) => prev - 1);
        setFlag((prev) => ({
          down: false,
          up: false,
        }));
      }
      if (flag.up === false && flag.down) {
        setVots((prev) => prev + 1);
        setFlag((prev) => ({
          down: false,
          up: true,
        }));
      }
      if (flag.down === false && flag.up === false) {
        setVots((prev) => prev + 1);
        setFlag((prev) => ({
          ...prev,
          up: true,
        }));
      }
    }
    if (type === "down") {
      if (flag.down === false && flag.up) {
        setVots((prev) => prev - 1);
        setFlag((prev) => ({
          down: true,
          up: false,
        }));
      }
      if (flag.down === false && flag.up === false) {
        setFlag((prev) => ({
          ...prev,
          down: true,
        }));
      }
      if (flag.down) {
        setFlag((prev) => ({
          down: false,
          up: false,
        }));
      }
    }
  }
  return (
    <>
      <div className="comment">
        <h4>{comment.content}</h4>
        <span>votes : {votes}</span>
        <span>{comment.timeStamp}</span>
        <div className="cta">
          <button
            onClick={() => handelVotes("up")}
            className={flag.up ? "upClick" : ""}
          >
            up vote
          </button>
          <button
            onClick={() => handelVotes("down")}
            className={flag.down ? "downClick" : ""}
          >
            down vote
          </button>
          <button onClick={handleClick}>reply</button>
        </div>
        <div className="cta">
          {comment?.replies.length > 0 && (
            <button onClick={() => setShowReplies((prev) => !prev)}>
              {showReplies ? "hide replies" : "show replies"}
            </button>
          )}
        </div>
        <div className="cta-2 cta">
          <button>edit</button>
          <button>del</button>
        </div>
      </div>

      <div className="replies">
        {showTextarea && (
          <div className="addComment">
            <textarea onChange={(e) => setReply(e.target.value)} />
            <button onClick={() => insertComment(comment.id, reply)}>
              add reply
            </button>
          </div>
        )}
        {showReplies &&
          comment.replies &&
          comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
      </div>
    </>
  );
}
