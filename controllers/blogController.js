const Blog = require('../models/blog');


// Ge all blogs
const getBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1}).then((result) => res.render('home', {title: 'All-Blogs', blogs: result})).catch((error) => console.log(error));
}

// About page

const aboutPage = (req, res) => {
    res.render('about',{title: 'About'});
}


const blogCreatePage = (req, res) => {
    res.render('create', {title: 'New'});
}

const createBlog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((result) => res.redirect('/blogs')).catch((error) => console.log(error));
}

// get by id
const getBlogByID = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('details', {blog: result, title: 'blog details'});
    }).catch((err) => console.log(err));
}

const deleteBlog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id).then(result => {
        res.json({redirect: '/blogs'});
    }).catch((err) => console.log(err));
}

module.exports = {
    getBlogs,
    aboutPage,
    blogCreatePage,
    createBlog,
    getBlogByID,
    getBlogByID,
    deleteBlog
};