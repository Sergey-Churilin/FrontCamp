function editController($location, $routeParams, todoFactory) {
    var vm = this;
    vm.task = {};
    vm.text = "";
    vm.header = "Edit a Task";

    todoFactory.getTaskById(Number($routeParams.id), function (task) {
        if (task) {
            vm.task = task;
            vm.text = task.name;
            vm.content = task.content;
        }
    });

    vm.save = function () {
        vm.task.name = vm.text;
        vm.task.content = vm.content;
        todoFactory.save(vm.task);
        $location.path('/home');
    };

}

module.exports = editController;
