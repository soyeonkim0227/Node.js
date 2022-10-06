const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controller/like");

router.post("/:post_id/like", AuthMiddleware, controller.createLike);
router.delete("/:post_id/like", AuthMiddleware, controller.deleteLike);

module.exports = router;