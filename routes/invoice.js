const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoice");

router.get("/", invoiceController.getInvoices);

router.post("/create", invoiceController.upload, invoiceController.addInvoice);

module.exports = router;
