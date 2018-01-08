import Application from './Application';
import '../css/style.css';
import Data from '../models/data.json';
import DataBinding from './Utils/DataBinder';

window.onload = function () {
    init();
    console.log(Data);
};

function init() {
    const application = new Application();
    new DataBinding();
    console.log(application.numberOfNewsRequests);
}
