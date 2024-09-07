import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main">
      <Link to="/user">USERS</Link>
      <Link to="/comments">Comments</Link>
    </div>
  );
}
