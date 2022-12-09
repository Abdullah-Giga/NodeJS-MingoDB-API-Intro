const express = require('express');
const blogController = require('../controllers/blogController');


//  getBlogs, blogCreatePage, getBlogByID, getBlogByID, deleteBlog

const router = express.Router();



//Home page / all blogs
router.get('/', blogController.getBlogs);



// Create blog page
router.get('/create', blogController.blogCreatePage);

// Create a new blog
router.post('/', blogController.createBlog);



// get a blog by id / blog details page
router.get('/:id', blogController.getBlogByID );


// delete handler
router.delete('/:id', blogController.deleteBlog);


// About page
router.get('/about', blogController.aboutPage);

module.exports = router;