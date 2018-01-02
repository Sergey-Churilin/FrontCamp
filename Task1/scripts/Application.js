import Layout from './Views/Layout';
import Reducers from './Reducers/Reducers';
import Redux from './Redux/Redux';

/*PERFORMS MEDIATOR ROLE*/
/**
 * Class representing the main application logic
 */
export default class Application {
    constructor() {

        const buttonGetArticle = document.getElementById('buttonArticle');
        buttonGetArticle.addEventListener('click', this._onButtonGetArticlePress.bind(this));

        const inputSearch = document.getElementById('inputSearch');
        inputSearch.addEventListener('keyup', this._onInputSearchKeyUp.bind(this));

        this.numberOfNewsRequests = 0;

        // Redux
        const reducer = new Reducers();
        const redux = new Redux();

        this.store = redux.createStore(reducer.dataReducer);

        this.layout = new Layout(this.store);
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
            type:"DATA_CALL"
        });
        this.requestNews();
    }

    /**
     * Call to retrieve newsRequester
     */
    requestNews() {
        if (!this.newsRequester) {
            import(
                /*webpackChunkName:"newsRequester"*/
                /*webpackMode: "lazy"*/
                './NewsRequester')
                .then(NewsRequester => {
                    const newsRequesterClass = NewsRequester.default;
                    this.newsRequester = new newsRequesterClass();
                    //Observer pattern
                    this.newsRequester.subscribe(this.handleArticlesResponse.bind(this));
                    this._requestNews();
                }).catch(error => console.log(error));
        } else {
            this._requestNews();
        }
    }

    /**
     * Call to retrieve news
     */
    _requestNews() {
        const selectedValues = this._getSelectedValues();
        this.newsRequester.setSelectedValues(selectedValues);

        this.newsRequester.requestNews()
            .catch(() => {
                this.layout.clear(true);
            })
    }

    /**
     * Handler to handle call for articles
     * @param {object} response - Call response
     */
    handleArticlesResponse(response) {
        if (response.status && response.status === 'error') {
            this.store.dispatch({
                type:"DATA_ERROR",
                response : response
            });
        }

        const articles = response.articles;

        if (articles && articles.length > 0) {
            this.store.dispatch({
                type:"DATA_RECEIVED",
                articles : articles
            });
            // this.appData.saveData(articles);
            this.layout.drawArticles();

        } else {
            this.layout.clear(true);
        }
    }

    /**
     * Return selected values
     * @return {object} Object contains selected values
     */
    _getSelectedValues() {
        const selectSources = document.getElementById('selectSources');
        const source = selectSources.options[selectSources.selectedIndex].value;

        const selectEndpoints = document.getElementById('selectEndpoints');
        const endpoint = selectEndpoints.options[selectEndpoints.selectedIndex].value;

        const selectLanguages = document.getElementById('selectLanguages');
        let language = selectLanguages.options[selectLanguages.selectedIndex].value;

        const inputSearch = document.getElementById('inputSearch');
        let searchString = inputSearch.value;

        const selectCountries = document.getElementById('selectCountries');
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
