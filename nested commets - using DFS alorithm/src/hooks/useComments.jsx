import React, { useState } from "react";

function insertNode(tree, newcomment, id) {
  return tree.map((comment) => {
    if (id === comment.id) {
      return {
        ...comment,
        replies: [...comment.replies, newcomment],
      };
    } else if (comment.replies && comment.replies.length > 0) {
      return {
        ...comment,
        replies: insertNode(comment.replies, newcomment, id),
      };
    }
    return comment;
  });
}

export default function useComments(intialComments) {
  const [comments, setComments] = useState(intialComments);
  function insertComment(commentId = undefined, content) {
    const newComment = {
      id: Date.now(),
      content,
      votes: 0,
      timeStamp: new Date().toISOString(),
      replies: [],
    };
    if (commentId) {
      setComments((prev) => insertNode(prev, newComment, commentId));
    } else {
      setComments((prev) => [newComment, ...prev]);
    }
  }
  return {
    comments,
    insertComment,
  };
}
