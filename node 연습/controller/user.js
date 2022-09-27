const { User } = require("../models");

const signUp = async(req, res) => {
    const { email, name, password } = req.body;

    try {
        await User.create({
            email,
            name,
            password
        });

        res.status(201).json({
            message: "회원가입 성공"
        });
    } catch(err) {
        res.status(409).json({
            message: "아이디 중복"
        });
        console(error).err;
    }
};

const login = async(req, res) => {
    const { email, password } = req.body;

    try {
        await User.findOne({
            where : { email : email }
        });

        res.status(200).json({
            message: "로그인 성공"
        });
    } catch(err) {
        res.status(400).json ({
            message: "존재하지 않은 유저"
        });
    }
};

module.exports = {
    signUp,
    login
};