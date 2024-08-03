/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { useAuthContext } from "./AuthContext";
import toast from "react-hot-toast";

const SocketContext = createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext)
}


export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  // console.log(authUser)
  useEffect(() => {
   
    
    if (authUser) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id ,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers",(users)=>{
         setOnlineUsers(users);
      })

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
