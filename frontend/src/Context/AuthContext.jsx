// import { createContext, useContext } from "react";
// import { useState } from "react";

// export const AuthContext = createContext();

// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// // eslint-disable-next-line react/prop-types
// export const AuthContextProvider =async ({ children }) => {
//   const userdata=JSON.parse(localStorage.getItem("chat-user"))
//   const [authUser, setAuthUser] = useState(
//      userdata?.user || null
//   );

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("chat-user"));
    if (userdata && userdata.user) {
      setAuthUser(userdata.user);
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
