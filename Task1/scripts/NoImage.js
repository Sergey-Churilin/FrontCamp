import {APP_CONSTANTS} from "./constants";

/**
 * Class representing an image from local source
 */
export default class NoImage {
    /**
     * Create an image with default picture
     */
    constructor() {
        this.img = new Image();
        this.img.src = APP_CONSTANTS.DEFAULT_IMG;
    }
}