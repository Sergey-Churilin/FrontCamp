// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./logger');
const router = express.Router();

const app = express();
app.use('/', router);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');


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
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our blog!'});
});

// on routes that end in /blogs
// ----------------------------------------------------
router.route('/blogs')

// create a blog (accessed at POST http://localhost:8080/blogs)
    .post(function (req, res) {
        console.log("Blog created");
        console.log(req.body);
        res.json({message: 'Blog created!'});
    })

    // get all the blogs (accessed at GET http://localhost:8080/blogs)
    .get(function (req, res) {
        console.log("Blogs requested");
        res.json({message: 'Blogs requested!'});
    });

// on routes that end in /blogs/:blog_id
// ----------------------------------------------------
router.route('/blogs/:blog_id')
// get the blog with that id
    .get(function (req, res) {
        console.log('Blog with id ' + req.params.blog_id + ' requested');
        res.json({message: 'Blog with id ' + req.params.blog_id + ' requested'});
    })

    // update the blog with this id (accessed at PUT http://localhost:8080/blogs/:blog_id)
    .put(function (req, res) {
        console.log('Blog with id ' + req.params.blog_id + ' UPDATED');
        res.json({message: 'Blog with id ' + req.params.blog_id + ' UPDATED'});
    })
    // delete the blog with this id (accessed at DELETE http://localhost:8080/blogs/:blog_id)
    .delete(function (req, res) {
        console.log('Blog with id ' + req.params.blog_id + ' DELETED');
        res.json({message: 'Blog with id ' + req.params.blog_id + ' DELETED'});
    });


app.get('*', function (req, res) {
    res.render('index', {title: 'Welcome page', message: 'Hello stranger!'})
});

app.listen(8080);