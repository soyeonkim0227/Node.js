const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controller/post");

router.post("/", AuthMiddleware, controller.createPost);
router.get("/", controller.readAll);
router.get("/:id", controller.readOne);
router.patch("/:id", AuthMiddleware, controller.update);
router.delete("/:id", AuthMiddleware, controller.deleteOne);
router.delete("/", AuthMiddleware, controller.deleteAll);

module.exports = router;