const mongoose=require('mongoose');

const PostSchema= new mongoose.Schema({
    user:{
        type: String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{ //creating an array because a post can have multiple likes
        type:mongoose.Schema.Types.ObjectId,//arrays of objectId's of likes on the posts that refer to Like model
        ref:"Like", //referring to Like model
        //in refer type the model name
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId, //arrays of objectId's of comments on posts that refer to comment model
        refer:"Comment" //refering to comment model
    }]

});

module.exports=mongoose.model("Post",PostSchema);