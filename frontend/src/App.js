import React, { useContext } from 'react';
import "./App.css";
import Activity from "./components/MainLayout/Activity";
import Friends from "./components/MainLayout/Friends";
import Group from "./components/MainLayout/Group";
import Navbar from "./components/MainLayout/Navbar";
import Posts from "./components/MainLayout/Posts";
import Profile from "./components/MainLayout/Profile";
import Stories from "./components/MainLayout/Stories";


import Login from './components/Auth/Login';
import Register from './components/Auth/Register'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";


import { AuthContext } from './components/Context/AuthContext';

function App() {

  const { user } = useContext(AuthContext);

  const Layout = () => {
    return (
      <>
        <div className="bg-zinc-100">
          <Navbar />
          <div className="grid grid-cols-12 gap-4 m-4">
            <div className="col-span-2 space-y-4">
              <Group />
              <Friends />
            </div>
            <div className="col-span-7 space-y-4">
              <Stories />
              <Posts />
            </div>
            <div className="col-span-3 space-y-4">
              <Profile />
              <Activity />
            </div>
          </div>
        </div>
      </>
    );
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
    },
    {
      path: "/login",
      element: user === null ? <Login /> : <Layout />
    },
    {
      path: "/register",
      element: user === null ? <Register /> : <Layout />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
