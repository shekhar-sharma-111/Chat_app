// import React from 'react'

import { useState } from "react";
import uselogin from "../../Components/hooks/useLogin";

function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
 const{loading,login}= uselogin()
  const handleSubmit =async (e)=>{
    e.preventDefault();
    login(username,password)

  }
  return (
    <div className="fles flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-grey-300 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-blue-300">
          <i>Login</i>
          <span className="text-yellow-400  ">
            {" "}
            <b>KNOCK KNOCK</b>
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-white text-base label-text">Username</span>
            </label>
            <input
              
              type="text"
              placeholder="Enter username"
              className="w-full input input-border h-10"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="">
            <label className="label p-2">
              <span className=" text-white text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-border h-10"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
             <a href="/signup" className="text-white hover:underline hover:text-blue-600 mt-2 inline-block">
            SignUp
          </a>
          </div>
         <div><button className="btn btn-block btn-sm mt-2" disabled={loading}>Login</button>
         {loading? <span className="loading loading-spinner"></span>:"Login"}
         </div>
        </form>
      </div>
    </div>
  );
}

export default Login;


