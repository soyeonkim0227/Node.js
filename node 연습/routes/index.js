const express = require("express");
const router = express();

const Post = require("./post");
const User = require("./user");
const Comment = require("./comment");
const Like = require("./like");

router.use("/post", Comment);
router.use("/post", Like);
router.use("/user", User);
router.use("/post", Post);

module.exports = router;
