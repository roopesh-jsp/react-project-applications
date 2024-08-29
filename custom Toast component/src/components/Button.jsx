import React from "react";

export default function Button({ children, onClick, info }) {
  return <button onClick={() => onClick(info)}>{children}</button>;
}
