/**
 * Class representing an article font decorator
 */
export default class BigFontArticleDecorator {
    /**
     * Create an article
     * @param {array} article - article object
     */
    constructor(article) {
        this.article = article;
    }

    /**
     * Create section node with content
     * @return article layout
     */
    getArticleLayout() {
        const articleLayout = this.article.getArticleLayout();
        articleLayout.style.fontSize = '2rem';
        return articleLayout;
    }

    /**
     * @return article section
     */
    getDomElement() {
        this.article.getDomElement();
    }

    /**
     * Append title to article
     *
     * @param {array} articles - Articles from store
     */
    updateLayout(articles) {
        this.article.updateLayout(articles);
    }

    removeListeners(){
        this.article.removeListeners();
    }
}