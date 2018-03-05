module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(10);
var transports = [new winston.transports.File({ filename: 'debug.log', level: 'debug' }), new winston.transports.File({ filename: 'error.log', level: 'error' })];
var logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: transports
});

module.exports = logger;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(transports, 'transports', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/logger.js');

    __REACT_HOT_LOADER__.register(logger, 'logger', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/logger.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userLogin: { type: String, min: [3, 'Too small userLogin'] },
    userPassword: { type: String, min: [3, 'Too small userPassword'] }
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');

    __REACT_HOT_LOADER__.register(UserSchema, 'UserSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');

    __REACT_HOT_LOADER__.register(UserModel, 'UserModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(13);
var passportJWT = __webpack_require__(14);
var UserModel = __webpack_require__(3);
var cfg = __webpack_require__(5);
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
};

module.exports = function () {
    var strategy = new Strategy(params, function (payload, done) {
        UserModel.findOne({ _id: payload.id }, function (err, user) {
            if (user) {
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        });
    });
    passport.use(strategy);
    return {
        initialize: function initialize() {
            return passport.initialize();
        },
        authenticate: function authenticate() {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ExtractJwt, "ExtractJwt", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");

    __REACT_HOT_LOADER__.register(Strategy, "Strategy", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");

    __REACT_HOT_LOADER__.register(params, "params", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// config.js
module.exports = {
    jwtSecret: "MyS3cr3tK3Y",
    jwtSession: {
        session: false,
        failureRedirect: '/login'
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(1);

var bodyParser = __webpack_require__(8);
var router = __webpack_require__(9);
var errorHandler = __webpack_require__(15);
var passportConfig = __webpack_require__(4)();

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use('/', router);

app.get('*', function (req, res) {
    // res.render('index', {title: 'Welcome page', message: 'Hello stranger!'})
    res.send("Hello");
});

app.use(function (err, req, res) {
    if (err) {
        //res.send(err);
        errorHandler.handleError(err, req, res);
    }
});

app.listen(3000);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(passportConfig, 'passportConfig', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/server.js');

    __REACT_HOT_LOADER__.register(app, 'app', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/server.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call the packages we need
var express = __webpack_require__(1);
var router = express.Router();
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
var logger = __webpack_require__(2);
var jwt = __webpack_require__(11);
var PostModel = __webpack_require__(12);
var UserModel = __webpack_require__(3);
var passportConfig = __webpack_require__(4)();
var cfg = __webpack_require__(5);

var mongoose = __webpack_require__(0);
mongoose.connect('mongodb://Siarhei:w333eq1@ds237868.mlab.com:37868/posts');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
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
    var url = req.headers.host + req.originalUrl;

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
    var userData = req.body;
    UserModel.findOne({ userLogin: userData.username, userPassword: userData.password }, function (err, user) {
        if (user) {
            sendToken(res, user);
        } else {
            var newUser = new UserModel({
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
})

// get all the posts (accessed at GET http://localhost:8080/posts)
.get(function (req, res, next) {
    res.render('index', { title: 'Login page', message: 'Please Log In!' });
});

/*router.route('/logout')

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
    })*/

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:8080/posts)
.post(isLoggedIn, function (req, res, next) {
    // .post(function (req, res, next) {
    var postData = req.body;
    var newPost = new PostModel({ 'author': postData.author, 'post': postData.post, 'visible': true });
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
    var id = req.params.post_id;
    PostModel.findOne({ _id: id }, function (err, post) {
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
    var id = req.params.post_id;
    var postData = req.body;

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
                var errObj = {
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
    var id = req.params.post_id;
    PostModel.deleteOne({ _id: id }, function (err) {
        if (err) {
            err.description = 'Post with id ' + id + ' NOT FOUND. Delete failed';
            next(err);
        } else {
            res.json({ message: 'Post with id ' + id + ' DELETED' });
        }
    });
});

function isLoggedIn(req, res, next) {
    var token = req.headers['authorization'];
    if (token) {
        var payload = jwt.decode(token, cfg.jwtSecret);

        if (payload) {
            next();
        } else {
            res.json({ message: 'NO RIGHTS' });
        }
    } else {
        res.json({ message: 'NO TOKEN' });
    }
}

function sendToken(res, user) {
    var payload = {
        id: user.id,
        role: user.role
    };
    var token = jwt.encode(payload, cfg.jwtSecret);
    res.json({
        token: token
    });
}

// on routes that end in /posts
// ----------------------------------------------------

module.exports = router;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(isLoggedIn, 'isLoggedIn', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');

    __REACT_HOT_LOADER__.register(sendToken, 'sendToken', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');

    __REACT_HOT_LOADER__.register(router, 'router', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');

    __REACT_HOT_LOADER__.register(passportConfig, 'passportConfig', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');

    __REACT_HOT_LOADER__.register(db, 'db', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    author: { type: String, min: [3, 'Too small Title'] },
    post: String,
    visible: Boolean
});

var PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');

    __REACT_HOT_LOADER__.register(PostSchema, 'PostSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');

    __REACT_HOT_LOADER__.register(PostModel, 'PostModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(2);
var errorHandler = {};
errorHandler.handleError = function (err, req, res) {
    logger.log({
        level: 'error',
        message: 'error: ' + JSON.stringify(err) + ', date: ' + new Date()
    });
    console.log("error handled");
    var objExplanation = {
        title: "Error"
    };

    if (err.body) {
        objExplanation.body = err.body;
    }

    if (err.body) {
        objExplanation.body = err.body;
    }

    if (err.type) {
        objExplanation.type = err.type;
    }

    if (err.description) {
        objExplanation.description = err.description;
    }

    if (err.status) {
        res.status(err.status);
    }
    res.render('error', objExplanation);
};

module.exports = errorHandler;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(errorHandler, 'errorHandler', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/errorHandler.js');
}();

;

/***/ })
/******/ ]);