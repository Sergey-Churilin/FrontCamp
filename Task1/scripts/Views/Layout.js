import Article from './Article';
import BigFontArticleDecorator from './BigFontArticleDecorator';
import {Util} from '../Utils/Util';
import {
    arrayBindValues,
    arrayBindValuesTexts,
    arrayBindValuesSpanTexts,
    arraySources,
    arrayLanguages,
    arrayCountires,
    arrayEndpoints
} from '../constants';

/**
 * Class responsible for Layout
 */
export default class Layout {
    /**
     * Create Layout
     * @param {object} store - Store of the application
     */
    constructor(store) {
        this.appData = store;
        this.articlesCount = 0;
        this.articles = [];
        this.body = document.body;

        this._createLayout();
    }

    _createLayout() {
        this._createTopLayout();
        this._createSelectBar();
        this._createSelectedValues();
        this._createMainSection();
        this._createSources();
        this._createEndpoints();
        this._createLanguages();
        this._createCountries();
        this._createSearchField();
        this._createSearchButton();
    }

    _createTopLayout() {
        this.wrapper = Util.createDomNode({
            element: 'div',
            classList: ['wrapper'],
            parent: document.body
        });


        this.main = Util.createDomNode({
            element: 'main',
            parent: this.wrapper
        });

        this._createFooter();
    }

    _createFooter() {
        const footer = Util.createDomNode({
            element: 'footer',
            classList: ['footer']
        });

        const p = Util.createDomNode({
            element: 'p',
            parent: footer
        });

        const pText = Util.createDomNode({
            nodeType: 'text',
            text: "Created using ",
            parent: p
        });

        const a = Util.createDomNode({
            element: 'a',
            text: "Created using ",
            attributes: {'href': 'https://newsapi.org/', 'target': '_blank'},
            parent: p
        });

        Util.createDomNode({
            nodeType: 'text',
            text: "https://newsapi.org/",
            parent: a
        });

        this.wrapper.appendChild(footer);
    }

    /**
     * Create select bar
     */
    _createSelectBar() {
        this.selectBar = Util.createDomNode({
            element: 'header',
            classList: ['selectBar'],
            parent: this.main
        });
    }

    _createSelectedValues() {
        this.selectedValues = Util.createDomNode({
            element: 'section',
            classList: ['selectedValues'],
            parent: this.main
        });

        this._addSelectedValuesContent();
    }

    _addSelectedValuesContent() {
        arrayBindValues.forEach((value, index) => {
            let divSpanText;

            const div = Util.createDomNode({
                element: 'div'
            });

            const divText = Util.createDomNode({
                nodeType: 'text',
                text: arrayBindValuesTexts[index],
                parent: div
            });

            const divSpan = Util.createDomNode({
                element: 'span',
                attributes: {'data-bind': value},
                parent: div
            });

            if (arrayBindValuesSpanTexts[index]) {
                divSpanText = Util.createDomNode({
                    nodeType: 'text',
                    text: arrayBindValuesSpanTexts[index],
                    parent: divSpan
                });
            }

            this.selectedValues.appendChild(div);
        });

    }

    /**
     * Create main section
     */
    _createMainSection() {
        this.mainSection = Util.createDomNode({
            element: 'section',
            classList: ['mainSection'],
            parent: this.main
        });
    }

    /**
     * Create select with news sources
     */
    _createSources() {
        this.sources = Util.createDomNode({
            element: 'select',
            classList: ['select'],
            id: 'selectSources',
            attributes: {'data-bind': 'source'}
        });

        arraySources.forEach((source) => {
            Util.createDomNode({
                element: 'option',
                classList: ['select'],
                value: source,
                html: source,
                parent: this.sources
            });
        });

        this.selectBar.appendChild(this.sources);
    }

    /**
     * Create select with news endpoints
     */
    _createEndpoints() {
        this.endpoints = Util.createDomNode({
            element: 'select',
            classList: ['select'],
            id: 'selectEndpoints',
            attributes: {'data-bind': 'endpoint'}
        });

        arrayEndpoints.forEach((source) => {
            Util.createDomNode({
                element: 'option',
                classList: ['select'],
                value: source.path,
                html: source.text,
                parent: this.endpoints
            });
        });

        this.selectBar.appendChild(this.endpoints);
    }

    /**
     * Create select with possible news languages
     */
    _createLanguages() {
        this.langs = Util.createDomNode({
            element: 'select',
            classList: ['select'],
            id: 'selectLanguages',
            attributes: {'data-bind': 'language'}
        });

        arrayLanguages.forEach((source) => {
            Util.createDomNode({
                element: 'option',
                classList: ['select'],
                value: source.lang,
                html: source.desc,
                parent: this.langs
            });
        });

        this.selectBar.appendChild(this.langs);
    }

