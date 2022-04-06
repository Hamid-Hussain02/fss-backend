const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getUsers);

router.post("/create", userController.addUser);

router.post("/login", userController.login);

router.post("/update", userController.updateUser);

router.post("/delete", userController.deleteUser);

module.exports = router;
