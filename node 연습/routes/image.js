const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controller/image");
const uploadimage = require("../middleware/upload");

router.post("/", AuthMiddleware, uploadimage.single("img"), controller.uploadImage);

module.exports = router;