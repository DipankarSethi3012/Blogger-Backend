const Like=require('../models/likeModel');
const Post=require('../models/postModel');

exports.createLike=async(req,res)=>{
    try{
        const {post,user}=req.body;

        const like=await Like.create({post,user});

        const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes:like._id}},{new : true}).populate("likes").exec();

        //updating like array 
        //for updat post req is used
        //new means we want updated document
        //in populate we write what we have to update
        //.exec() id se actual data fetch krke dega
        console.log("liked the post successfully");
        res.status(200).json({
            data:updatePost,
        })
    }
    catch(err){
        console.log("an error has occured while liking the post");
        console.error(err.message);
            res.status(500).json({
                success:false,
                error:err.message,
                message:"Unable to like the post"
            })
    }
}

exports.deleteLike=async(req,res)=>{
    try{
        const {post,like}=req.body;

        const unlike=await Like.findByIdAndDelete({post:post,_id:like});

        const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes:unlike._id}},{new :true});

        console.log("Unliked the post successfully");

        res.status(200).json({
            success:true,
            message:"Unliked successfully",
            data:updatePost,
        })

        }
    catch(err){
        console.log("an error has occured while liking the post");
        console.error(err.message);
            res.status(500).json({
                success:false,
                error:err.message,
                message:"Unable to like the post"
            })
    }
}