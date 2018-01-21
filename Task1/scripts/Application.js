import Layout from './Views/Layout';
import Reducers from './Reducers/Reducers';
import Redux from './Redux/Redux';
import NewsRequester from './NewsRequester';
import {API_CONSTANTS} from "./constants";

/*PERFORMS MEDIATOR ROLE*/
/**
 * Class representing the main application logic
 */
export default class Application {
    constructor() {
        // Redux
        const reducer = new Reducers();
        const redux = new Redux();

        this.store = redux.createStore(reducer.dataReducer);

        this.layout = new Layout(this.store);

        this._addListeners();

        this.numberOfNewsRequests = 0;


    }

    _addListeners() {
        const buttonGetArticle = this.layout.getButtonArticle();
        buttonGetArticle.addEventListener('click', () => this._onButtonGetArticlePress());

        const inputSearch = this.layout.getSearch();
        inputSearch.addEventListener('keyup', () => this._onInputSearchKeyUp());
    }

    /**
     * Handler, which fired when key up on search input
     */
    _onInputSearchKeyUp(e) {
        e = e || window.event;

        if (e.keyCode === 13) {
            this._onButtonGetArticlePress();
        }

        return false;
    }

    /**
     * Handler, which fired when GetArticle or enter button pressed
     */

    /*DECORATOR PATTERN*/

    // decorator to handle number of requests
    _onButtonGetArticlePress() {
        this.numberOfNewsRequests++;
        this.store.dispatch({
            type: "DATA_CALL"
        });
        this.requestNews();
    }

    /**
     * Call to retrieve newsRequester
     */
    requestNews() {
        if (!this.newsRequester) {
            this.newsRequester = new NewsRequester();
            //Observer pattern
            this.newsRequester.subscribe((response) => this.handleArticlesResponse(response));
            this._requestNews();
        } else {
            this._requestNews();
        }
    }

    /**
     * Call to retrieve news
     */
    _requestNews() {
        const articles = this._getArticlesFromCache();

        if(articles){
            this._onArticleReceived(articles, true);
        } else {
            const selectedValues = this._getSelectedValues();
            this.newsRequester.setSelectedValues(selectedValues);

            this.newsRequester.requestNews()
                .catch(() => {
                    this.layout.clear(true);
                })
        }
    }

    _getArticlesFromCache(){
        const hash = this._getCacheHash();
        const cache = this.store.getState().cache;
        let articles = null;

        if(cache && cache[hash]){
            const currTime = new Date().getTime();
            const prevTime = cache[hash].time;

            if((currTime-prevTime) < 10000){
                articles = cache[hash].articles;
            }
        }

        return articles;
    }

    /**
     * Handler to handle call for articles
     * @param {object} response - Call response
     */
    handleArticlesResponse(response) {
        if (response.status && response.status === 'error') {
            this.store.dispatch({
                type: "DATA_ERROR",
                response: response
            });
        }

        const articles = response.articles;

        this._onArticleReceived(articles, false);
    }

    _onArticleReceived(articles, isFromCache){
        if (articles && articles.length > 0) {
            if(isFromCache){
                this.store.dispatch({
                    type: "DATA_RECEIVED_FROM_CACHE",
                    articles: articles
                });
            } else {
                const hash = this._getCacheHash();
                this.store.dispatch({
                    type: "DATA_RECEIVED",
                    articles: articles,
                    hash : hash
                });
            }

            this.layout.drawArticles();

        } else {
            this.layout.clear(true);
        }
    }

    _getCacheHash() {
        const selectedValues = this._getSelectedValues();
        const hash = `${selectedValues.source}-${selectedValues.endpoint}-${selectedValues.language}-${selectedValues.searchString}-${selectedValues.country}`;
        return hash;
    }

    /**
     * Return selected values
     * @return {object} Object contains selected values
     */
    _getSelectedValues() {
        const selectSources = this.layout.getSources();
        const source = selectSources.options[selectSources.selectedIndex].value;

        const selectEndpoints = this.layout.getEndpoints();
        const endpoint = selectEndpoints.options[selectEndpoints.selectedIndex].value;

        const selectLanguages = this.layout.getLanguages();
        let language = selectLanguages.options[selectLanguages.selectedIndex].value;

        const inputSearch = this.layout.getSearch();
        let searchString = inputSearch.value;

        const selectCountries = this.layout.getCountries();
        let country = selectCountries.options[selectCountries.selectedIndex].value;

        return {
            source,
            endpoint,
            language,
            searchString,
            country
        };
    }
}
