// import React from 'react'
import { useAuthContext } from "../../../Context/AuthContext"
import { Navigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function ProtectedRoute({element}) {
    const {authUser} =useAuthContext();
    // const authUser =false;
  
  return (authUser?<Navigate to='/'/>:element 
  )
}

export default ProtectedRoute