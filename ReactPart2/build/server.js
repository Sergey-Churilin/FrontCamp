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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapActionsToProps = exports.mapStateToProps = undefined;

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uuidV4 = __webpack_require__(19);


function mapStateToProps(state) {
    return state;
}

function mapActionsToProps(dispatch) {
    return {
        deletePost: function deletePost(todoId, token) {
            var that = this;
            _axios2.default.delete('http://localhost:3000/posts/' + todoId, {
                headers: { Authorization: token }
            }).then(function (response) {
                that.getPosts();
            }).catch(function (error) {
                console.log(error);
            });
        },
        addPost: function addPost(payload, token) {
            var that = this;
            var newPost = {
                id: uuidV4(),
                author: payload.author,
                post: payload.post
            };
            _axios2.default.post('http://localhost:3000/posts', newPost, {
                headers: { Authorization: token }
            }).then(function (response) {
                that.getPosts();
            }).catch(function (error) {
                console.log(error);
            });
        },
        filterPosts: function filterPosts(payload) {
            dispatch({
                type: 'FILTER_POSTS',
                payload: payload
            });
        },
        getPosts: function getPosts() {
            _axios2.default.get('http://localhost:3000/posts').then(function (response) {
                dispatch({
                    type: 'GET_POSTS',
                    payload: response.data
                });
            }).catch(function (error) {
                console.log(error);
            });
        },
        login: function login(userData) {
            _axios2.default.post('http://localhost:3000/login', userData).then(function (response) {
                dispatch({
                    type: 'LOGIN_LOGOUT',
                    payload: { token: response.data.token, isLoggedIn: true }
                });
            }).catch(function (error) {
                console.log(error);
            });
        },
        logout: function logout() {
            dispatch({
                type: 'LOGIN_LOGOUT',
                payload: { token: "", isLoggedIn: false }
            });
        }
    };
}

exports.mapStateToProps = mapStateToProps;
exports.mapActionsToProps = mapActionsToProps;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(mapStateToProps, 'mapStateToProps', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/selectors/Selectors.js');
    reactHotLoader.register(mapActionsToProps, 'mapActionsToProps', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/selectors/Selectors.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _reactRouterDom = __webpack_require__(5);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Selectors = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

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
            var _this2 = this;

            var isLoggedIn = this.props.authorization.isLoggedIn;
            var loggedIn = isLoggedIn ? "" : "invisible";
            var loggedOut = isLoggedIn ? "invisible" : "";

            return _react2.default.createElement(
                'div',
                { className: 'menu' },
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    'Home'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/main' },
                    'All posts'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/addPost', className: loggedIn },
                    'Add post'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/login', className: loggedOut },
                    'Login'
                ),
                _react2.default.createElement(
                    'button',
                    { className: loggedIn, onClick: function onClick() {
                            _this2.props.logout();
                        } },
                    'Logout'
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(Menu);
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Menu, 'Menu', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Menu.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var winston = __webpack_require__(31);
var transports = [new winston.transports.File({ filename: 'debug.log', level: 'debug' }), new winston.transports.File({ filename: 'error.log', level: 'error' })];
var logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: transports
});

module.exports = logger;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(transports, 'transports', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/logger.js');
    reactHotLoader.register(logger, 'logger', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/logger.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(7);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userLogin: { type: String, min: [3, 'Too small userLogin'] },
    userPassword: { type: String, min: [3, 'Too small userPassword'] }
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');
    reactHotLoader.register(UserSchema, 'UserSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');
    reactHotLoader.register(UserModel, 'UserModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/UserSchema.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 11 */
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var express = __webpack_require__(8);
var bodyParser = __webpack_require__(13);
var app = express();
var router = __webpack_require__(14);
var errorHandler = __webpack_require__(37);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

app.use('/', router);

app.use(function (err, req, res) {
    if (err) {
        // res.send(err);
        errorHandler.handleError(err, req, res);
    }
});

app.listen(3000);
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(app, 'app', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/server.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(5);

var _Routes = __webpack_require__(16);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(8);
var router = express.Router();

// for SSR

router.use(express.static('build'));

//logging
var logger = __webpack_require__(9);

//authentication
var jwt = __webpack_require__(32);
var passportConfig = __webpack_require__(33)();
var cfg = __webpack_require__(11);

//db
var PostModel = __webpack_require__(36);
var UserModel = __webpack_require__(10);
var mongoose = __webpack_require__(7);
mongoose.connect('mongodb://Siarhei:w333eq1@ds237868.mlab.com:37868/posts');
var db = mongoose.connection;
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
    var context = {};
    var html = _server2.default.renderToString(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(_Routes2.default, null)
    ));
    res.render('index', { entry: html });
});

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


// on routes that end in /posts
// ----------------------------------------------------
router.route('/login')

// create a new user or return existed (accessed at POST http://localhost:3000/login)
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
});

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

