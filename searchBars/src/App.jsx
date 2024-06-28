import React from "react";
import Serachbar from "./components/Serachbar";
const data = [
  "apple",
  "banna",
  "mango",
  "grape",
  "chilli",
  "pineapple",
  "papa",
  "morya",
  "haii",
  "hello",
  "byee",
  "good",
  "bad",
];
async function fetchData(query) {
  const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
  if (!res.ok) {
    throw new Error("failed to fech the data...");
  }
  const data = await res.json();
  return data.recipes;
}
export default function App() {
  return <Serachbar staticData={data} />;
}
