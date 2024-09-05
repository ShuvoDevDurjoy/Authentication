import express from "express" ; 
import dotenv from "dotenv" ; 
import authRoutes from "./routes/auth.routes.js"
import { DbConnection } from "./database/db.connection.js";
import {fileURLToPath} from 'url' 
import {dirname} from 'path'
import path from "path";
import cors from 'cors'
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url) ; 
const __dir = dirname(__filename) ; 
console.log(__dir) ; 
dotenv.config() ; 

const app = express() ;

app.use(cookieParser()) ; 

app.use(express.json()) ; 
app.use(cors({
    origin : "http://localhost:3000"
}))

app.use(express.static(path.join(__dir,'Images')))

app.get("/",(req,res)=>{
    res.send("This is just for practice test.") ; 
}) ;

app.use("/api/auth",authRoutes) ; 


app.listen(process.env.PORT,()=>{
    DbConnection() ; 
    console.log("Server is listening on port 5000.........") ; 
}) ; 