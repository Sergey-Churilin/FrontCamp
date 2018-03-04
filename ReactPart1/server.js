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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = __webpack_require__(15);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'menu' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/' },
                        'All'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/posts' },
                        'All posts'
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/addpost' },
                        'Add post'
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

module.exports = Menu;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Menu, 'Menu', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Menu.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var winston = __webpack_require__(20);
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

    __REACT_HOT_LOADER__.register(transports, 'transports', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/logger.js');

    __REACT_HOT_LOADER__.register(logger, 'logger', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/logger.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userLogin: { type: String, min: [3, 'Too small userLogin'] },
    userPassword: { type: String, min: [3, 'Too small userPassword'] },
    role: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/UserSchema.js');

    __REACT_HOT_LOADER__.register(UserSchema, 'UserSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/UserSchema.js');

    __REACT_HOT_LOADER__.register(UserModel, 'UserModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/UserSchema.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(23);
var passportJWT = __webpack_require__(24);
var UserModel = __webpack_require__(5);
var cfg = __webpack_require__(7);
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
                    id: user.id,
                    role: user.role
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

    __REACT_HOT_LOADER__.register(ExtractJwt, "ExtractJwt", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/passportConfig.js");

    __REACT_HOT_LOADER__.register(Strategy, "Strategy", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/passportConfig.js");

    __REACT_HOT_LOADER__.register(params, "params", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/passportConfig.js");
}();

;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(3);

var bodyParser = __webpack_require__(9);
var router = __webpack_require__(10);
var errorHandler = __webpack_require__(25);
var passportConfig = __webpack_require__(6)();

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

app.use(function (err, req, res, next) {
    if (err) {
        //res.send(err);
        errorHandler.handleError(err, req, res);
    }
});

app.listen(8080);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(passportConfig, 'passportConfig', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/server.js');

    __REACT_HOT_LOADER__.register(app, 'app', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/server.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call the packages we need
var express = __webpack_require__(3);
var router = express.Router();
var React = __webpack_require__(0);
var ReactDOMServer = __webpack_require__(11);
var App = __webpack_require__(12);
var Menu = __webpack_require__(1);
var logger = __webpack_require__(4);
var jwt = __webpack_require__(21);
var PostModel = __webpack_require__(22);
var UserModel = __webpack_require__(5);
var passportConfig = __webpack_require__(6)();
var cfg = __webpack_require__(7);

var mongoose = __webpack_require__(2);
mongoose.connect('mongodb://Siarhei:w333eq1@ds211588.mlab.com:11588/blog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use(passportConfig.initialize());
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

/*router.get('/p', function (req, res) {
    const content = ReactDOMServer.renderToString(<App/>);
    // console.log(content);
    res.render('index', {entry: content});
});*/

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

router.get('/', function (req, res) {
    var content = ReactDOMServer.renderToString(React.createElement(App, null));
    // console.log(content);
    res.render('index', { entry: content });
    // res.json({message: 'hooray! welcome to our post!'});
});

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
    res.render('index', { title: 'Login page', message: 'Please Log In!' });
});

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:8080/posts)
//.post(isAdmin, function (req, res, next) {
.post(function (req, res, next) {
    var postData = req.body;
    var newPost = new PostModel({ 'author': postData.author, 'body': postData.body });
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
.put(isAdmin, function (req, res, next) {
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
.delete(isAdmin, function (req, res, next) {
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

function isAdmin(req, res, next) {
    var token = req.headers['authorization'];

    if (token) {
        var payload = jwt.decode(token.slice(4), cfg.jwtSecret);
        var role = payload.role;

        if (role === "admin") {
            next();
        } else {
            res.json({ message: 'NO RIGHTS' });
        }
    } else {
        res.json({ message: 'NO RIGHTS' });
    }
}

function sendToken(res, user) {
    var payload = {
        id: user.id,
        role: user.role
    };
    var token = jwt.encode(payload, cfg.jwtSecret);
    res.json({
        token: token,
        user: user
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

    __REACT_HOT_LOADER__.register(isAdmin, 'isAdmin', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');

    __REACT_HOT_LOADER__.register(sendToken, 'sendToken', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');

    __REACT_HOT_LOADER__.register(router, 'router', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');

    __REACT_HOT_LOADER__.register(passportConfig, 'passportConfig', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');

    __REACT_HOT_LOADER__.register(db, 'db', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(13);

var _Post2 = _interopRequireDefault(_Post);

var _AddPost = __webpack_require__(14);

var _AddPost2 = _interopRequireDefault(_AddPost);

var _Menu = __webpack_require__(1);

var _Menu2 = _interopRequireDefault(_Menu);

var _Filter = __webpack_require__(16);

var _Filter2 = _interopRequireDefault(_Filter);

var _store = __webpack_require__(17);

var _store2 = _interopRequireDefault(_store);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uuidV4 = __webpack_require__(19);

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = _store2.default;
        _this.deletePost = _this.deletePost.bind(_this);
        _this.addPost = _this.addPost.bind(_this);
        _this.filterPost = _this.filterPost.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _axios2.default.get('http://localhost:8080/posts').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'addPost',
        value: function addPost(postData) {
            var filter = this.state.filter;
            var newPost = {
                id: uuidV4(),
                author: postData.author,
                post: postData.post,
                visible: postData.author === filter || filter === ""
            };

            var posts = this.state.posts;
            posts.push(newPost);
            this.setState({ posts: posts });
        }
    }, {
        key: 'deletePost',
        value: function deletePost(id) {
            var posts = this.state.posts;
            var aNewPosts = posts.filter(function (post) {
                return post.id !== id;
            });
            this.setState({ posts: aNewPosts });
        }
    }, {
        key: 'filterPost',
        value: function filterPost(author) {
            var posts = this.state.posts;
            posts.forEach(function (post) {
                return post.visible = post.author.toLowerCase().indexOf(author.toLowerCase()) >= 0 || author === "";
            });
            this.setState({ posts: posts });
        }
    }, {
        key: 'render',
        value: function render() {
            var posts = this.state.posts;
            var postsArray = [];

            var filteredPosts = posts.filter(function (post) {
                return post.visible;
            });

            filteredPosts.forEach(function (post, index) {
                postsArray.push(_react2.default.createElement(_Post2.default, { key: index, post: post, deletePost: this.deletePost }));
            }.bind(this));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Menu2.default, null),
                _react2.default.createElement(
                    'h1',
                    { className: 'title' },
                    'Posts application'
                ),
                postsArray,
                _react2.default.createElement(_Filter2.default, { filterPost: this.filterPost })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

module.exports = App;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/App.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post() {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
    }

    _createClass(Post, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var post = this.props.post;

            return _react2.default.createElement(
                "div",
                { className: "post" },
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "h3",
                        { className: "author" },
                        post.author
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        post.post
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "delete", onClick: function onClick() {
                                console.log(_this2.props);_this2.props.deletePost(post.id);
                            } },
                        "X"
                    )
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

module.exports = Post;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Post, "Post", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Post.js");
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(1);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPost = function (_React$Component) {
    _inherits(AddPost, _React$Component);

    function AddPost(props) {
        _classCallCheck(this, AddPost);

        var _this = _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).call(this, props));

        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(AddPost, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            this.props.addPost({ author: this.refs.author.value, post: this.refs.post.value });
            this.refs.author.value = "";
            this.refs.post.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Menu2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'addPost' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Add post'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.submit },
                        _react2.default.createElement('input', { type: 'text', id: 'author', name: 'author', ref: 'author', placeholder: 'author name' }),
                        _react2.default.createElement('textarea', { name: 'post', ref: 'post', placeholder: 'post' }),
                        _react2.default.createElement(
                            'button',
                            null,
                            'Add'
                        )
                    )
                )
            );
        }
    }]);

    return AddPost;
}(_react2.default.Component);

module.exports = AddPost;
AddPost.defaultProps = {
    author: "Anonim",
    post: "post"
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AddPost, 'AddPost', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/AddPost.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
    _inherits(Filter, _React$Component);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(Filter, [{
        key: "submit",
        value: function submit(e) {
            e.preventDefault();
            this.props.filterPost(this.refs.author.value);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "filter" },
                _react2.default.createElement(
                    "form",
                    { onChange: this.submit },
                    _react2.default.createElement("input", { type: "search", id: "author", name: "author", ref: "author", placeholder: "Author" })
                )
            );
        }
    }]);

    return Filter;
}(_react2.default.Component);

module.exports = Filter;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Filter, "Filter", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Filter.js");
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var postsStore = {
    "posts": [{
        id: 1,
        "author": "John Doe",
        "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "visible": true
    }, {
        id: 2,
        "author": "Spartanec",
        "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "visible": true
    }, {
        id: 3,
        "author": "NLO",
        "post": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "visible": true
    }],
    "filter": ""
};

module.exports = postsStore;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(postsStore, "postsStore", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/store.js");
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(2);
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    author: { type: String, min: [3, 'Too small Title'] },
    body: String
});

var BlogModel = mongoose.model('Post', PostSchema);

module.exports = BlogModel;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/PostSchema.js');

    __REACT_HOT_LOADER__.register(PostSchema, 'PostSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/PostSchema.js');

    __REACT_HOT_LOADER__.register(BlogModel, 'BlogModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/Database/PostSchema.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var logger = __webpack_require__(4);
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

    __REACT_HOT_LOADER__.register(errorHandler, 'errorHandler', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/errorHandler.js');
}();

;

/***/ })
/******/ ]);