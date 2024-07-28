const Comment=require('../models/commentModel');
const Post=require('../models/postModel');

exports.createComment=async(req,res)=>{
    try{
        const {post,user,body}=req.body;

        const comment=await Comment.create({post,user,body});

        const updatePost= await Post.findByIdAndUpdate(post,{$push:{comments:comment._id}},{new:true}).populate("comments").exec();

        console.log("comment created successfully");

        res.status(200).json({
            data:updatePost
        })
    }
    catch(err){
        console.log("An error has occured while commenting");
        console.error(err.message);

        res.status(500).json({
            success:false,
            error:err.message,
            message:"Comment not published"
        })
    }
}


exports.deleteComment=async(req,res)=>{
    try{
        const {post,comment}=req.body;

        const dlcm=await Comment.findByIdAndDelete({post:post,_id:comment});

        const updatePost=await Post.findByIdAndUpdate(post,{$pull:{comments:dlcm._id}},{new:true});

        console.log("commented deleted Successfully");

        res.status(200).json({
            data:updatePost,
        })
    }
    catch(err){
        console.log("An error has occured while commenting");
        console.error(err.message);

        res.status(500).json({
            success:false,
            error:err.message,
            message:"Comment not published"
        })
    }
}