const express = require('express');
import React from 'react';
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');

app.use('/', router);

app.get('*', function (req, res) {
    // res.render('index', {title: 'Welcome page', message: 'Hello stranger!'})
    res.send("Hello");
});


app.listen(8080);