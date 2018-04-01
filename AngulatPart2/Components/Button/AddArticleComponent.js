function AddArticleController($location) {
    var vm = this;

    vm.addArticle = function () {
        $location.path('/add');
    };
}

module.exports = {
    name: 'btnaddarticle',
    template: require('./btnAddArticle.html'),
    controller: AddArticleController,
    controllerAs: 'addCtrl'
};