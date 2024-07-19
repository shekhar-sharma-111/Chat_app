import jwt from 'jsonwebtoken';

const generateToken=(userId,res)=>{
    const secret=process.env.JWT_SECRET;

    const token=jwt.sign({userId},secret,{expiresIn:'15d'})
    res.cookie('jwt',token,{
    //    maxage:1*24*60*60*1000,
    //    httpOnly:true,
    //    secure: process.env.NODE_ENV!=='development',
    //    sameSite:'strict' 
    httpOnly: true,
    secure: false, // Use false in development for testing with HTTP
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    sameSite:'strict'
    })
}
export default generateToken;