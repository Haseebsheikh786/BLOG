const express = require("express");
const passport = require("passport");

const {
  createUser,
  loginUser,
  checkAuth,
  logout,
  fetchUserById,
} = require("../controller/AuthController");
const { isAuth } = require("../services/common");
const router = express.Router();

router.route("/signup").post(createUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.route("/logout").get(logout);
router.get("/check", isAuth(), checkAuth);
router.get("/user", isAuth(), fetchUserById);

module.exports = router;
