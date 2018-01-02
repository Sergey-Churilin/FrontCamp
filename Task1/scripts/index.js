import Application from './application';
import '../css/style.css';
import Data from '../models/data.json';
import DataBinding from './Utils/DataBinding';

window.onload = function () {
    init();
    console.log(Data);
};

function init() {
    const application = new Application();
    new DataBinding();
    console.log(application.numberOfNewsRequests);
}
