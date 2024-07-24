// import React from 'react'
import {
    createBrowserRouter
  
  } from "react-router-dom"
import Layout from "./Layout";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";




    const router = createBrowserRouter([
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
              },
            
              
          ],
        },
      ]);
 

export default router