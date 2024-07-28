const express=require('express');
const Post=require('../models/postModel');
exports.createPost=async(req,res)=>{
    try{
        const {user,title,body} =req.body;
        const post= await Post.create({user,title,body});

        console.log("post Created Successfully");

        res.status(200).json({
            success: true,
            data:post,
            message:"post created successfully"

        })
        
    }
    catch(err){

        console.log("an error occured while creating a post");
        console.error(err.message);
        res.status(500).json({
            success:false,
            data:err.message,
            message:"An error occured while creating a post",
        })
    }
}

exports.getAllPosts=async(req,res)=>{
    try{
        // const {user}
        const posts= await Post.find({}).populate("comments").exec();

        console.log("all posts displayed");

        res.status(200).json(
            {
                data:posts,
            }
        )
    }
    catch(err){
        console.log("An error has benn occured while fetching the posts");
        console.error(err.message);

        res.status(500).json({
            success:false,
            error:err.message,
            message: "can't fetch the posts"
        })
    }
}