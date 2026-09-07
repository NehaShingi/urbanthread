const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

//@route GET /api/admin/products
//@desc Get all products(Admin only request)
//@access Private/Admin
router.get("/", protect, admin, async (req, res) => {
  try {
    //Fetch products from database
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
