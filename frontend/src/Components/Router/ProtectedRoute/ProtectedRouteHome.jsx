// import React from 'react'
import { useAuthContext } from "../../../Context/AuthContext"
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function ProtectedRouteHome({element}) {
    const {authUser} =useAuthContext();
    // const authUser =true;
  
  return (authUser?element:<Navigate to='/login'/>
  )
}

export default ProtectedRouteHome