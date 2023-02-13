import Blog from "../database/models/blog";
import status from "../config/status";
import Users from "../database/models/authentication";

export const createBlog = async (req, res) => {
  console.log("shsdgdgshdgsgghdgdggdg",req.user.id);
  try {
    const user =  await Users.findById(req.user.id);
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      blogBody: req.body.blogBody,
      imageUrl: req.body.imageUrl,
      author: user.name,
    });
    //Save blog to database
    const savedBlog = await blog.save();
    res
      .status(status.CREATED)
      .json({ message: "Blog created successfully", blog: savedBlog });
  } catch (error) {
    res.status(status.SERVER_ERROR).json({ message: error.message });
  }
};

export const allBlogs = async (req, res) => {
  try {
    const Allblogs = await Blog.find({}).sort({
      date: -1,
    });

    if (Allblogs.length < 1) {
      res.status(status.NOT_FOUND).json({
        error: "No Blog Found",
        counts: Allblogs.length,
      });
    } else {
      res.status(status.OK).json({
        message: "All Blog Found",
        counts: Allblogs.length,
        data: Allblogs,
      });
    }
  } catch (error) {
    res.status(status.SERVER_ERROR).json(error);
  }
};

export const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(status.NOT_FOUND)
        .json({ error: `Blog with id ${req.params.id} not found` });
    } else {
      res.status(status.OK).json({
        message: "blog retrieved successfully",
        data: blog,
      });
    }
  } catch (error) {
    res.status(status.SERVER_ERROR).json({ error: `Internal server error ${error}` });
  }
};

export const updateBlog = async (req, res) => {
  try {
    if (!(await Blog.findById(req.params.id))) {
      return res
        .status(status.NOT_FOUND)
        .json({ error: `Blog with id ${req.params.id} not found` });
    }
    const updateBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.status(status.CREATED).json({
      message: "Blog updated successfully",
      data: updateBlog,
    });
  } catch (error) {
    res
      .status(status.SERVER_ERROR)
      .json({ error: `Internal server error ${error}` });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    if (!(await Blog.findById(req.params.id))) {
      return res
        .status(status.NOT_FOUND)
        .json({ error: `Blog with id ${req.params.id} not found` });
    }
    const deleletBlog = await Blog.findByIdAndRemove(req.params.id);
    res.status(status.OK).json({
      message: "Blog deleted successfully",
      deleteBlog: deleletBlog,
    });
  } catch (error) {
    res
      .status(status.SERVER_ERROR)
      .json({ error: `Internal server error ${error}` });
  }
};
