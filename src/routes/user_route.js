const userController = require("../controller/user_controller");
const express = require("express");
const router = express.Router();

router.post("/signup", userController.UserCreate);
router.post("/getUser", userController.getUser);
router.post("/signin", userController.userLogin);

module.exports = router;
