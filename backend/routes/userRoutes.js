const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

//@route POST /api/users/register
// @desc Register a new user
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Registration logic
    let user = await User.findOne({ email });

    //if user already exists
    if (user) res.status(400).json({ message: "User already exists" });

    //else create new user with provided details
    user = new User({ name, email, password });
    await user.save();

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and return token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        //send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

//@route POST /api/users/login
// @desc Authenticate user
// @access Public
router.post("/login", async (req, res) => {
  //1.Get credentials
  const { email, password } = req.body;
  try {
    //2.Find User
    const user = await User.findOne({ email });

    // 3. User doesn't exist
    if (!user) {
      return res.status(400).json({
        message: "Invalid email/password",
      });
    }

    // 4. Compare entered password with hashed password
    const isMatch = await user.matchPassword(password);

    // 5. Password incorrect
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email/password",
      });
    }

    // 6. Password Correct
    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and return token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        //send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      },
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/users/profile
// @desc Get logged-in user's profile(Protected route)
// @access Private

router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
