const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogByID,
  updateBlog,
  deleteBlog,
} = require("../controller/BlogController");

const { isAuth } = require("../services/common");

const router = express.Router();
//  /auth is already added in base path
router
  .get("/", getAllBlogs)
  .post("/", isAuth(), createBlog)
  .get("/:id", isAuth(), getBlogByID)
  .put("/", isAuth(), updateBlog)
  .delete("/:id", isAuth(), deleteBlog);

exports.router = router; 
