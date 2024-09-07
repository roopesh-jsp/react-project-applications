import React from "react";
import { json, useLoaderData } from "react-router-dom";

export default function Comments() {
  const x = useLoaderData();

  const comments = x.splice(0, 10);

  return (
    <div className="main">
      {comments.map((user) => (
        <h4 key={user.id}>
          {user.name} {user.id}
        </h4>
      ))}
    </div>
  );
}
export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  if (!res.ok) {
    throw json({ message: "error in comments" });
  }

  return res;
};
