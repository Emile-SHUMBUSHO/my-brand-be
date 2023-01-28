import Blog from "../database/models/blog";
import Joi from "joi";

const blogSchema = Joi.object({
  title: Joi.string().min(5).max(30).required(),
  description: Joi.string().min(10).max(300).required(),
  blogBody: Joi.string().min(100).max(1000).required(),
  imageUrl: Joi.string()
});


exports.validateBlog = (req, res, next) => {
  const { error, value } = blogSchema.validate(req.body);
  if (error) {
    let errorMsg = error.details.map(d=> d.message);
    return res.status(400).send({errorMsg});
  }
  next();
};


exports.validateUniqueBlog = async (req, res, next) => {
  const existingTitle = await Blog.findOne({ title: req.body.title });
  if (existingTitle) {
    return res
      .status(409)
      .send({
        message: `Blog with title ${existingTitle.title} already exists`,
      });
  }

  const existingDescription = await Blog.findOne({
    description: req.body.description,
  });

  if (existingDescription) {
    return res.status(409).send({
      message: `Blog with description ${existingDescription.description} already exists`,
    });
  }

  const existingBlogBody = await Blog.findOne({ blogBody: req.body.blogBody });
  if (existingBlogBody) {
    return res.status(409).send({
      message: `Blog with ${existingBlogBody.blogBody} already exists`,
    });
  }
  next();
};
