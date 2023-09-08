import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import loginimg from "../Images/login-side.webp";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userNameChangeHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
    console.log(username);
  };

  const passwordChangeHandler = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="h-screen bg-white w-full flex justify-center items-center">
        <div className="w-5/6 h-5/6 bg-teal-100 flex justify-center items-center rounded-xl  ">
          <div className="w-5/6 h-5/6 bg-cyan-50 rounded-2xl flex items-center">
            <div className="w-2/4 h-3/4 my-16 ml-8 bg-white  rounded-3xl">
              <h1 className="text-center p-2 text-xl font-medium">Login</h1>
              <form>
                <div className="mt-5 flex justify-center items-center">
                  <div className=" border-2 border-blue-200 rounded w-3/4 py-2 px-6 text-gray-700 ">
                    <PersonIcon className="pr-2" />
                    <input
                      className="appearance-none leading-tight focus:outline-none w-72"
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      onChange={userNameChangeHandler}
                      required
                    ></input>
                  </div>
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <div className=" border-2 rounded w-3/4 py-2 px-6 text-gray-700">
                    <LockIcon className="pr-2" />
                    <input
                      className="appearance-none leading-tight focus:outline-none focus:shadow-outline w-72"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    ></input>
                  </div>
                </div>
                {/* <div className="ml-16 flex ">
                  <input
                    className="mr-2 leading-tight cursor-pointer"
                    type="checkbox"
                  ></input>
                  <span className="text-sm">Remember Password</span>
                  <span className="ml-20 mr-8 text-blue-600 underline underline-offset-4 cursor-pointer">
                    Forgot Password
                  </span>
                </div> */}
                <button
                  onSubmit={onSubmitHandler}
                  className=" w-3/4 ml-16 mt-8 bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Login
                </button>
                <div className="mt-4">
                  <span className="flex justify-center items-center">
                    No Account yet ?{" "}
                    <span className="text-blue-600 underline underline-offset-4 cursor-pointer">
                      {" "}
                      Register
                    </span>
                  </span>
                </div>
                <div className="flex justify-evenly mt-6">
                  <div className="w-12 h-12 border border-gray-600 rounded flex justify-center">
                    <GoogleIcon className="mt-3" />
                  </div>
                  <div className="w-12 h-12 border border-gray-600 rounded flex justify-center">
                    <TwitterIcon className="mt-3" />
                  </div>
                  <div className="w-12 h-12 border border-gray-600 rounded flex justify-center">
                    <FacebookIcon className="mt-3" />
                  </div>
                  <div className="w-12 h-12 border border-gray-600 rounded flex justify-center">
                    <AppleIcon className="mt-3" />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-2/4 h-3/4  mr-4 flex items-center">
              <img className="w-4/5 ml-12 " src={loginimg} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
