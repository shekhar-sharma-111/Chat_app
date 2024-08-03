
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Context/AuthContext.jsx";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const {authUser, setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    if (!username || !password) {
      toast.error("all field  are required.");
       setLoading(false);
      return;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
     

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Setting local storage
      setAuthUser(data)
      localStorage.setItem("chat-user", JSON.stringify(data));

      if (data.success) {
        toast.success("Login successful");
       
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        toast.error("Request timed out. Please try again.");
      } else {
        toast.error(error.message || "An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;
