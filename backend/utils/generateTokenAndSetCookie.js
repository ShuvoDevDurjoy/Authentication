import jwt from "jsonwebtoken" ; 

export const generateTokenAndSetCookie = async(response , id)=>{
    const token = jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn : "7d",
    }) ;
    
    console.log(token) ; 

    response.cookie("token",token,{
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        sameSite : "strict",
        maxAge : 7*24*60*60*1000,
    })
    console.log(process.env.JWT_SECRET) ; 

    return token  ;
}