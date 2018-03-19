app.controller('addTodoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.newTask = {name: ''};

    $scope.addTask = function () {
        var bCreated = todoFactory.addTask($scope.newTask);
        if (bCreated) {
            $scope.newTask = {name: ''};
        }
    };
}]);
