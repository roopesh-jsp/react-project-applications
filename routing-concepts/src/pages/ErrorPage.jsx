import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.log(err);

  let msg = "errorr .... ";
  if (err.data.message) {
    msg = err.data.message;
  }
  return <div>{msg}</div>;
}
