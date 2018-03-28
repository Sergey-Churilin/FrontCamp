app.controller('toDoController', ['todoFactory', function (todoFactory) {
    var vm = this;
    vm.tasks = [];

    todoFactory.getTasks(function (todos) {
        vm.tasks = todos;
        vm.tasksByStatus = todoFactory.filterTasksByStatus(vm.tasks);
    });

    vm.onDateChange = function () {
        vm.tasks = todoFactory.getTasksFilteredByDate(vm.date);
        vm.tasksByStatus = todoFactory.filterTasksByStatus(vm.tasks);
    };

    vm.removeTask = function (task) {
        vm.tasks = todoFactory.removeTask(task);
        vm.tasksByStatus = todoFactory.filterTasksByStatus(vm.tasks);
    };
}]);