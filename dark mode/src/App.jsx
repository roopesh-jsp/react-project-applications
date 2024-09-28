import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Themecontext, { useTheme } from "./Theme-context";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <Themecontext>
      <RouterProvider router={router} />
    </Themecontext>
  );
}
