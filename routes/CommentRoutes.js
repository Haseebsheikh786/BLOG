const express = require("express");
const {
  createComment,
  getAllComment,
} = require("../controller/CommentController");

const router = express.Router();

router.post("/", createComment).get("/:id", getAllComment);

exports.router = router;
