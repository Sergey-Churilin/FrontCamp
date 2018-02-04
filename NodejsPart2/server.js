// call the packages we need
const express = require('express');
const expressSession = require('express-session');
const MemoryStore =expressSession.MemoryStore;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./routers');
const errorHandler = require('./errorHandler');
const passport = require('./passportConfig').passport;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({
    name : 'app.sid',
    secret: "1234567890QWERTY",
    resave: true,
    store: new MemoryStore(),
    saveUninitialized: true
}));
//app.use(expressSession({ secret: 'keyboard cat',resave: false, saveUninitialized: false}));
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