import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";
export default function Home() {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ uid: user.uid, email: user.email });
      } else {
        setUser("");
      }
    });
  }, []);
  return (
    <div>
      <p>home</p>
      {<h1>{user?.email}</h1>}
      <button onClick={() => signOut(auth)}>
        {" "}
        <Link to="/"> log-out</Link>{" "}
      </button>
    </div>
  );
}
