import Application from './application';
import '../css/style.css';
import Data from '../models/data.json';
let application = null;

window.onload = function () {
    init();
    console.log(Data);
};

function init() {
    application = new Application();
    console.log(application);
}
