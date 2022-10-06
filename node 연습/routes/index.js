const express = require("express");
const router = express();

const Post = require("./post");
const User = require("./user");
const Comment = require("./comment");

router.use("/user", User);
router.use("/post", Post);
router.use("/comment", Comment);

module.exports = router;
