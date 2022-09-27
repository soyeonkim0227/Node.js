const express = require("express");
const { sequelize } = require("./models");
const app = express(); // express 객체를 app에 넣어준다
const router = require("./routes/index");

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use("/", router);

app.listen(port, () => {
    console.log(port, "번 포트에서 대기 중");

    sequelize.sync({ force : false }) // { force : false } 생략 가능 -> force : false 뜻 - 덮어쓰기x, true - 덮어쓰기o, force : 서버 실행 시 마다 테이블을 재생성할 것인지 아닌지
        .then(() => {
            console.log("데이터베이스 연결 성공");
        })
        .catch((err) => {
            console.error(err)
        });
});