function editController($location, $routeParams, todoFactory) {
    var vm = this;
    vm.header = "Edit a Task";

    vm.task = todoFactory.getTaskById(Number($routeParams.id));

    vm.save = function () {
        todoFactory.save(vm.task, function(){
            $location.path('/home');
        });
    };

}

module.exports = editController;
