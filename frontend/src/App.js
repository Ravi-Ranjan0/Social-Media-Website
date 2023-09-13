import React, { useState } from 'react';
import "./App.css";
import MainLayout from "./components/MainLayout/MainLayout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Bio from "./components/Bio/Bio";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

<<<<<<< HEAD
// let [currentUser, setCurrentUser] = useState(false);
=======
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
>>>>>>> backend

// function changeUser(user) {
//   setCurrentUser = user;
// }

// const ProtectedRoute = ({ children }) => {
//   if (!currentUser) {
//     return <Navigate to="/login" />
//   }

//   return children;
// }

<<<<<<< HEAD
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
    path: "/edit",
    element: <Bio />,
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

const App = () => {
  return <RouterProvider router={router} />;
};

=======
  let [currentUser, setCurrentUser] = useState(false);

  function changeUser(user) {
    setCurrentUser = user;
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      )
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
>>>>>>> backend
export default App;
