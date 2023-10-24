const express = require("express");
const router = express.Router();
const adminOrderController = require("../controller/adminOrder.controller.js");
const authenticate = require("../middleware/middleware.js");

router.get("/", authenticate, adminOrderController.getAllOrders);
router.put("/:orderId/confirmed", authenticate, adminOrderController.confirmedOrders);
router.put("/:orderId/shipped", authenticate, adminOrderController.shippedOrders);
router.put("/:orderId/delievered", authenticate, adminOrderController.deliveredOrders);
router.put("/:orderId/cancelled", authenticate, adminOrderController.cancelledOrders);
router.put("/:orderId/deleted", authenticate, adminOrderController.deletedOrders);

module.exports = router;