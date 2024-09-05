import { generateToken } from "../utils/generateToken..js";
import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs" ; 
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const signup = async (req,res)=>{

    console.log("Starting of the signup section") ; 
    const {email , password , name} =  req.body ; 
    if(!email || !password ||!name){
        return res.json({
            success : false , 
            message : "Please fill out all the fields."
        }) ; 
    }


    const userAlreadyExists = await User.findOne({email}) ; 
    // console.log(userAlreadyExists) ; 
    if(userAlreadyExists){
        return res.json({
            success : false , 
            message : "You are alreay signed up.please try login."
        })
    }

    const hashPassword = await bcryptjs.hash(password , 12) ; 
    const verificationToken = generateToken() ; 
    const user = new User({
        email , 
        password : hashPassword , 
        name ,
        verificationToken,
        verificationTokenExpiresAt : Date.now() + 24 * 60 * 60 * 1000 
    }) ; 


    const savedUser = await user.save() ; 

    generateTokenAndSetCookie(res,savedUser._id) ; 
    
    


    res.status(200).json({
        success : true , 
        message : "you are successfully signed up.",
        user : {
            ...user._doc,
            password : undefined
        },
        
    })
}

export const login = (req,res)=>{
    res.send("This is login page.") ; 
}

export const logout  =(req,res)=>{
    res.send("This is logout page.") ; 
}

export const verifyToken = (req,res)=>{

}

export const authentication = async (req,res)=>{
    console.log("authentication request made to server")
    const {token} = req.cookies ; 
    if(!token){
        return res.status(200).json({
            success : false , 
            message : "It seems you are not signed up or login yet" 
        })
    }


}