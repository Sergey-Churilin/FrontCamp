'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requesterInstance = null;

/**
 * Class representing a request instance
 */

var NewsRequester = function () {
    /**
     * Creates only one instance of requester
     * @param {object} selectedValues - Selected values
     */
    function NewsRequester(selectedValues) {
        _classCallCheck(this, NewsRequester);

        if (!requesterInstance) {
            requesterInstance = this;
        }

        requesterInstance._source = selectedValues.source;
        requesterInstance._endpoint = selectedValues.endpoint;
        requesterInstance._language = selectedValues.language;
        requesterInstance._country = selectedValues.country;
        requesterInstance._searchString = selectedValues.searchString;

        return requesterInstance;
    }

    /**
     * Make a fetch request to the server, return promise
     */


    _createClass(NewsRequester, [{
        key: 'requestNews',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var url, response, responseJson;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = this._getNewsUrl();
                                _context.prev = 1;
                                _context.next = 4;
                                return fetch(url);

                            case 4:
                                response = _context.sent;
                                _context.next = 7;
                                return response.json();

                            case 7:
                                responseJson = _context.sent;
                                return _context.abrupt('return', responseJson);

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](1);
                                return _context.abrupt('return', _context.t0);

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 11]]);
            }));

            function requestNews() {
                return _ref.apply(this, arguments);
            }

            return requestNews;
        }()

        /**
         * Return request url
         * @return {string} Url for request
         */

    }, {
        key: '_getNewsUrl',
        value: function _getNewsUrl() {
            var endpoint = this._getEndpoint();

            var url = '' + URL_TO_API + endpoint + '=' + this._source + '&apiKey=' + API_KEY;

            if (this._searchString) {
                url = url + '&q=' + this._searchString;
            }

            if (this._language) {
                url = url + '&language=' + this._language;
            }

            if (this._country) {
                url = url + '&country=' + this._country;
            }

            return url;
        }

        /**
         * Return endpoint url
         * @return {string} Endpoint for url
         */

    }, {
        key: '_getEndpoint',
        value: function _getEndpoint() {
            var endpoint = void 0;

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
    }]);

    return NewsRequester;
}();