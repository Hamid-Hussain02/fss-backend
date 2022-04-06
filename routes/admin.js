const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin')


router.get("/", adminController.getAdmins);

router.post("/create", adminController.addAdmin);

router.post("/login", adminController.login);




module.exports = router;