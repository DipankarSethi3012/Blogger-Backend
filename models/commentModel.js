const mongoose=require('mongoose');

const commentModel=mongoose.Schema({
    post:{ //which post has received a comment
        type:mongoose.Schema.Types.ObjectId, 
        refer:"Post",
    },
    user:{ //which user has commented
        type:"String",
        required:true,
   },
   body:{ //what's the comment
        type:String,
        require:true,
   }
})

module.exports=mongoose.model("Comment",commentModel);