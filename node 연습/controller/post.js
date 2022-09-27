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

const readOne = async(req, res) => {
    const id = req.params.id;

    try {
        const post = await Post.findOne({
            where : { id: id }
        });

        if(post == null) throw Error;

        res.status(200).json(post);
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
            order: [['createdAt', 'DESC']]
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
    const id = req.params.id;
    const{ title, content } = req.body;

    try {
        await Post.update({
            title,
            content
        },
        {
            where : { id : id }
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
    const id = req.params.id;

    try {
        await Post.destroy({
            where : { id }
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
    try {
        await Post.destroy(
            { truncate: true } // 
        );

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