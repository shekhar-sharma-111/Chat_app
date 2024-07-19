import jwt from 'jsonwebtoken'
import {User}  from '../Models/UserModel.js';

const protectRoutes= async (req,res,next)=>{
    try{
        // const token=req.cookies.jwt;
       
        // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njk4MDY5OTAwNTNjOTg2NzYyMzU2MTciLCJpYXQiOjE3MjEzMjI1ODIsImV4cCI6MTcyMTQwODk4Mn0.HRY9K8Uy-HOrEQhXMXY8YtGFMCFZ0L2B8HcU0SfOZqQ";
        const token = req.header('Authorization')?.split(' ')[1]; 
        console.log(req.cookies)
        if(!token){
            return res.status(401).json({error:"unauthorized -No token Provided"})
        }
        console.log(token)
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET); 
        
        if(!decoded){
            return res.status(401).json({error:"unauthorized -No token Provided"})
        }
        // console.log(decoded)
        const user=await User.findById(decoded.userId).select("-password")
        if (!user){
            return res.status(404).json({error:"user not found"})
        }
        // console.log(user)
        req.user=user;
        next();
    }
    catch(error){
        console.log("error in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoutes;