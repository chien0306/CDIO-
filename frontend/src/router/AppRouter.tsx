import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import { routeList } from './router-list'
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ErrorPage from '../pages/errorPage/ErrorPage';
import Header from '../components/header/Header';

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
  )
}

export default AppRouter;
