// import React from 'react'

import GenderCheckbox from "./GenderCheckbox"

function Signup() {
  return (
    <div className="fles flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-grey-300 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-blue-300">
        <i>SignUp</i>
        <span className="text-yellow-400 ">
          {" "}
          <b>KNOCK KNOCK</b>
        </span>
      </h1>
      <form>
        <div>
          <label className="label p-2">
            <span className="text-grey-200 text-base label-text">Full name</span>
          </label>
          <input
            type="text"
            placeholder="Enter fullname"
            className="w-full input input-border h-10"
          />
        </div>
        <div className="">
          <label className="label p-2">
            <span className=" text-white text-base label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full input input-border h-10"
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
          />
        </div>
        <div className="">
          <label className="label p-2">
            <span className=" text-white text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full input input-border h-10"
          />
        </div>
      <GenderCheckbox/>

           <a href="/login" className="text-white hover:underline hover:text-blue-600  inline-block">
          Already have an account ?
        </a>
        
       <div><button className="btn btn-block btn-sm mt-2">Signup</button></div>
      </form>
    </div>
  </div>
  )
}

export default Signup
