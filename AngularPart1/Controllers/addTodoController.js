app.controller('addTodoController', ['todoFactory', function (todoFactory) {
    var vm = this;
    vm.header = "Add Todo";

    vm.save = function () {
        todoFactory.addTask({
            name: vm.text
        });

        vm.text = '';
    };
}]);
