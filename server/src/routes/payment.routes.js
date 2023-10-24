const express = require("express");
const authenticate = require("../middleware/middleware.js");
const router = express.Router();

const paymentController = require("../controller/payment.controller.js");

router.post("/:id", authenticate, paymentController.createPaymentLink);
router.get("/", authenticate, paymentController.updatePaymentInformation);

module.exports = router;