// create a post (accessed at POST http://localhost:3000/posts)
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

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(isLoggedIn, 'isLoggedIn', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
    reactHotLoader.register(sendToken, 'sendToken', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
    reactHotLoader.register(router, 'router', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
    reactHotLoader.register(passportConfig, 'passportConfig', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
    reactHotLoader.register(db, 'db', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/router.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(5);

var _Home = __webpack_require__(17);

var _Home2 = _interopRequireDefault(_Home);

var _AddPost = __webpack_require__(20);

var _AddPost2 = _interopRequireDefault(_AddPost);

var _Login = __webpack_require__(21);

var _Login2 = _interopRequireDefault(_Login);

var _store = __webpack_require__(23);

var _store2 = _interopRequireDefault(_store);

var _PostsContainer = __webpack_require__(28);

var _PostsContainer2 = _interopRequireDefault(_PostsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes(props) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/main', component: _PostsContainer2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/addPost', component: _AddPost2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default })
            )
        )
    );
};

var _default = Routes;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Routes, 'Routes', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Routes.js');
    reactHotLoader.register(_default, 'default', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Routes.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(6);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'post' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_Menu2.default, null),
                    _react2.default.createElement(
                        'h2',
                        { className: 'center' },
                        'Welcome to Posts Application'
                    )
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

module.exports = Home;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Home, 'Home', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Home.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(6);

var _Menu2 = _interopRequireDefault(_Menu);

