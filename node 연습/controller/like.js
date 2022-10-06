const { Like } = require("../models");

const createLike = async(req, res) => {
    const UserId = req.decoded.user_id;
    const PostId = req.params.post_id;

    try {
        await Like.create({
            user_id: UserId,
            post_id: PostId
        });

        res.status(201).json({
            message: "좋아요 +1"
        });
    } catch(err) {
        res.status(400).json({
            message: "이미 처리됨"
        });
        console.error(err);
    }
};

const deleteLike = async(req, res) => {
    const UserId = req.decoded.user_id;
    const PostId = req.params.post_id;

    try {
        const post = await Like.findOne({
            where: {
                user_id: UserId,
                post_id: PostId 
            }
        });

        if (post.user_id !== UserId) {
            res.status(403).json({
                message: "본인 계정으로만 좋아요 취소 가능"
            });
        } else {
            await post.destroy();

            res.status(200).json({
                message: "좋아요 -1"
            });
        }
    } catch(err) {
        res.status(404).json({
            message: "좋아요 누른 적 없음"
        });
        console.error(err);
    }
};

module.exports = {
    createLike,
    deleteLike
};