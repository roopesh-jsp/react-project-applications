import React from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const param = useParams();
  const id = param.pid;

  return <div>{id}</div>;
}
