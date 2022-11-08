const express = require("express");
const router = express();

const Post = require("./post");
const User = require("./user");
const Comment = require("./comment");
const Like = require("./like");
const Image = require("./image");

router.use("/post", Comment);
router.use("/post", Like);
router.use("/user", User);
router.use("/post", Post);
router.use("/image", Image);

module.exports = router;
