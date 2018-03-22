app.controller('editController', ['$scope', '$routeParams', 'todoFactory', function ($scope, $routeParams, todoFactory) {
    $scope.task = todoFactory.getTaskById(Number($routeParams.id));
    $scope.currentTask = {name: ''};

    $scope.editTodo = function (task) {
        todoFactory.editTodo(task);
    };

    $scope.save = function (task) {
        var bUpdated = todoFactory.save(task, $scope.currentTask.name);
        if(bUpdated){
            $scope.currentTask = {name: ''};
        }
    };
}]);