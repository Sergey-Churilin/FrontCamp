const winston = require("winston");


function makeLogger() {
    const transports = [new winston.transports.File({ filename: 'debug.log', level: 'debug' })];
    return new winston.Logger({transports : transports});
}

module.exports = function(module){
    return makeLogger(module.filename);
};