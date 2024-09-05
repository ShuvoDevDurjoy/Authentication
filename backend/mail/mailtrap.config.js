import nodemailer from 'nodemailer' ; 
import { mailSample1 } from '../utils/emailSample.js';

const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com', 
    port : 587 , 
    secure : false , 
    auth : {
        user : process.env.MAIL_ADDRESS,
        pass : process.env.MAIL_PASS
    }
}) ; 


const details = {
    from : process.env.MAIL_ADDRESS, 
    to : process.env.MAIL_ADDRESS,
    subject : 'This is a test mail',
    text : "this is a test mail text.",
    html : mailSample1() 
} ; 


transporter.sendMail(details,(err,info)=>{
    if(err){
        console.log("This is the error that is occured",err.message) ; 
    }
    else{
        console.log("Sending email using nodemailer is successful",info) ; 
    }
})