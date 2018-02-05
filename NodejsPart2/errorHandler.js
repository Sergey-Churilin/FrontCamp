const logger = require('./logger');
let errorHandler = {};
errorHandler.handleError = function(err, req, res) {
    logger.log({
        level: 'error',
        message: 'error: ' + JSON.stringify(err) + ', date: ' + new Date()
    });
    console.log("error handled");
    let objExplanation = {
        title: "Error"
    };

    if (err.body) {
        objExplanation.body = err.body
    }

    if (err.body) {
        objExplanation.body = err.body
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
