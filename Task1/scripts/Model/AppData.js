/**
 * Class representing an article
 */
export default class AppData {
    /**
     * Create an Application Data
     */
    constructor() {
        if (!AppData.instance) {
            AppData.instance = this;
            this._articles = [];
        }

        return AppData.instance;
    }

    get articles() {
        return this._articles;
    }

    set articles(articles) {
        this._articles = articles;
    }

    saveData(articles) {
        this._articles = articles;
    }


}