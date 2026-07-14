const { protect } = require("./authMiddleware");

async function adminOnly(req, res, next) {
  // Must run after `protect` so req.user is already set
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
}

module.exports = { protect, adminOnly };
