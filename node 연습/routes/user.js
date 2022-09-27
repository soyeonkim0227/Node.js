const express = require("express");
const router = express();

const controller = require("../controller/user");

router.post("/signup", controller.signUp);
router.get("/login", controller.login);

module.exports = router;