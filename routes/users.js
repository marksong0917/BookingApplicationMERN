const router = require("express").Router();
// Bring in the User Registration function

const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser,
  logout
} = require("../controllers/Auth");

// Users Registeration Route
router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

// Admin Registration Route
router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});

// Merchant Registration Route
router.post("/register-merchant", async (req, res) => {
  await userRegister(req.body, "merchant", res);
});

// Users Login Route
router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});

// Merchant Login Route
router.post("/login-merchant", async (req, res) => {
  await userLogin(req.body, "merchant", res);
});

//@route DELETE /api/auth/logout
router.delete("/logout", async (req, res) => {
  await logout(req.body, res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

// Users Protected Route
router.get(
  "/user-protectd",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("Hello User");
  }
);

// Admin Protected Route
router.get(
  "/admin-protectd",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Hello Admin");
  }
);

// Super Admin Protected Route
router.get(
  "/merchant-protectd",
  userAuth,
  checkRole(["merchant"]),
  async (req, res) => {
    return res.json("Hello Merchant");
  }
);

// Super Admin Protected Route
router.get(
  "/merchant-and-admin-protectd",
  userAuth,
  checkRole(["merchant", "admin"]),
  async (req, res) => {
    return res.json("Merchant and Admin");
  }
);



module.exports = router;