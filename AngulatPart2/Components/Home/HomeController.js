function HomeController(todoFactory) {
    var vm = this;
    vm.tasks = [];
    vm.items = [];

    vm.callback = function (todos) {
        vm.tasks = todos;
    };

    todoFactory.getTasks(vm.callback);

    vm.viewDeleted = function () {
        vm.tasks = todoFactory.getTasks(vm.callback);
    };
    vm.updateView = function (startIndex, endIndex) {
        vm.items = vm.tasks.slice(startIndex, endIndex);
    };
}


module.exports = HomeController;
