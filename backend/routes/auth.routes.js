import express from "express" ; 
import { authentication, login, logout, signup } from "../controller/auth.controller.js";

//declare router for authentication
const router = express.Router() ; 
router.post("/signup",signup) ; 

router.get("/login",login)

router.get("/logout",logout)

router.get('/authentication',authentication) ; 

export default router ; 