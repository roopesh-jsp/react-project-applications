import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Theme-context";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <button onClick={toggleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </nav>
  );
}
