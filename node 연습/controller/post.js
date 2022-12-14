const { Post, Like, Image } = require("../models");

const createPost = async(req, res) => {
    const { title, content } = req.body;
    const user = req.decoded;


    console.log(user);
    try{
        await Post.create({
            title,
            content,
            writer: user.user_id
        });

        res.status(201).json({
            message: "게시글 작성 성공",
        });
    } catch(err) {
        res.status(400).json({
            message: "게시글 작성 실패",
        });
        console.error(err);
    }
};

const readOne = async(req, res) => {
    const postId = req.params.post_id;

    try {
        const like = await Like.count({
            where: {
                post_id: postId
            }
        });
        const post = await Post.findOne({
            where : { post_id: postId }
        });

        const image = await Image.findAll({
            where : { post_id : postId }
        });

        if(post == null) throw Error;

        res.status(200).json({ post, like, image });
    } catch(err) {
        res.status(404).json({
            message: "해당 게시글 없음",
        });
        console.error(err);
    }
};

const readAll = async(req, res) => {
    try {
        const posts = await Post.findAll({
            order: [['createdAt', 'ASC']]
        });

        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({
            message: "오류",
        });
        console.error(err);
    }
};

const update = async(req, res) => {
    const postId = req.params.post_id;
    const{ title, content } = req.body;

    const user = req.decoded;

    try {
        await Post.update({
            title,
            content
        },
        {
            where : { 
                post_id : postId,
                writer : user.user_id
            }
        });

        res.status(200).json({
            message: "수정 완료",
        });
    } catch(err) {
        res.status(404).json({
            message: "오류",
        });
        console.error(err);
    }
};

const deleteOne = async(req, res) => {
    const postId = req.params.post_id;
    const user = req.decoded;

    try {
        await Post.destroy({
            where : { 
                post_id : postId,
                writer: user.user_id
            }
        });
        
        res.status(200).json({
            message: "삭제 완료"
        });
    } catch(err) {
        res.status(400).json({
            message: "오류"
        });
        console.error(err);
    }
};

const deleteAll = async(req, res) => {
    const user = req.decoded;

    try {

        await Post.destroy({
            where : {
                writer: user.user_id
            }
        });

        res.status(200).json({
            message: "모두 삭제 완료"
        });
    } catch(err) {
        res.status(400).json({
            message: "오류"
        });
        console.error(err);
    }
};

module.exports = {
    createPost,
    readOne,
    readAll,
    update,
    deleteOne,
    deleteAll
};