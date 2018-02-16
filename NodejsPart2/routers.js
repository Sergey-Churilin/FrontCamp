// call the packages we need
const express = require('express');
const router = express.Router();
const logger = require('./logger');
const jwt = require("jwt-simple");
const BlogModel = require('./Database/BlogSchema.js');
const UserModel = require('./Database/UserSchema.js');
const passportConfig = require('./passportConfig')();
const cfg = require("./config.js");

const mongoose = require('mongoose');
mongoose.connect('mongodb://Siarhei:w333eq1@ds211588.mlab.com:11588/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use(passportConfig.initialize());
// ROUTES FOR OUR SERVER
// =============================================================================
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    const url = req.headers.host + req.originalUrl;

    logger.log({
        level: 'info',
        message: 'url: ' + JSON.stringify(url) + ', date: ' + new Date()
    });
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our blog!'});
});

// on routes that end in /blogs
// ----------------------------------------------------
router.route('/login')

// create a new user or return existed (accessed at POST http://localhost:8080/login)
    .post(function (req, res, next) {
        const userData = req.body;
        UserModel.findOne({userLogin: userData.username, userPassword: userData.password}, function (err, user) {
            if (user) {
                sendToken(res, user);
            } else {
                const newUser = new UserModel({
                    'userLogin': userData.username,
                    'userPassword': userData.password,
                    'role': userData.role
                });

                newUser.save(function (err, newUser) {
                    if (err) {
                        err.description = "Error in adding new user";
                        console.log('error to add new user');
                        next(err);
                    } else {
                        sendToken(res, newUser);
                    }
                });
            }
        });


    })

    // get all the blogs (accessed at GET http://localhost:8080/blogs)
    .get(function (req, res, next) {
        res.render('index', {title: 'Login page', message: 'Please Log In!'})
    });

// on routes that end in /blogs
// ----------------------------------------------------
router.route('/blogs')

// create a blog (accessed at POST http://localhost:8080/blogs)
    .post(isAdmin, function (req, res, next) {
        const blogData = req.body;
        const newBlog = new BlogModel({'title': blogData.title, 'author': blogData.author, 'body': blogData.body});

        newBlog.save(function (err, newBlog) {
            if (err) {
                err.description = "Error in adding new blog";
                console.log('error to add new blog');
                next(err);
            } else {
                res.send(newBlog);
                console.log("Blog created");
            }
        });
    })

    // get all the blogs (accessed at GET http://localhost:8080/blogs)
    .get(passportConfig.authenticate(), function (req, res, next) {
        BlogModel.find({}, function (err, blogs) {
            if (err) {
                err.description = "Can't get blogs";
                next(err);
            } else {
                res.send(blogs);
            }
        });
    });

// on routes that end in /blogs/:blog_id
// ----------------------------------------------------
router.route('/blogs/:blog_id')
// get the blog with that id
    .get(passportConfig.authenticate(), function (req, res, next) {
        const id = req.params.blog_id;
        BlogModel.findOne({_id: id}, function (err, blog) {
            if (err) {
                err.description = "Blog with id " + id + "  does not exist";
                next(err);
            } else {
                if (blog) {
                    console.log('blog = ' + blog);
                    res.send(blog);
                } else {
                    res.status(403).send('No blogs');
                }
            }
        });
    })

    // update the blog with this id (accessed at PUT http://localhost:8080/blogs/:blog_id)
    .put(isAdmin, function (req, res, next) {
        const id = req.params.blog_id;
        const blogData = req.body;

        BlogModel.findById(id, function (err, blog) {
            if (err) {
                err.description = 'Blog with id ' + id + ' does not exist';
                next(err);
            } else {
                if (blog) {
                    blog.title = blogData.title || blog.title;
                    blog.author = blogData.author || blog.author;
                    blog.body = blogData.body || blog.body;
                    blog.save(function (err, blog) {
                        if (err) {
                            err.description = 'Error during blog updation occured';

                            if (!err.status) {
                                err.status = 400;
                            }
                            next(err);
                        } else {
                            if (blog) {
                                console.log('Blog with id ' + id + ' UPDATED');
                                res.send(blog);
                            } else {
                                res.status(403).send('Blog with this id does not exist');
                            }
                        }
                    });
                } else {
                    const errObj = {
                        description: 'Blog with id ' + id + ' NOT FOUND',
                        body: 'Blog update FAILED'
                    };

                    next(errObj);
                }
            }
        });
    })
    // delete the blog with this id (accessed at DELETE http://localhost:8080/blogs/:blog_id)
    .delete(isAdmin, function (req, res, next) {
        const id = req.params.blog_id;
        BlogModel.deleteOne({_id: id}, function (err) {
            if (err) {
                err.description = 'Blog with id ' + id + ' NOT FOUND. Delete failed';
                next(err);
            } else {
                res.json({message: 'Blog with id ' + id + ' DELETED'});
            }
        });
    });

function isAdmin(req, res, next) {
    const token = req.headers['authorization'];

    if (token) {
        const payload = jwt.decode(token.slice(4), cfg.jwtSecret);
        const role = payload.role;

        if (role === "admin") {
            next();
        } else {
            res.json({message: 'NO RIGHTS'});
        }
    } else {
        res.json({message: 'NO RIGHTS'});
    }
}

function sendToken(res, user) {
    const payload = {
        id: user.id,
        role: user.role
    };
    const token = jwt.encode(payload, cfg.jwtSecret);
    res.json({
        token: token,
        user: user
    });
}

module.exports = router;