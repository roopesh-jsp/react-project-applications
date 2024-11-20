import React from "react";
import Vote from "./components/Vote";
import { contest_1 } from "./data";
export default function App() {
  return (
    <div>
      <Vote question={contest_1.question} options={contest_1.options} />
    </div>
  );
}
