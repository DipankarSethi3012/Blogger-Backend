const { default: mongoose } = require('mongoose');
const mongosoe=require('mongoose');

const LikeModel=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId, //object id's of post that has been liked
        ref:"Post" //refering to post model
    },
    user:{ //which user has liked the post
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Like",LikeModel);