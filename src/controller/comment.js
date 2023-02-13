import Comment from "../database/models/comment";
import Blog from "../database/models/blog";

const postComment = async (req, res) => {
  try {
    const blogId = req.params.id;
    const NewComment = await Comment.create({
      fullName: req.body.fullName,
      email: req.body.email,
      comment: req.body.comment,
      blogPost: blogId,
    });
    const BlogPost = await Blog.findById(blogId);
    BlogPost.comments.push(NewComment);
    await BlogPost.save(function (error) {
      res.status(201).json({
        message: "New comment",
        data: BlogPost,
        commentId: NewComment,
      });
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal sever error",
    });
  }
};

const getComment = async (req, res) => {
  try {
    const BlogId = req.params.id;
    const getComment = await Blog.findById(BlogId).populate("comments");
    if (!getComment) return res.status(404).json({ error: "No Comment Found" });
    res.status(200).json({
      message: "all comments",
      counter: getComment.comments.length,
      data: getComment.comments,
    });
  } catch (error) {
    res.status(500).json({
      // error: `No comments with this id ${req.params.id}`,
      msg: error.message
    });
  }
};

export { postComment, getComment };
