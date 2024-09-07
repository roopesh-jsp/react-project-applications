import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import User from "./pages/User";
import Comments from "./pages/Comments";
import { loader as UsersLoader } from "./pages/User";
import { loader as CommentsLoader } from "./pages/Comments";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/user", element: <User />, loader: UsersLoader },
      { path: "/comments", element: <Comments />, loader: CommentsLoader },
      { path: "/products", element: <Products /> },
      { path: "/products/:pid", element: <SingleProduct /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
