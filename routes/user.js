const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getUsers);

router.post("/create", userController.addUser);

router.post("/login", userController.login);

module.exports = router;
