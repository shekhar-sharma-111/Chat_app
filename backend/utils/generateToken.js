import jwt from 'jsonwebtoken';

const generateToken=(userId,res)=>{
    const secret='hello';
    // const secret=process.env.JWT_SECRET;
    const token=jwt.sign({userId},secret,{expiresIn:'1d'})
    res.cookie('jwt',token,{
       maxage:1*24*60*60*1000,
       httpOnly:true,
       secure:false, // process.env.NODE_ENV!=='development'
       secure: process.env.NODE_ENV!=='development',
       sameSite:'strict' 
       

    })
}
export default generateToken;