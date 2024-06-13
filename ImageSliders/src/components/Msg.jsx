import { useContext } from "react";
import { ExContext } from "../store/Example-context";

export default function Msg() {
  const exCtx = useContext(ExContext);
  return (
    <div>
      <button onClick={exCtx.dec}>-</button>
      <span>{exCtx.count}</span>
      <button onClick={exCtx.inc}>+</button>
    </div>
  );
}
