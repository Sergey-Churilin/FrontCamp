function PaginationController(PaginationFactory) {
    var vm = this;
    vm.pager = {};

    vm.$onChanges = function () {
        vm.setPage(1);
    };

    vm.setPage = function (page) {
        // get pager object from service
        vm.pager = PaginationFactory.getPager(vm.elementsAmount, page);
        if (page < 1 || page > vm.pager.totalPages) {
            return;
        }


        vm.updateView({startIndex: vm.pager.startIndex, endIndex: vm.pager.endIndex + 1});
    };
}

module.exports = {
    name: 'pagination',
    template: require('./pagination.html'),
    controller: PaginationController,
    controllerAs: 'PaginationCtrl',
    bindings: {
        updateView: '&',
        elementsAmount: '<'
    }
};