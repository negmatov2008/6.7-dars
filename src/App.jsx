import { useState } from "react";
import {
  Navigate,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Rooot";
import Content from "./pages/Content";
import Limiting from "./components/Limiting";
import Test from "./components/Test";
import Responses from "./components/Responses";
import Users from "./components/Users";
import Main from "./pages/Main";

const routerr = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
    errorElement: <div>Sizda hatolik yuz berdi</div>,
  },
  {
    path: "/docs/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Navigate to={"test"} />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "limiting",
        element: <Limiting />,
      },
      {
        path: "responses",
        element: <Responses />,
      },
      {
        path: "user",
        element: <Users />,
      },
    ],
  },
  {
    path: "/github",
    element: <Navigate to={"/"} />,
  },
]);

function App() {
  return <RouterProvider router={routerr} />;
}

export default App;
