import NoImage from './NoImage';
import RemoteImage from './RemoteImage';
import {APP_CONSTANTS} from "./constants";

/**
 * Class representing an image
 */
/*FACTORY PATTERN*/
export default class ImagesFactory {
    /**
     * Create an article
     * @param {string} urlToImage - url to image
     */
    constructor(urlToImage) {
        this.img = this._getImage(urlToImage);

        this.errorListener = () => {
            if (this.img.src !== APP_CONSTANTS.DEFAULT_IMG) {
                this.img.src = APP_CONSTANTS.DEFAULT_IMG;
            }
        };

        this.img.addEventListener('error', this.errorListener);

        this.img.classList.add('img');
    }

    removeListeners() {
        this.img.removeEventListener('error', this.errorListener);
    }

    _getImage(urlToImage) {
        let image;

        if (urlToImage) {
            image = new RemoteImage(urlToImage);
        } else {
            image = new NoImage();
        }

        return image.img;
    }
}