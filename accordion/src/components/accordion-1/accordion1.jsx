import classes from "./accordion1.module.css";
import { useState } from "react";
export default function Accordion1({ data }) {
  const [isActive, setIsActive] = useState(null);
  function handleClick(i) {
    if (i == isActive) {
      setIsActive(undefined);
    } else {
      setIsActive(i);
    }
  }
  return (
    <>
      <div className={classes.wrapper}>
        {data.map((item, idx) => (
          <div key={idx} className={classes.accordion}>
            <div className={classes.title}>
              <h1>{item.title}</h1>
              <span
                onClick={() => handleClick(idx + 1)}
                className={isActive === idx + 1 ? `${classes.active}` : ""}
              >
                +
              </span>
            </div>
            <div
              className={
                isActive === idx + 1
                  ? `${classes.answer} ${classes.active}`
                  : classes.answer
              }
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

//
