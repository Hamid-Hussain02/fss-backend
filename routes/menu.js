const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin')
const menuController = require('../controllers/menu')


router.get("/", menuController.getMenu);

router.post("/create", menuController.upload, menuController.addMenu);




module.exports = router;