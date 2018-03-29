function addTodoController(todoFactory) {
    var vm = this;
    vm.header = "Add a Task";
    vm.save = function () {
        todoFactory.addTask({
            name: vm.text,
            content: vm.content
        });

        vm.text = '';
        vm.content = '';
    };
}

module.exports = addTodoController;
