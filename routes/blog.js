const express = require("express");

const router = express.Router();
const Blog = require("../models/Blog");


router.get('/',(req, res)=>{
    res.send("we are going to fire");
});


router.post('/', (req, res)=>{
    const blog = new Blog(req.body);
    blog.save((err, blog)=>{
        if(err){
            res.send(err);
        }else{
            res.json(blog);
        }
    });
});

module.exports = router; 