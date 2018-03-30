function toDoController(todoFactory) {
    var vm = this;

    vm.removeTask = function (task) {
        todoFactory.removeTask(task, function(){
            vm.viewDeleted();
        });

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
