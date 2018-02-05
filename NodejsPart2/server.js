// call the packages we need
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers');
const errorHandler = require('./errorHandler');
const passport = require('./passportConfig').passport;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

app.get('*', function (req, res) {
    res.render('index', {title: 'Welcome page', message: 'Hello stranger!'})
});

app.use(function (err, req, res, next) {
    if(err){
        errorHandler.handleError(err, req, res);
    }
});

app.listen(8080);