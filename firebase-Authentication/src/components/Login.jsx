import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";

function Login() {
  const [err, setErr] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData);

    signInWithEmailAndPassword(auth, email, password)
      .then((x) => {
        console.log("logged in");
        navigate("/home");
      })
      .catch((err) => setErr(err));
  }
  return (
    <div className="box">
      <h2>form</h2>
      {err && <p>{err.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>login</button>
        <p>
          dont have a accout ? <Link to="/signup"> sig-up </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
