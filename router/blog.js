const express=require('express');
const router=express.Router(); //creating an instance of router


const {createPost,getAllPosts}=require('../controllers/postController');
const {createLike,deleteLike}=require('../controllers/likeController');
const {createComment,deleteComment}=require('../controllers/commentController');

router.post("/posts/create",createPost);
router.post("/posts/like",createLike);
router.post("/posts/comment",createComment);

router.get("/posts/getpost",getAllPosts);
router.post("/posts/unlike",deleteLike);
router.post("/posts/deletecomment",deleteComment);

module.exports=router;