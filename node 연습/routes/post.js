const express = require("express");
const router = express();

const controller = require("../controller/post");

router.post("/", controller.createPost);

module.exports = router;