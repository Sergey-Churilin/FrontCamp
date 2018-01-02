import {API_CONSTANTS} from './constants';

let requesterInstance = null;

/*OBSERVER PATTERN*/
/**
 * Class representing a request instance
 */

export default class NewsRequester {
    /**
     * Creates only one instance of requester
     */
    constructor() {
        if (!requesterInstance) {
            requesterInstance = this;
            this.handlers = [];
        }

        return requesterInstance;
    }

    /**
     * Setter for class properties
     * @param {object} selectedValues - Selected values
     */
    setSelectedValues(selectedValues) {
        this._source = selectedValues.source;
        this._endpoint = selectedValues.endpoint;
        this._language = selectedValues.language;
        this._country = selectedValues.country;
        this._searchString = selectedValues.searchString;
    }

    /**
     * Subscribe method
     * @param {function} fn - function that subscribes for class
     */
    subscribe(fn) {
        this.handlers.push(fn);
    }

    /**
     * Unsubscribe method
     * @param {function} fn - function that will be unsubscribed
     */
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            item => {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }

    /**
     * Unsubscribe method
     * @param {array} results - array of functions that will be called
     */
    fire(results) {
        this.handlers.forEach(item => item(results));
    }

    /**
     * Make async request to the server, return articles
     */
    // example with async / await
    /*    async requestNews() {
            const url = this._getNewsUrl();

            try {
                const response = await fetch(url);
                const responseJson = await response.json();
                return responseJson;
            } catch (error) {
                return error;
            }
        }*/

    /**
     * Make a fetch request to the server, return promise
     */
    // example with fetch
    requestNews() {
        const url = this._getNewsUrl();
        return fetch(url)
            .then(response => response.json())
            .then(response => this.fire(response))//return response;
            .catch(error => {
                console.log(error);
                return error;
            });
    }

    /**
     * Return request url
     * @return {string} Url for request
     */
    _getNewsUrl() {
        const endpoint = this._getEndpoint();
        let url = `${API_CONSTANTS.URL_TO_API}${endpoint}=${this._source}&apiKey=${API_CONSTANTS.API_KEY}`;

        if (this._searchString) {
            url = `${url}&q=${this._searchString}`;
        }

        if (this._language) {
            url = `${url}&language=${this._language}`;
        }

        if (this._country) {
            url = `${url}&country=${this._country}`;
        }

        return url;
    }

    /**
     * Return endpoint url
     * @return {string} Endpoint for url
     */
    _getEndpoint() {
        let endpoint;

        switch (this._endpoint) {
            case 'top-headlines':
                endpoint = 'top-headlines?sources';
                break;
            case 'everything':
                endpoint = 'everything?';
                break;
            case 'sources':
                endpoint = 'sources?';
                break;
            default:
                endpoint = 'top-headlines?sources';
                break;
        }

        return endpoint;
    }
}

