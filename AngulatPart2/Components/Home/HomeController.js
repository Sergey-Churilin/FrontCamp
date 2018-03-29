function HomeController($timeout, todoFactory) {
    var vm = this;
    vm.items = [];
    vm.tasks = todoFactory.getTasks();

    vm.viewDeleted = function () {
        vm.tasks = todoFactory.getTasks();
    };
    vm.updateView = function (startIndex, endIndex) {
        vm.items = vm.tasks.slice(startIndex, endIndex);
    };
}


module.exports = HomeController;
