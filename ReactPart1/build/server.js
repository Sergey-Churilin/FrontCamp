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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// call the packages we need
var express = __webpack_require__(1);
var router = express.Router();
var React = __webpack_require__(0);
var ReactDOMServer = __webpack_require__(11);
var App = __webpack_require__(6);
// const logger = require('./logger');
// const jwt = require("jwt-simple");
// const BlogModel = require('./Database/PostSchema.js');
//const UserModel = require('./Database/UserSchema.js');
//const passportConfig = require('./passportConfig')();
// const cfg = require("./config.js");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://Siarhei:w333eq1@ds211588.mlab.com:11588/blog');
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// router.use(passportConfig.initialize());
// ROUTES FOR OUR SERVER
// =============================================================================
// middleware to use for all requests
router.use(function (req, res, next) {
    // do logging
    var url = req.headers.host + req.originalUrl;

    // logger.log({
    //     level: 'info',
    //     message: 'url: ' + JSON.stringify(url) + ', date: ' + new Date()
    // });
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/p', function (req, res) {
    //res.json({message: 'hooray! welcome to our blog!'});
    var content = ReactDOMServer.renderToString(React.createElement(App, null));
    // console.log(content);
    // res.render('index', {entry: content});
    //  res.send(
    //      "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Netflix App</title></head><body><div id='app'>123</div><script src='dist/bundle.js'  defer></script></body></html>"
    //
    //  )
    res.send("ppppppppppp");
});

// on routes that end in /blogs
// ----------------------------------------------------

module.exports = router;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(router, 'router', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/router.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;
var AddPost = function (_React$Component) {
    _inherits(AddPost, _React$Component);

    function AddPost(props) {
        _classCallCheck(this, AddPost);

        var _this = _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).call(this, props));

        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(AddPost, [{
        key: "submit",
        value: function submit(e) {
            e.preventDefault();
            this.props.addPost({ author: this.refs.author.value, post: this.refs.post.value });
            this.refs.author.value = "";
            this.refs.post.value = "";
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "addPost" },
                _react2.default.createElement(
                    "h2",
                    null,
                    "Add post"
                ),
                _react2.default.createElement(
                    "form",
                    { onSubmit: this.submit },
                    _react2.default.createElement("input", { type: "text", id: "author", name: "author", ref: "author", placeholder: "author name" }),
                    _react2.default.createElement("textarea", { name: "post", ref: "post", placeholder: "post" }),
                    _react2.default.createElement(
                        "button",
                        null,
                        "Add"
                    )
                )
            );
        }
    }]);

    return AddPost;
}(_react2.default.Component);

var _default = AddPost;
exports.default = _default;

AddPost.defaultProps = {
    author: "Anonim",
    post: "post"
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AddPost, "AddPost", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/AddPost.js");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/AddPost.js");
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(8);

var _Post2 = _interopRequireDefault(_Post);

var _AddPost = __webpack_require__(5);

var _AddPost2 = _interopRequireDefault(_AddPost);

var _Filter = __webpack_require__(7);

var _Filter2 = _interopRequireDefault(_Filter);

var _store = __webpack_require__(9);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uuidV4 = __webpack_require__(12);

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
                'Hello world'
            );
        }
    }]);

    return App;
}(_react2.default.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(App, 'App', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/App.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/App.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _default = Filter;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Filter, "Filter", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Filter.js");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Filter.js");
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _default = Post;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Post, "Post", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Post.js");

    __REACT_HOT_LOADER__.register(_default, "default", "D:/Mavric/FrontCamp/FrontCamp/ReactPart1/browser/components/Post.js");
}();

;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(1);

var bodyParser = __webpack_require__(3);
var router = __webpack_require__(2);
var path = __webpack_require__(4);
//const errorHandler = require('./errorHandler');
//const passportConfig = require('./passportConfig')();

var app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');

//app.set('views', path.join(__dirname, './browser/views'));
app.use('/', router);

app.get('*', function (req, res) {
    // res.render('index', {title: 'Welcome page', message: 'Hello stranger!'})
    res.send("Hello");
});

app.use(function (err, req, res, next) {
    if (err) {
        res.send(err);
        //errorHandler.handleError(err, req, res);
    }
});

app.listen(8080);
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(app, 'app', 'D:/Mavric/FrontCamp/FrontCamp/ReactPart1/server/server.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })
/******/ ]);