import React from "react";
import Comments from "./components/Comments";
import { commentss } from "../src/data/data.js";
import useComments from "./hooks/useComments.jsx";
export default function App() {
  const { comments, insertComment } = useComments(commentss);
  return (
    <>
      <Comments comments={comments} insertComment={insertComment} />
    </>
  );
}
