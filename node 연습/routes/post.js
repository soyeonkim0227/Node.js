const express = require("express");
const router = express();

const controller = require("../controller/post");

router.post("/", controller.createPost);
router.get("/", controller.readAll);
router.get("/:id", controller.readOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.deleteOne);
router.delete("/", controller.deleteAll);

module.exports = router;