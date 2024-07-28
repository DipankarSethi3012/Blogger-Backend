const mongoose=require('mongoose');
require('dotenv').config(); //putting env stuff into process object
//function to connect with databse
const dbConnect=async(req,res)=>{

    const dbUrl=process.env.DATABASE_URL;

    if(!dbUrl){ //What if we unable to get ddatabase url
        console.log("unable to get dbUrl");
        process.exit(1); // finishing process with error
    }

    
        try{ //this block is executed only when there is no error
           await mongoose.connect(dbUrl,{}); //await beacuse connectig with database
            console.log("Connection with database established successfully");
        }
        catch(err){ //if try blocks find any errors the control is shifted to this block and it prints error
            console.log("an error has occured while connecting with databse");
            console.error(err.message);
        }
}



module.exports=dbConnect; // exporting function so that is can be used in other folders/files