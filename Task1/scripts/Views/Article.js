import ImagesFactory from '../ImagesFactory';
import Util from '../Utils/Util';
import {APP_CONSTANTS} from "../constants";

/**
 * Class representing an article
 */
export default class Article {
    /**
     * Create an article
     * @param {number} index - index of article in store
     * @param {array} articles - array of articles in store
     */
    constructor(index, articles) {
        this.index = index;
        this.path = articles[index];
    }

    /**
     * Create section node with content
     * @return article layout
     */
    getArticleLayout() {
        this.section = document.createElement('section');
        this.section.classList.add('articleSection');

        const aside = document.createElement('aside');
        aside.classList.add('aside');

        const article = document.createElement('article');
        article.classList.add('article');

        this._appendTitleToArticle(article);
        this._appendDescriptionToArticle(article);
        this._appendImageToArticle(aside);
        this._appendAuthorToArticle(article);
        this._appendPublishedDateToArticle(article);

        this.section.appendChild(aside);
        this.section.appendChild(article);

        return this.section;
    }

    /**
     * @return article section
     */
    getDomElement() {
        return this.section;
    }

    /**
     * Append title to article
     *
     * @param {object} article - Article DOM element
     */
    _appendTitleToArticle(article) {
        //create title for article on the page
        const h2 = document.createElement('h2');
        const aTitle = document.createElement('a');
        const aTitleText = document.createTextNode(this.path.title);
        aTitle.setAttribute('href', this.path.url);
        aTitle.setAttribute('target', '_blank');
        aTitle.appendChild(aTitleText);
        h2.appendChild(aTitle);
        this.aTitle = aTitle;
        article.appendChild(h2);
    }

    /**
     * Append title to article
     *
     * @param {object} article - Article DOM element
     */
    _appendDescriptionToArticle(article) {
        const pDesc = document.createElement('p');
        pDesc.classList.add('desc');

        const aDesc = document.createElement('a');
        const aDescText = document.createTextNode(this.path.description);
        aDesc.setAttribute('href', this.path.url);
        aDesc.setAttribute('target', '_blank');
        aDesc.appendChild(aDescText);
        this.aDesc = aDesc;
        pDesc.appendChild(aDesc);
        article.appendChild(pDesc);
    }

    /**
     * Append title to article
     *
     * @param {object} aside -  Aside DOM element
     */
    _appendImageToArticle(aside) {
        const aImg = document.createElement('a');
        aImg.setAttribute('href', this.path.url);
        aImg.setAttribute('target', '_blank');

        const imageObject = new ImagesFactory(this.path.urlToImage);
        this.img = imageObject.img;
        aImg.appendChild(this.img);
        this.aImg = aImg;
        aside.appendChild(aImg);
    }

    /**
     * Append title to article
     *
     * @param {object} article - Article DOM element
     */
    _appendAuthorToArticle(article) {
        //create author for article on the page
        const pAuthor = document.createElement('p');
        let name = '';

        if (this.path.author) {
            name = this.path.author;
        }

        const pAuthorText = document.createTextNode(name);
        pAuthor.classList.add('author');
        pAuthor.appendChild(pAuthorText);

        this.pAuthor = pAuthor;
        article.appendChild(pAuthor);
    }


    /**
     * Append title to article
     *
     * @param {object} article - Article DOM element
     */
    _appendPublishedDateToArticle(article) {
        //create published date for article on the page
        const pDatePublished = document.createElement('p');
        let formattedDate = '';

        if (this.path.date) {
            const oDate = new Date(this.path.date);
            const formattedDate = Util.formatDate(oDate);
        }

        const pDatePublishedText = document.createTextNode(formattedDate);
        pDatePublished.classList.add('publishedDate');
        pDatePublished.appendChild(pDatePublishedText);
        this.pDatePublished = pDatePublished;
        article.appendChild(pDatePublished);
    }

    /**
     * Append title to article
     *
     * @param {array} articles - Articles from store
     */
    updateLayout(articles) {
        this.path = articles[this.index];

        this.aTitle.innerText = this.path.title;
        this.aTitle.setAttribute('href', this.path.url);

        this.aDesc.innerText = this.path.description;
        this.aDesc.setAttribute('href', this.path.url);

        if (this.path.urlToImage) {
            this.img.src = this.path.urlToImage;
        } else {
            this.img.src = APP_CONSTANTS.DEFAULT_IMG;
        }

        this.aImg.setAttribute('href', this.path.url);

        if (this.path.author) {
            this.pAuthor.innerText = this.path.author;
        } else {
            this.pAuthor.innerText = '';
        }

        if (this.path.date) {
            this.pDatePublished.innerText = Util.formatDate(new Date(this.path.date));
        } else {
            this.pDatePublished.innerText = '';
        }
    }
}