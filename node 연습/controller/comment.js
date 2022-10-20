const { Comment } = require("../models");

const createComment = async(req, res) => {
    const { content } = req.body;
    const PostId = req.params.post_id;
    const user = req.decoded;
    
    try {
        await Comment.create({
            content,
            user_id: user.user_id,
            name: user.name ,
            post_id: PostId
        });

        res.status(201).json({
            message: "댓글 생성 성공"
        });
    } catch(err) {
        res.status(400).json({
            message: "댓글 생성 실패"
        });
        console.error(err);
    }
};

const readAllComment = async(req, res) => {
    const PostId = req.params.post_id;

    try {
        const comment = await Comment.findAll({
            where: { post_id : PostId}
        });

        res.status(200).json(comment);
    } catch(err) {
        res.status(404).json({
            message: "해당 댓글 없음"
        });
        console.error(err);
    }
};

const updateComment = async(req, res) => {
    const { content } = req.body;
    const PostId = req.params.post_id;
    const CommentId = req.params.comment_id;
    const UserId = req.decoded.user_id;

    console.log(CommentId);
    try {
        const comment = await Comment.findOne({
            where: {
                post_id : PostId,
                comment_id : CommentId,
                user_id : UserId
             }
        });

        if(comment.user_id !== UserId) {
            res.status(400).json({
                message: "본인 댓글만 수정 가능"
            });
        } else {
            comment.update({content});
            res.status(200).json({
                message: "댓글 수정 성공"
            });
        }
    } catch(err) {
        res.status(400).json({
            message: "댓글 수정 실패"
        });
        console.error(err);
    }
};

const deleteOneComment = async(req, res) => {
    const CommentId = req.params.comment_id;
    const UserId = req.decoded.user_id;

    try {
        const comment = await Comment.findOne({
            where: { comment_id : CommentId  }
        });

        if(comment.user_id !== UserId) {
            res.status(400).json({
                message: "본인 댓글만 삭제 가능"
            });
        } else {
            await comment.destroy();
        }

        res.status(200).json({
            message: "댓글 삭제 성공"
        });
    } catch(err) {
        res.status(400).json({
            message: "댓글 삭제 실패"
        });
        console.error(err);
    }
};

module.exports = {
    createComment,
    readAllComment,
    updateComment,
    deleteOneComment
};