var _Selectors = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPost = function (_React$Component) {
    _inherits(AddPost, _React$Component);

    function AddPost(props) {
        _classCallCheck(this, AddPost);

        var _this = _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).call(this, props));

        var arr = props;
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(AddPost, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            this.props.addPost({ author: this.refs.author.value, post: this.refs.post.value }, this.props.authorization.token);
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

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(AddPost);
AddPost.defaultProps = {
    author: "Anonim",
    post: "post"
};
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(AddPost, 'AddPost', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/AddPost.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(22);

var _Selectors = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        var arr = props;
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            this.props.login({ username: this.refs.username.value, password: this.refs.password.value });
            this.refs.username.value = "";
            this.refs.password.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            var isLoggedIn = this.props.authorization.isLoggedIn;

            if (isLoggedIn) {
                return _react2.default.createElement(_reactRouter.Redirect, { to: '/main' });
            }
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'addPost' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Login'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.submit },
                        _react2.default.createElement('input', { type: 'text', id: 'username', name: 'username', ref: 'username', placeholder: 'Username' }),
                        _react2.default.createElement('input', { name: 'password', type: 'password', ref: 'password', placeholder: 'Password' }),
                        _react2.default.createElement(
                            'button',
                            null,
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(Login);
Login.defaultProps = {
    username: "Username",
    password: "Password"
};
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Login, 'Login', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Login.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _redux = __webpack_require__(24);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _PostReducer = __webpack_require__(26);

var _PostReducer2 = _interopRequireDefault(_PostReducer);

var _UserReducer = __webpack_require__(27);

var _UserReducer2 = _interopRequireDefault(_UserReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
    appPosts: _PostReducer2.default,
    authorization: _UserReducer2.default
});

var store = (0, _redux.createStore)(appReducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));

var _default = store;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(appReducer, 'appReducer', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/store.js');
    reactHotLoader.register(store, 'store', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/store.js');
    reactHotLoader.register(_default, 'default', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/store.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function postsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'FILTER_POSTS':
            {
                var posts = state.posts;
                posts.forEach(function (post) {
                    return post.visible = post.author.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0 || post.author === "";
                });
                return Object.assign({}, state);
            }
        case 'GET_POSTS':
            {
                state.posts = action.payload;
                return Object.assign({}, state);
            }
        default:
            return state;
    }
}

module.exports = postsReducer;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(postsReducer, 'postsReducer', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/reducers/PostReducer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'LOGIN_LOGOUT':
            {
                state.isLoggedIn = action.payload.isLoggedIn;
                state.token = action.payload.token;
                return Object.assign({}, state);
            }
        default:
            return state;
    }
}

module.exports = userReducer;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(userReducer, 'userReducer', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/reducers/UserReducer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(29);

var _Post2 = _interopRequireDefault(_Post);

var _Menu = __webpack_require__(6);

var _Menu2 = _interopRequireDefault(_Menu);

var _Filter = __webpack_require__(30);

var _Filter2 = _interopRequireDefault(_Filter);

var _reactRedux = __webpack_require__(3);

var _Selectors = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostsContainer = function (_React$Component) {
    _inherits(PostsContainer, _React$Component);

    function PostsContainer() {
        _classCallCheck(this, PostsContainer);

        return _possibleConstructorReturn(this, (PostsContainer.__proto__ || Object.getPrototypeOf(PostsContainer)).apply(this, arguments));
    }

    _createClass(PostsContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getPosts();
        }
    }, {
        key: 'render',
        value: function render() {
            var posts = this.props.appPosts.posts;
            var postsArray = [];
            if (posts) {
                var filteredPosts = posts.filter(function (post) {
                    return post.visible;
                });

                filteredPosts.forEach(function (post) {
                    postsArray.push(_react2.default.createElement(_Post2.default, { key: post._id, post: post, deletePost: this.props.deletePost }));
                }.bind(this));
            }

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
                _react2.default.createElement(_Filter2.default, { filterPosts: this.props.filterPosts })
            );
        }
    }]);

    return PostsContainer;
}(_react2.default.Component);

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(PostsContainer);
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(PostsContainer, 'PostsContainer', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/PostsContainer.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Selectors = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

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
            var visible = this.props.authorization.isLoggedIn;
            var className = visible ? "delete" : "delete invisible";
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
                        { className: className, onClick: function onClick() {
                                _this2.props.deletePost(post._id, _this2.props.authorization.token);
                            } },
                        "X"
                    )
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(Post);
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Post, "Post", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Post.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Selectors = __webpack_require__(4);

var _reactRedux = __webpack_require__(3);

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
            var value = this.refs.author.value;
            //this.props.history.push('/filter/'+value);
            this.props.filterPosts(value);
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

module.exports = (0, _reactRedux.connect)(_Selectors.mapStateToProps, _Selectors.mapActionsToProps)(Filter);
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Filter, "Filter", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/browser/components/Filter.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("jwt-simple");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var passport = __webpack_require__(34);
var passportJWT = __webpack_require__(35);
var UserModel = __webpack_require__(10);
var cfg = __webpack_require__(11);
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

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(ExtractJwt, "ExtractJwt", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");
    reactHotLoader.register(Strategy, "Strategy", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");
    reactHotLoader.register(params, "params", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/passportConfig.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var mongoose = __webpack_require__(7);
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    author: { type: String, min: [3, 'Too small Title'] },
    post: String,
    visible: Boolean
});

var PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Schema, 'Schema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');
    reactHotLoader.register(PostSchema, 'PostSchema', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');
    reactHotLoader.register(PostModel, 'PostModel', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/Database/PostSchema.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
    var enterModule = __webpack_require__(0).enterModule;

    enterModule && enterModule(module);
})();

var logger = __webpack_require__(9);
var errorHandler = {};
errorHandler.handleError = function (err, req, res) {
    var oError = "";
    try {
        error = JSON.stringify(err);
    } catch (error) {
        oError = "Error";
    }

    logger.log({
        level: 'error',
        message: 'error: ' + oError + ', date: ' + new Date()
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

    if (res.render) {
        res.render('error', objExplanation);
    } else {
        //means that res is function next()
        res();
    }
};

module.exports = errorHandler;
;

(function () {
    var reactHotLoader = __webpack_require__(0).default;

    var leaveModule = __webpack_require__(0).leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(errorHandler, "errorHandler", "D:/Mavric/FrontCamp/FrontCamp/ReactPart2/server/errorHandler.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ })
/******/ ]);