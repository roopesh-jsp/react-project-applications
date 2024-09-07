import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <h1>haii</h1>
      <Outlet />
    </>
  );
}
