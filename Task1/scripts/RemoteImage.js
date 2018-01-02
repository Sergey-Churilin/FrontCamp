/**
 * Class representing an image from remote source
 */
export default class RemoteImage {
    /**
     * Create an image with remote picture
     * @param {string} urlToImage - url to image
     */
    constructor(urlToImage) {
        this.img = new Image();
        this.img.src = urlToImage;
    }
}