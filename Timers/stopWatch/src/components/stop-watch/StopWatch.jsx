import { useState, useRef } from "react";
import classes from "./stopwatch.module.css";
import { useEffect } from "react";
export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const watchRef = useRef();
  const startTime = useRef(0);
  useEffect(() => {
    if (isRunning) {
      watchRef.current = setInterval(() => {
        setTime(Date.now() - startTime.current);
      }, 10);
    }
    return () => {
      clearInterval(watchRef.current);
    };
  }, [isRunning]);
  function handleStart() {
    setIsRunning(true);
    startTime.current = Date.now() - time;
  }
  function handlestop() {
    setIsRunning(false);
  }
  function handleReset() {
    setIsRunning(false);
    setTime(0);
  }
  function formatter() {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const mins = Math.floor((time / (1000 * 60)) % 60);
    const secs = Math.floor((time / 1000) % 60);
    const milli = Math.floor(time % 100);
    const formattedTime = `${String(mins).padStart(2, "0")} : ${String(
      secs
    ).padStart(2, "0")} : ${String(milli).padStart(2, "0")}`;
    return formattedTime;
  }
  return (
    <div className={classes.stopwatch}>
      <h1>timer</h1>
      <div className={classes.time}>{formatter()}</div>
      <div className={classes.controls}>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleStart}>start</button>
        <button onClick={handlestop}> stop</button>
      </div>
    </div>
  );
}
