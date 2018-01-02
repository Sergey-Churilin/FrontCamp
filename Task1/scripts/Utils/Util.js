/**
 * Class representing an article
 */
export default class Util {
    /**
     * Create instance of class
     */
    constructor() {
        if (!Util.instance) {
            Util.instance = this;
        }

        return Util.instance;
    }

    /**
     * Static method
     * @return formatter date
     */
    static formatDate(oDate){
        const hours = oDate.getHours();
        const formattedHours = hours < 10 ? `0${hours}` : hours;

        const minutes = oDate.getMinutes();
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${oDate.getDate()}/${oDate.getMonth()}/${oDate.getFullYear()}  ${formattedHours}:${formattedMinutes}`;
    }
}