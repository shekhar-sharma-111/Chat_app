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
       className="h-6 text-white cursor-pointer hover:h-8 w-8" />):(<span className="loading loading-spinner"></span>)}
    </div>
  );
}

export default LogoutButton;
