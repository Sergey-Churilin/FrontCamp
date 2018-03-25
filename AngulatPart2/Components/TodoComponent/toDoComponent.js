function toDoController(todoFactory) {
    var vm = this;

    vm.removeTask = function (task) {
        todoFactory.removeTask(task);
        vm.viewDeleted(task);
    };
}

module.exports = {
    name: 'todo',
    template: require('./todo.html'),
    controller: toDoController,
    controllerAs: 'todoCtrl',
    bindings: {
        viewDeleted: '&',
        task: '<'
    }
};
