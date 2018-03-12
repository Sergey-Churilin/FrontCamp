const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const errorHandler = require('./errorHandler');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.use('/', router);

app.use(function (err, req, res) {
    if(err){
       // res.send(err);
        errorHandler.handleError(err, req, res);
    }
});

app.listen(3000);