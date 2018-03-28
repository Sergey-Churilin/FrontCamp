const winston = require('winston');
const transports = [ new winston.transports.File({filename : 'debug.log', level : 'debug'})];
const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: transports
});

module.exports = logger;