app.controller('toDoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.currentTask = {name: ''};
    $scope.filterObj = {letters: ''};
    $scope.tasks = [];

    todoFactory.getTasks(function(todos){
        $scope.tasks = todos;
    });

    $scope.removeTask = function (task) {
        $scope.tasks = todoFactory.removeTask(task);
    };

    $scope.filterByDates = function () {
        todoFactory.filterByDates();
    };

    $scope.filterByLetters = function(){
        todoFactory.filterByLetters($scope.filterObj.letters);
    };

    $scope.isTaskVisible = function(task, status){
        return task.status === status && task.visible;
    }
}]);