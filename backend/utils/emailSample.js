function signUpMailSample(verificationCode){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{
                padding : 0 ; 
                margin : 0 ; 
                box-sizing: border-bo ; ;
            }
    
            body{
                width : 100% ; 
                height : 100vh ; 
                display : flex ; 
                align-items: center ;
                justify-content: center ;
                flex-direction: column ;
            }
    
            .container{
                width : 50% ; 
                margin : auto ; 
                align-items: center ;
                border : 1px solid black ; 
                border-radius: 1.2rem;
                background-color: rgba(128, 128, 128, 0.679);
                padding : 2rem 2rem ; 
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
    
            .heading{
                font-size : 1.2rem ; 
                text-align: center ;
                margin : 2rem auto ; 
            }
    
            .content{
                font-size : 1.2rem ; 
                font-weight: 400 ;
                margin-bottom : 2rem ; 
                display : block ; 
            }
            .verification_code{
                text-align: center ;
                font-size : 5rem ;
                font-weight: 900;
                letter-spacing: 6px ; 
                color : cyan ; 
            }
            a{
                color : blue ; 
                text-decoration: none ;
                margin-bottom : 1.2rem ; 
            }
    
            p{
                margin : .5rem 0 ; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="heading">
                <h2>Thank Your for Signing Up in Our Website</h2>
            </div>
            <div class="content">
                <h4>Here below is your verification code.<i>This will expire in 5min</i></h4>
            </div>
            <div class="verification_code">
                ${verificationCode}
            </div>
            <div class="footer">
                <p>Sender : <a href="">Shuvo.com</a></p>
                <p>Email : <a href="mailto:shuvo.dev@northsouth.edu">shuvo.dev@northsouth.edu</a></p>
                <p>Mobile : +88 01810-633994</p>
                <p>Address : Norda,Baridhara,Gulshan-2,Dhaka</p>
            </div>
        </div>
    </body>
    </html>` ;  
}

export {signUpMailSample} ; 