function addTodoController(todoFactory) {
    var vm = this;
    vm.header = "Add a Task";
    vm.save = function () {
        todoFactory.addTask(vm.task);
        vm.task = {
            text:"",
            content:""
        };
    };
}

module.exports = addTodoController;
