import jwt from 'jsonwebtoken';

const generateToken=(userId,res)=>{
    const secret=process.env.JWT_SECRET;

    const token=jwt.sign({userId},secret,{expiresIn:'15d'})
    res.cookie('jwt',token,{
       maxage:1*24*60*60*1000,
       httpOnly:true,
       sameSite:'strict' ,
       secure: process.env.NODE_ENV!=='development',
        // secure:'production',
    })
}
export default generateToken;
