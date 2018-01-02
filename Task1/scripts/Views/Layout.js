import Article from './Article';

/**
 * Class responsible for Layout
 */
export default class Layout {
    /**
     * Create Layout
     * @param {object} store - Store of the application
     */
    constructor(store) {
        this.mainSection = document.getElementById('mainSection');
        this.appData = store;
        this.articlesCount = 0;
        this.articles = [];
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
        this._appendArticle(article, index, this.mainSection);
        this.articles.push(article);
    }

    /**
     * Remove article from layout
     */
    removeArticles(newCount) {
        let currentCount = this.articlesCount;

        while (currentCount > newCount) {
            const article = this.articles.pop();
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