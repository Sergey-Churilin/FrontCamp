const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

app.listen(3000);