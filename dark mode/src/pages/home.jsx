import React from "react";
import Header from "../components/Header";
import { useTheme } from "../Theme-context";

export default function Home() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="page">
      <Header />
      <h1>home</h1>
    </div>
  );
}
