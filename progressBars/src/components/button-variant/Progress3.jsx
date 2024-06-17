import { useState } from "react";
import classes from "./progress3.module.css";
export default function Progress3() {
  const [progress, setProgress] = useState(0);
  function handlePrev() {
    setProgress((prev) => {
      if (prev > 0) {
        return prev - 20;
      }
      return prev;
    });
  }
  function handleNxt() {
    setProgress((prev) => {
      if (prev < 100) {
        return prev + 20;
      }
      return prev;
    });
  }
  return (
    <div className={classes.main}>
      <div className={classes.progressBar}>
        <div
          className={classes.progress}
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <div className={classes.controls}>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNxt}>Next</button>
      </div>
    </div>
  );
}
