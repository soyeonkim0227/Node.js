const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controller/post");

router.post("/", AuthMiddleware, controller.createPost);
router.get("/", controller.readAll);
router.get("/:post_id", controller.readOne);
router.patch("/:post_id", AuthMiddleware, controller.update);
router.delete("/:post_id", AuthMiddleware, controller.deleteOne);
router.delete("/", AuthMiddleware, controller.deleteAll);

module.exports = router;