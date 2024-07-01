import React, { useState } from "react";
import CommentItem from "./CommentItem";
import useComments from "../hooks/useComments";

export default function Comments({ comments, insertComment }) {
  const [text, setText] = useState("");

  return (
    <section>
      <h1>comments</h1>
      <div className="addComment">
        <textarea onChange={(e) => setText(e.target.value)} />
        <button onClick={() => insertComment(undefined, text)}>
          add comment
        </button>
      </div>
      <hr />
      <div className="comments">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            insertComment={insertComment}
          />
        ))}
      </div>
    </section>
  );
}
