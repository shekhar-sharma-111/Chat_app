// import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from "../hooks/useLogout";
function LogoutButton() {
  // eslint-disable-next-line no-unused-vars
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading? (<CiLogout 
      onClick={logout}
       className="mt-4 text-white hover:text-amber-300 cursor-pointer w-6 h-6" />):(<span className="loading loading-spinner"></span>)}
    </div>
  );
}

export default LogoutButton;
