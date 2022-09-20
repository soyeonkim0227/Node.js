const { Post } = require("../models");

const createPost = async(req, res) => {
    const { title, content } = req.body;

    try{
        await Post.create({
            title,
            content,
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



module.exports = {
    createPost
};