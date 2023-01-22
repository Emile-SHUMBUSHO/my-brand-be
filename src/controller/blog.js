import Blog from "../database/models/blog";
import status from "../config/status";
import cloudinary from "../middlewares/cloudinary";

export const createBlog = async (req, res) => {
  const response = cloudinary.uploader.upload(req.file.path);
  response
    .then((data) => {
      const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        blogBody: req.body.blogBody,
        blogImage: data.url,
      });
      //Save blog to database
      blog.save((error) => {
        if (error) {
          return res.status(status.SERVER_ERROR).json(error);
        }
        res.json(blog);
      });
    })
    .catch((err) => {
      return res.status(status.SERVER_ERROR).json(err);
    });
};
