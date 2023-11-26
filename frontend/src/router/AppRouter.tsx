import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Header from "../components/header/Header";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const page = (component: string) => React.lazy(() => import(`../${component}`));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function AppRouter() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default AppRouter;
