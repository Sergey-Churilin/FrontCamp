function editController( $location, $routeParams, todoFactory) {
    var vm = this;

    vm.header = "Edit a Task";
    vm.task = todoFactory.getTaskById(Number($routeParams.id));
    vm.text = vm.task.name;
    vm.content = vm.task.content;

    vm.save = function () {
        todoFactory.update({
            id:vm.task.id,
            name:vm.text,
            content:vm.content
        });
        $location.path('/home');
    };
}

module.exports = editController;
