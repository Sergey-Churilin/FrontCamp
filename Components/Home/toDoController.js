app.controller('toDoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.currentTask = {name: ''};
    $scope.filterObj = {letters: ''};
    $scope.tasks = [];

    todoFactory.getTasks(function(todos){
        $scope.tasks = todos;
        $scope.tasksByStatus =todoFactory.filterTasksByStatus();
        console.log($scope.tasksByStatus)
    });

    $scope.removeTask = function (task) {
        $scope.tasks = todoFactory.removeTask(task);
        $scope.tasksByStatus = todoFactory.filterTasksByStatus();
        console.log($scope.tasksByStatus)
    };
}]);