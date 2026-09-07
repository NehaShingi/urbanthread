const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

//@route GET /api/admin/orders
//@desc Get all orders(Admin only request)
//@access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    //Fetch orders from database
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route PUT /api/admin/orders/:id
//@desc Update order status(Admin only request)
//@access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    order.status = req.body.status || order.status;

    if (req.body.status === "Delivered") {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

//@route  DELETE /api/admin/orders/:id
//@desc Delete an order(Admin only request)
//@access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
    }

    await order.deleteOne();
    res.json({ message: "Order removed." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
