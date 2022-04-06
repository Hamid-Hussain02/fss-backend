const express = require("express");
const router = express.Router();
const subscriptionController = require("../controllers/subscription");

router.get("/", subscriptionController.getSubscriptions);

router.post("/create", subscriptionController.addSubscription);

router.post(
  "/get-user-subscription",
  subscriptionController.getUserSubscription
);

// router.post("/login", subscriptionController.login);

module.exports = router;
