// import React from 'react'
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const {authUser,setAuthUser} = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors(
      fullName,
      username,
      password,
      confirmPassword,
      gender
    );
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      // setting  local storage
      localStorage.setItem("chat-user",JSON.stringify(data))
      // // context updating
      setAuthUser(data);

      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

const handleInputErrors = (
  fullName,
  username,
  password,
  confirmPassword,
  gender
) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("please fill all field");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("password  do not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("password must be atleast 8 characters");
    return false;
  }
  return true;
};

export default useSignup;
