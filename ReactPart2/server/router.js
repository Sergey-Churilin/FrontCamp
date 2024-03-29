const express = require('express');
const router = express.Router();

// for SSR
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../browser/components/Routes';
router.use(express.static('build'));

//logging
const logger = require('./logger');

//authentication
const jwt = require("jwt-simple");
const passportConfig = require('./passportConfig')();
const cfg = require("./config.js");

//db
const PostModel = require('./Database/PostSchema.js');
const UserModel = require('./Database/UserSchema.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://Siarhei:w333eq1@ds237868.mlab.com:37868/posts');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
//and remove caching so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.use(passportConfig.initialize());

//SSR
router.get('/', function (req, res) {
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <Routes/>
        </StaticRouter>);
    res.render('index', {entry: html});

});

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


// on routes that end in /login
// ----------------------------------------------------
router.route('/login')

// create a new user or return existed (accessed at POST http://localhost:3000/login)
    .post(function (req, res, next) {
        const userData = req.body;
        UserModel.findOne({userLogin: userData.username, userPassword: userData.password}, function (err, user) {
            if (user) {
                sendToken(res, user);
            } else {
                const newUser = new UserModel({
                    'userLogin': userData.username,
                    'userPassword': userData.password
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
    });

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:3000/posts)
    .post(isLoggedIn, function (req, res, next) {
        // .post(function (req, res, next) {
        const postData = req.body;
        const newPost = new PostModel({'author': postData.author, 'post': postData.post, 'visible': true});
        newPost.save(function (err, newPost) {
            if (err) {
                err.description = "Error in adding new post";
                console.log('error to add new post');
                next(err);
            } else {
                res.send(newPost);
                console.log("Post created");
            }
        });
    })

    // get all the posts (accessed at GET http://localhost:3000/posts)
    .get(function (req, res, next) {
        PostModel.find({}, function (err, posts) {
            if (err) {
                err.description = "Can't get posts";
                next(err);
            } else {
                res.send(posts);
            }
        });
    });

// on routes that end in /posts/:post_id
// ----------------------------------------------------
router.route('/posts/:post_id')
// get the post with that id
    .get(passportConfig.authenticate(), function (req, res, next) {
        const id = req.params.post_id;
        PostModel.findOne({_id: id}, function (err, post) {
            if (err) {
                err.description = "Post with id " + id + "  does not exist";
                next(err);
            } else {
                if (post) {
                    console.log('post = ' + post);
                    res.send(post);
                } else {
                    res.status(403).send('No posts');
                }
            }
        });
    })

    // update the post with this id (accessed at PUT http://localhost:8080/posts/:post_id)
    .put(isLoggedIn, function (req, res, next) {
        const id = req.params.post_id;
        const postData = req.body;

        PostModel.findById(id, function (err, post) {
            if (err) {
                err.description = 'Post with id ' + id + ' does not exist';
                next(err);
            } else {
                if (post) {
                    post.title = postData.title || post.title;
                    post.author = postData.author || post.author;
                    post.body = postData.body || post.body;
                    post.save(function (err, post) {
                        if (err) {
                            err.description = 'Error during post updation occured';

                            if (!err.status) {
                                err.status = 400;
                            }
                            next(err);
                        } else {
                            if (post) {
                                console.log('Post with id ' + id + ' UPDATED');
                                res.send(post);
                            } else {
                                res.status(403).send('Post with this id does not exist');
                            }
                        }
                    });
                } else {
                    const errObj = {
                        description: 'Post with id ' + id + ' NOT FOUND',
                        body: 'Post update FAILED'
                    };

                    next(errObj);
                }
            }
        });
    })
    // delete the post with this id (accessed at DELETE http://localhost:8080/posts/:post_id)
    .delete(isLoggedIn, function (req, res, next) {
        //.delete(function (req, res, next) {
        const id = req.params.post_id;
        PostModel.deleteOne({_id: id}, function (err) {
            if (err) {
                err.description = 'Post with id ' + id + ' NOT FOUND. Delete failed';
                next(err);
            } else {
                res.json({message: 'Post with id ' + id + ' DELETED'});
            }
        });
    });

function isLoggedIn(req, res, next) {
    const token = req.headers['authorization'];
    if (token) {
        const payload = jwt.decode(token, cfg.jwtSecret);

        if (payload) {
            next();
        } else {
            res.json({message: 'NO RIGHTS'});
        }
    } else {
        res.json({message: 'NO TOKEN'});
    }
}

function sendToken(res, user) {
    const payload = {
        id: user.id,
        role: user.role
    };
    const token = jwt.encode(payload, cfg.jwtSecret);
    res.json({
        token: token
    });
}


// on routes that end in /posts
// ----------------------------------------------------

module.exports = router;