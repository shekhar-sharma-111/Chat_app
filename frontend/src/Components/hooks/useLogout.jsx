import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../Context/AuthContext";
const useLogout =()=>{
    // eslint-disable-next-line no-unused-vars
    const [loading,setLoading]=useState(false)
    const {setAuthUser}= useAuthContext()
    const logout = async ()=>{
        setLoading(true)
        try {
            const res=await fetch('api/auth/logout',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
            });
            const data= await res.json()
            if(data.error){
                throw new Error(data.error)
            }
           
                setAuthUser(null)
                toast.success(data.message)
                localStorage.removeItem('chat-user')
              
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,logout};
}

export default useLogout;