    /**
     * Create select with possible news countries
     */
    _createCountries() {
        this.countries = Util.createDomNode({
            element: 'select',
            classList: ['select'],
            id: 'selectCountries',
            parent: this.selectBar,
            attributes: {'data-bind': 'country'}
        });

        arrayCountires.forEach((source) => {
            Util.createDomNode({
                element: 'option',
                classList: ['select'],
                value: source.lang,
                html: source.desc,
                parent: this.countries
            });
        });

        this.selectBar.appendChild(this.countries);
    }

    /**
     * Create search field
     */
    _createSearchField() {
        this.inputSearch = Util.createDomNode({
            element: 'input',
            classList: ['search'],
            id: 'inputSearch',
            parent: this.selectBar,
            attributes: {'data-bind': 'search'}
        });
    }

    /**
     * Create search button
     */
    _createSearchButton() {
        this.buttonGetArticle = Util.createDomNode({
            element: 'button',
            classList: ['buttonGetArticle']
        });

        Util.createDomNode({
            nodeType: 'text',
            text: 'Get Article',
            parent: this.buttonGetArticle
        });

        this.selectBar.appendChild(this.buttonGetArticle);
    }

    getButtonArticle() {
        return this.buttonGetArticle;
    }

    getSearch() {
        return this.inputSearch;
    }

    getSources() {
        return this.sources;
    }

    getEndpoints() {
        return this.endpoints;
    }

    getCountries() {
        return this.countries;
    }

    getLanguages() {
        return this.langs;
    }

    /**
     * Draw articles
     */
    drawArticles() {
        const articles = this.appData.getState().articles;
        //const articlesWrapper = document.createElement('section');
        if (articles.length === 0) {
            this.clear(false);
        } else {
            const count = articles.length - this.articlesCount;
            if (this.articlesCount === 0) {
                articles.forEach((oneArticle, index, articles) => {
                    this.appendArticle(index, articles);
                });
            } else {
                if (count > 0) {
                    articles.forEach((oneArticle, index, articles) => {
                        if (index > this.articlesCount - 1) {
                            this.appendArticle(index, articles);
                        }
                    });
                } else {
                    this.removeArticles(articles.length);
                }
            }
        }

        this.articlesCount = articles.length;

        this.refreshLayout();
    }

    /**
     * Refresh current layout
     */
    refreshLayout() {
        const articles = this.appData.getState().articles;
        this.articles.forEach(article => article.updateLayout(articles));
    }

    /**
     * Append article to layout
     */
    appendArticle(index, articles) {
        const article = new Article(index, articles);
        const bigFontArticleDecorator = new BigFontArticleDecorator(article);
        this._appendArticle(bigFontArticleDecorator, index, this.mainSection);
        this.articles.push(article);
    }

    /**
     * Remove article from layout
     */
    removeArticles(newCount) {
        let currentCount = this.articlesCount;

        while (currentCount > newCount) {
            const article = this.articles.pop();
            article.removeListeners();
            const articleNode = article.getDomElement();
            articleNode.parentNode.removeChild(articleNode);
            currentCount--;
        }

        this.articlesCount = currentCount;
    }

    /**
     * Clear content
     */
    clear(bSetNoContent) {
        let content = 'No content';

        if (!bSetNoContent) {
            content = '';
        }

        this.mainSection.innerHTML = content;
        this.articles = [];
    }

    /**
     * Append an article to page
     *
     * @param {object} article - Article object
     * @param {number} index - Index number of article
     * @param {object} articlesWrapper - DOM element where article will be appended
     */
    _appendArticle(article, index, articlesWrapper) {
        const section = article.getArticleLayout();
        articlesWrapper.appendChild(section);

        this._stylizeSection(section, index, articlesWrapper);
    }

    /**
     * Append title to article
     *
     * @param {object} section - Section DOM element
     * @param {number} index - Index number of article
     * @param {object} articlesWrapper - DOM element where article will be appended
     */
    _stylizeSection(section, index, articlesWrapper) {
        const bOdd = index % 2 === 0;

        if (bOdd) {
            section.classList.add('sectionLeft');
        } else {
            section.classList.add('sectionRight');
            const sectionCleaner = document.createElement('section');
            sectionCleaner.classList.add('sectionCleaner');
            articlesWrapper.appendChild(sectionCleaner);
        }
    }
}