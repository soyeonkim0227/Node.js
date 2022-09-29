const jwt = require("jsonwebtoken");

const tokenMiddleware = async(req, res, next) => {
    const token = await req.headers["access-token"]; // 포스트맨에 이 이름을 넣어서 갖고오기 위한

    if (!token) {
        res.status(401).json({ // 토큰 있는지 확인
            message: "로그인 되지 않음"
        });
    }

    try {
        jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
            if(err) throw new Error(err.message);
            req.decoded = decoded;
            next();
        });
    } catch(err) {
        res.status(401).json({
            message: "로그인 되어 있지 않음"
        });
        console.error(err);
    }
};

module.exports = tokenMiddleware;