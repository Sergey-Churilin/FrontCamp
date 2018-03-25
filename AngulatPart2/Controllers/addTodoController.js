function addTodoController(todoFactory) {
    var vm = this;
    vm.header = "Add a Task";
    vm.save = function () {
        var bCreated = todoFactory.addTask({
            name:vm.text,
            content:vm.content
        });
        if (bCreated) {
            vm.text = '';
            vm.content = '';
        }
    };
}
module.exports = addTodoController;
