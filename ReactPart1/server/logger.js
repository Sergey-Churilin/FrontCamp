const winston = require('winston');
const transports = [
    new winston.transports.File({filename : 'debug.log', level : 'debug'}),
    new winston.transports.File({filename : 'error.log', level : 'error'})
];
const logger = new winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: transports
});

module.exports = logger;