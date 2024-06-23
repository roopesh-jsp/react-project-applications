import { useContext } from "react";
import classes from "./accordion2.module.css";
import { accordionContext } from "./accordion2";
export default function Accordion2Item({ title, children, id }) {
  const { openId, handleClose, handleOpen } = useContext(accordionContext);
  function handleClick() {
    if (openId != id) {
      handleOpen(id);
    } else {
      handleClose();
    }
  }
  return (
    <li className={classes.accordionItem}>
      <h1 onClick={handleClick} className={classes.h1}>
        {title}{" "}
        <span className={openId == id ? `${classes.rotate}` : ""}>+</span>
      </h1>
      <div
        className={
          openId === id
            ? `${classes.accordtion_content} ${classes.open}`
            : `${classes.accordtion_content}`
        }
      >
        {children}
      </div>
    </li>
  );
}
