const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controller/comment");

router.post("/:post_id/comment", AuthMiddleware, controller.createComment);
router.get("/:post_id/comment", controller.readAllComment);
router.patch("/:post_id/:comment_id", AuthMiddleware, controller.updateComment);
router.delete("/:post_id/comment/:comment_id", AuthMiddleware, controller.deleteOneComment);

module.exports = router;