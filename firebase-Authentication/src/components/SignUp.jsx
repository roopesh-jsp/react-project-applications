import React from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
export default function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    createUserWithEmailAndPassword(auth, email, password)
      .then((x) => console.log(x))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h2>form</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input
          type="password"
          name="password"
          placeholder="re-enter password"
        />
        <button>sign -up</button>
        <p>
          have a accout ? <Link to="/"> login</Link>
        </p>
      </form>
    </div>
  );
}
