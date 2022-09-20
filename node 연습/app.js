const express = require("express");
const { sequelize } = require("./models");
const app = express();
const router = require("./routes/post");

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use("/", router);

app.listen(port, () => {
    console.log(port, "번 포트에서 대기 중");

    sequelize.sync({ force : false })
        .then(() => {
            console.log("데이터베이스 연결 성공");
        })
        .catch((err) => {
            console.error(err)
        });
});