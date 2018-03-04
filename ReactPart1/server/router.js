// call the packages we need
const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../browser/components/App');

// ROUTES FOR OUR SERVER
// =============================================================================

router.get('/', function (req, res) {
    const content = ReactDOMServer.renderToString(<App/>);
    res.render('index', {entry: content});
});

module.exports = router;