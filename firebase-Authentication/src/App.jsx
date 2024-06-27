import Home from "./components/Home";
import Login from "./components/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
const route = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
