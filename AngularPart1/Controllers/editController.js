app.controller('editController', [ '$location','$routeParams', 'todoFactory', function ($location,  $routeParams, todoFactory) {
    var vm = this;

    vm.header = "Edit a Task";
    vm.task = {};
    vm.text = "";

    todoFactory.getTaskById(Number($routeParams.id), function(task){
        if(task){
            vm.task = task;
            vm.text = task.name;
        }
    });

    vm.save = function () {
        vm.task.name = vm.text;
        todoFactory.save(vm.task);
        $location.path('/home');
    };
}]);