const express = require("express");

const {
  createUser,
  loginUser,
  checkAuth,
  logout,
  fetchUserById,
} = require("../controller/AuthController");
const { isAuth } = require("../services/common");

const passport = require("passport");

const router = express.Router();
//  /auth is already added in base path
router
  .post("/signup", createUser)
  .post("/login", passport.authenticate("local"), loginUser)
  .get("/logout", logout)
  .get("/check", isAuth(), checkAuth)
  .get("/user", isAuth(), fetchUserById);
exports.router = router;
