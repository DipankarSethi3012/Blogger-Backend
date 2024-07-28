const express=require('express');
const app=express();

require('dotenv').config(); //putting all stuff of env into proccess object

const Port=process.env.PORT || 8000;



app.use(express.json()) //using body parser

const blogRoutes=require('./router/blog');
app.use("/api/v1",blogRoutes); //creating a mapping 

app.get("/",(req,res)=>{
    res.send("<h1>This is blog home page</h1>"); //sending message to the homepage
})

app.listen(Port,()=>{
    console.log("server started");
}) //starting the server 

const dbConnect=require('./config/database');
dbConnect();