const { Image, Post } = require("../models");

const uploadImage = async(req, res) => {
    const UserId = req.decoded.user_id;
    const PostId = req.params.post_id;
    const image = req.file;

    try {
        const post = await Post.findOne({
            where: {
                post_id: PostId
            }
        });

        if (!post) {
            return res.status(404).json({
                message: "게시글이 존재하지 않습니다."
            });

        } else if (post.writer !== UserId) {
            return res.status(403).json({
                message: "게시글 작성자만 이미지를 업로드할 수 있습니다."
            });

        } else if (post.image) {
            return res.status(409).json({
                message: "이미지는 게시글 당 하나만 업로드할 수 있습니다."
            });
        } else {
            await Image.create({
                user_id: UserId,
                post_id: PostId,
                fileName: image.filename,
                fileAddress: image.path
            });
    
            return res.status(201).json({
                message: "이미지가 업로드되었습니다."
            });
        }

    } catch(err) {
        console.error(err);

        return res.status(400).json({
            message: "잘못된 요청입니다."
        });
    }
};

module.exports = {
    uploadImage
};