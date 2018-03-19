app.controller('toDoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.tasks = todoFactory.getTasks();
    $scope.currentTask = {name: ''};
    $scope.filterObj = {letters: ''};

    $scope.removeTask = function (task) {
        todoFactory.removeTask(task);
    };

    $scope.filterByDates = function () {
        todoFactory.filterByDates();
    };

    $scope.filterByLetters = function(){
        todoFactory.filterByLetters($scope.filterObj.letters);
    }
}]);