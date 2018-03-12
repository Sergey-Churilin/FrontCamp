const logger = require('./logger');
let errorHandler = {};
errorHandler.handleError = function(err, req, res) {
    let oError = "";
    try{
        error = JSON.stringify(err);
    } catch(error) {
        oError = "Error";
    }

    logger.log({
        level: 'error',
        message: 'error: ' + oError + ', date: ' + new Date()
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

    if(res.render){
        res.render('error', objExplanation);
    } else {
        //means that res is function next()
        res();
    }
};

module.exports = errorHandler;
