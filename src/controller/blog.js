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
          res.status(status.SERVER_ERROR).json(error);
        }
        res.json(blog);
      });
    })
    .catch((err) => {
      return res.status(status.SERVER_ERROR).json(err);
    });
};

export const allBlogs = (req, res) => {
  try {
    Blog.find((error, blogs) => {
      if (error) {
        res.status(status.SERVER_ERROR).json(error);
      } else {
        res.json(blogs);
      }
    });
  } catch (error) {
    return res.status(status.SERVER_ERROR).json(error);
  }
};

export const singleBlog = (req, res) => {
  try {
    Blog.findById(req.params.id, (error, blog) => {
      if (error) res.send(error);
      res.json(blog);
    });
  } catch {}
};

export const updateBlog = (req, res) => {
  const response = cloudinary.uploader.upload(req.file.path);
  response.then((blogData)=>{
    Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        blogBody: req.body.blogBody,
        blogImage: blogData.url,
      },
      (error, blog) => {
        if (error) res.send(error);
        res.json(blog);
      }
    );
  })
};


export const deleteBlog = (req, res) => {
  try {
    Blog.findByIdAndRemove(req.params.id, (error, blog) => {
      if (error) res.send(error);
      res.json(blog);
    });
  } catch (error) {
    console.log(error);
  }
};
