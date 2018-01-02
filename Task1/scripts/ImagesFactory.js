import NoImage from './NoImage';
import RemoteImage from './RemoteImage';
import {APP_CONSTANTS} from "./constants";
/*PERFORMS FACTORY ROLE*/
/**
 * Class representing an image
 */
export default class ImagesFactory {
    /**
     * Create an article
     * @param {string} urlToImage - url to image
     */
    constructor(urlToImage) {
        let image;

        if (urlToImage) {
            image = new RemoteImage(urlToImage);
        } else {
            image = new NoImage();
        }

        this.img = image.img;

        this.img.onerror = function (oEvent) {
            if (!this.src || this.src !== APP_CONSTANTS.DEFAULT_IMG) {
                this.src = APP_CONSTANTS.DEFAULT_IMG;
            }
        };

        this.img.classList.add('img');
    }
}