import React from // useState, useContext
"react";
import "./App.css";
// import Activity from "./components/MainLayout/Activity";
// import Friends from "./components/MainLayout/Friends";
// import Group from "./components/MainLayout/Group";
// import Navbar from "./components/MainLayout/Navbar";
// import Posts from "./components/MainLayout/Posts";
// import Profile from "./components/MainLayout/Profile";
// import Stories from "./components/MainLayout/Stories";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from "react-router-dom";
// import { AuthContext } from "./components/Context/AuthContext";
import MainLayout from "./components/MainLayout/MainLayout";

function App() {
  // const user = useContext(AuthContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <MainLayout />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
