import Application from './scripts/application';

let application = null;

window.onload = function () {
    init();
};

function init() {
    application = new Application();
    console.log(application);
}
