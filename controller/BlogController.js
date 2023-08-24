const Joi = require("joi");
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const BlogDTO = require("../dto/blog");
const BlogDetailsDTO = require("../dto/blog-details");

const mongodbIdPattern = /^[0-9a-fA-F]{24}$/;

const createBlog = async (req, res, next) => {
  const createBlogSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    content: Joi.string().required(),
    photoPath: Joi.string().required(),
  });

  const { error } = createBlogSchema.validate(req.body);

  if (error) {
    return error;
  }

  const { title, author, content, photoPath } = req.body;

  let newBlog;
  try {
    newBlog = new Blog({
      title,
      author,
      content,
      photoPath,
    });

    await newBlog.save();
  } catch (error) {
    return next(error);
  }

  return res.status(201).json({ newBlog, author: newBlog.author.username });
};

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(blogs);
  } catch (error) {
    return next(error);
  }
};

const getBlogByID = async (req, res, next) => {
  const getByIdSchema = Joi.object({
    id: Joi.string().regex(mongodbIdPattern).required(),
  });

  const { error } = getByIdSchema.validate(req.params);

  if (error) {
    return next(error);
  }

  let blog;

  const { id } = req.params;

  try {
    blog = await Blog.findOne({ _id: id }).populate("author");
  } catch (error) {
    return next(error);
  }
  const blogDto = new BlogDetailsDTO(blog);

  return res.status(200).json({ blog: blogDto });
};

const updateBlog = async (req, res, next) => {
  const updateBlogSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().regex(mongodbIdPattern).required(),
    blogId: Joi.string().regex(mongodbIdPattern).required(),
    photoPath: Joi.string().required(),
  });

  const { error } = updateBlogSchema.validate(req.body);

  const { title, content, author, blogId, photoPath } = req.body;

  let blog;

  try {
    blog = await Blog.findOne({ _id: blogId });
    await Blog.updateOne({ _id: blogId }, { title, content, photoPath });
  } catch (error) {
    return next(error);
  }

  return res.status(200).json({ message: "blog updated!" });
};

const deleteBlog = async (req, res, next) => {
  const deleteBlogSchema = Joi.object({
    id: Joi.string().regex(mongodbIdPattern).required(),
  });

  const { error } = deleteBlogSchema.validate(req.params);

  const { id } = req.params;

  // delete blog
  // delete comments
  try {
    await Blog.deleteOne({ _id: id });

    await Comment.deleteMany({ blog: id });
  } catch (error) {
    return next(error);
  }

  return res.status(200).json({ message: "blog deleted" });
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogByID,
  updateBlog,
  deleteBlog,
};
