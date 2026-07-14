const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
  updateCurrentUser,
  updateCurrentUserAddresses,
  verifyEmail,
  resendVerificationEmail,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/verify-email", verifyEmail);
router.post("/resend-verification", resendVerificationEmail);
router.get("/me", protect, getCurrentUser);
router.patch("/me", protect, updateCurrentUser);
router.put("/me/addresses", protect, updateCurrentUserAddresses);

module.exports = router;
