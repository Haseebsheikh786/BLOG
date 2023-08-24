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

router.route("/login", passport.authenticate("local")).post(loginUser);

router.route("/logout").get(logout);

router.route("/check", isAuth()).get(checkAuth);

router.route("/user ", isAuth()).get(fetchUserById);

module.exports = router;
