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

const arraySources = [
    "abc-news",
    "bbc-sport",
    "bbc-news",
    "cnn",
    "fox-news",
    "google-news-ru"
];

const arrayLanguages = [
    {
        'lang': '',
        'desc': 'Select language'
    },
    {
        'lang': 'ar',
        'desc': 'Arabian'
    },
    {
        'lang': 'en',
        'desc': 'English'
    },
    {
        'lang': 'de',
        'desc': 'Deutch'
    },
    {
        'lang': 'es',
        'desc': 'Spain'
    },
    {
        'lang': 'fr',
        'desc': 'French'
    },
    {
        'lang': 'it',
        'desc': 'Italy'
    },
    {
        'lang': 'pt',
        'desc': 'Portuguese'
    },
    {
        'lang': 'ru',
        'desc': 'Russian'
    },
    {
        'lang': 'sv',
        'desc': 'Swedish'
    }
];

const arrayCountires = [
    {
        'lang': '',
        'desc': 'Select country'
    },
    {
        'lang': 'ar',
        'desc': 'Arabian'
    },
    {
        'lang': 'de',
        'desc': 'Deutch'
    },
    {
        'lang': 'es',
        'desc': 'Spain'
    },
    {
        'lang': 'fr',
        'desc': 'French'
    },
    {
        'lang': 'it',
        'desc': 'Italy'
    },
    {
        'lang': 'pt',
        'desc': 'Portuguese'
    },
    {
        'lang': 'ru',
        'desc': 'Russian'
    },
    {
        'lang': 'sv',
        'desc': 'Swedish'
    }
];

const arrayEndpoints = [
    {
        'text': 'Select endpoint',
        'path': ''
    },
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

const arrayBindValues = ['source', 'endpoint', 'language', 'country', 'search'];
const arrayBindValuesTexts = ['Selected source: ', 'Selected endpoint: ', 'Selected language:', 'Selected country: ', 'Search string: '];
const arrayBindValuesSpanTexts = ['abc-news'];

export {
    API_CONSTANTS,
    APP_CONSTANTS,
    arraySources,
    arrayLanguages,
    arrayCountires,
    arrayEndpoints,
    arrayBindValues,
    arrayBindValuesTexts,
    arrayBindValuesSpanTexts
}

