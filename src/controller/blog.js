import Blog from '../database/models/blog'
import status from '../config/status'

export default class BlogController{
    static async createBlog(req, res){
        try{
            const blog = await Blog.create(req.body);
            res.status(status.OK).json(blog);
        } catch(error){
            res.status(status.BAD_REQUEST).send({
                error: error.message,
            })
        }
    }
}