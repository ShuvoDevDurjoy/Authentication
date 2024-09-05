import mongoose from "mongoose" ; 

const DbConnection = async ()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGOOSE_STRING) ; 
        console.log(connection.connection.host) ; 
    }catch(e){
        console.log("Connection to database failed... "+e) ; 
    }
}

export {DbConnection}