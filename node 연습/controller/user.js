const { User } = require("../models");
const jwt = require("jsonwebtoken");

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
    const secretKey = req.app.get("jwt-secret");

    try {
        const user = await User.findOne({
            where : { email : email }
        });

        if (user.password == password) {
            const accessToken = jwt.sign({
                id: user.id,
                email: user.email,
                name: user.name
            },
            secretKey, // env랑 결합해서 한 시간짜리 토큰
            {
                expiresIn: "1h"
            });
            res.status(200).json ({
                message: "비밀번호 일치",
                accessToken
            });
        } else {
            res.status(401).json ({
                message: "올바르지 않은 비밀번호"
            });
        }
    } catch(err) {
        res.status(400).json ({
            message: "존재하지 않은 유저"
        });
        console.error(err);
    }
};

module.exports = {
    signUp,
    login
};