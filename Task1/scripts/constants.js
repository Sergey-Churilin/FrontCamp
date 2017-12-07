'use strict';
//constants
const API_KEY = 'f5d0ede14cdc42a990a57ff137f6c5ee';
const DEFAULT_IMG = 'images/defaultImage.png';
const URL_TO_API = 'https://newsapi.org/v2/';

const API_CONSTANTS = {
    API_KEY,
    URL_TO_API
};

const APP_CONSTANTS = {
    DEFAULT_IMG
};

const arrayEndpoints = [
    {
        'text': 'Top headlines',
        'path': 'top-headlines'
    },
    {
        'text': 'All articles',
        'path': 'everything'
    },
    {
        'text': 'All sources',
        'path': 'sources'
    }
];

export {
    API_CONSTANTS,
    APP_CONSTANTS,
    arrayEndpoints
}

