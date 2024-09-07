import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function User() {
  const users = useLoaderData();
  console.log(users);

  //   const users = [];
  return (
    <div className="main">
      {users.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}
    </div>
  );
}
export const loader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   if (!res.ok) {
  //     throw new Error("failed to fetch");
  //   }
  //   const data = await res.json();

  return res;
};
