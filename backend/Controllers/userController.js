import { User } from "../Models/UserModel.js"

export const getUserForSidebar=async(req,res)=>{
    try {
        const loggedinId=req.user._id
      const allUsers=await User.find({
        _id:{$ne:loggedinId} // if we dont  want ourselves to appear for messaging
      })
    //   const allUsers=await User.find({
    //    // if we wants ourselves to appear for messaging
    //   })
    !allUsers&&
    res.status(404).json({message:"No users found"}).select('-password')
    res.status(200).json(allUsers)
    } catch (error) {
        console.log("error in user controller:"+error.message)
        res.status(500).json({error:"Internal server error"})
    }
}