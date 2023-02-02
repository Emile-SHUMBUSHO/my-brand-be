import Blog from "../database/models/blog";
import status from "../config/status";

export const createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      blogBody: req.body.blogBody,
      imageUrl: req.body.imageUrl,
    });
    //Save blog to database
    const savedBlog = await blog.save();
    res
      .status(status.CREATED)
      .json({ message: "Blog created successfully", blog:savedBlog });
  } catch (error) {
    return res.status(status.BAD_REQUEST).json({ message: error.message });
  }
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
  try {
    Blog.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        blogBody: req.body.blogBody,
        imageUrl: req.body.imageUrl,
      },
      { new: true },
      (error, blog) => {
        if (error) res.send(error);
        res.json(blog);
      }
    );
  } catch (err) {
    return res.status(status.SERVER_ERROR).json(err);
  }
};

export const deleteBlog = (req, res) => {
  try {
    Blog.findByIdAndRemove(req.params.id, { new: true }, (error, blog) => {
      if (error) res.send(error);
      res.json(blog);
    });
  } catch (error) {
    console.log(error);
  }
};
