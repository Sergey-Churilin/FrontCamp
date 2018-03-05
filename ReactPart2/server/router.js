// call the packages we need
const express = require('express');
const router = express.Router();
// const React = require('react');
// const path = require('path');
// const fs = require('fs');
// const ReactDOMServer = require('react-dom/server');
// const ReactRouter = require('react-router');
// const renderToString = ReactDOMServer.renderToString;
// const match = ReactRouter.match;
// const RouterContext = ReactRouter.RouterContext;
// const routes = require('../browser/components/Routes').default();

// const App = require('../browser/components/App');
// const Menu = require('../browser/components/Menu');
const logger = require('./logger');
const jwt = require("jwt-simple");
const PostModel = require('./Database/PostSchema.js');
const UserModel = require('./Database/UserSchema.js');
const passportConfig = require('./passportConfig')();
const cfg = require("./config.js");

const mongoose = require('mongoose');
mongoose.connect('mongodb://Siarhei:w333eq1@ds211588.mlab.com:11588/blog');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.use(passportConfig.initialize());
/*const staticFiles = [
    '/build/!*'
];
router.use(express.static('../build'));

router.get('*', (req, res) => {

    const error = () => res.status(404).send('404');
    const htmlFilePath = path.join( __dirname, './build', 'index.html' );
console.log(htmlFilePath)
    fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
        if(err) {
            error()
        }
        else {
            match({ routes, location: req.url }, (err, redirect, ssrData) => {
                if(err) {
                    error()
                }
                else if(redirect) {
                    res.redirect(302, redirect.pathname + redirect.search)
                }
                else if(ssrData) {
                    const ReactApp = renderToString( react.createElement(RouterContext, ssrData) )
                    const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
                    res.status(200).send(RenderedApp)
                }
                else {
                    error()
                }
            })
        }
    })
})*/


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

// ROUTES FOR OUR SERVER
// =============================================================================


/*router.get('/ppp', function (req, res) {
    const content = ReactDOMServer.renderToString(<App/>);
    res.render('index', {entry: content});
});*/

// on routes that end in /posts
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

    // get all the posts (accessed at GET http://localhost:8080/posts)
    .get(function (req, res, next) {
        res.render('index', {title: 'Login page', message: 'Please Log In!'})
    });

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:8080/posts)
//.post(isAdmin, function (req, res, next) {
    .post(function (req, res, next) {
        const postData = req.body;
        const newPost = new PostModel({'author': postData.author, 'post': postData.post, 'visible' : true});
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

    // get all the posts (accessed at GET http://localhost:8080/posts)
    //.get(passportConfig.authenticate(), function (req, res, next) {
    .get(function (req, res, next) {
        PostModel.find({}, function (err, posts) {
            if (err) {
                err.description = "Can't get posts";
                next(err);
            } else {
                //const content = ReactDOMServer.renderToString(<App/>);
                // console.log(content);
                //res.render('index', {entry: content});
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
    .put(isAdmin, function (req, res, next) {
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
    .delete(isAdmin, function (req, res, next) {
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


// on routes that end in /posts
// ----------------------------------------------------

module.exports = router;