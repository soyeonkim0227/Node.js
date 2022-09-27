const express = require("express");

const router = express();

const Post = require("./post");
const User = require("./user");

router.use("/user", User);
router.use("/post", Post);

module.exports = router;
