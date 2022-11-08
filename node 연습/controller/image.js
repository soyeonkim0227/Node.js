const { Image } = require("../models");

const uploadImage = async(req, res) => {
    const UserId = req.decoded.user_id;
    const image = req.file;

    console.log(image);
    try {
        await Image.create({
            user_id: UserId,
            fileName: image.filename,
            fileAddress: image.path
        });

        return res.status(201).json({
            message: "이미지가 업로드되었습니다."
        });
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