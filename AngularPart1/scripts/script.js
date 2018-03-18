var app = angular.module('toDoApp', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl:"Components/Home/home.html",
            controller:"toDoController"
        })
        .when("/details/:id",{
            templateUrl:"template/details.html",
            controller:"ListController"
        })
        .otherwise({redirectTo: "/home"});
});
var factory = app.factory("todoFactory", function () {
    var taskList = [{
        name: "Task1",
        date: 1521388758655,
        status: "done",
        mode: "none",
        visible: true
    }];
    return {
        getTasks: function getTasks() {
            return taskList;
        },
        addTask: function addTask(todo) {
            var bValidated = this.validate(todo.name);

            if (bValidated) {
                var task = {
                    name: todo.name,
                    date: new Date().getTime(),
                    status: "new",
                    mode: "none",
                    visible: true
                };

                taskList.push(task);
                return true;
            }

            return false;
        },
        removeTask: function removeTask(todo) {
            var indexToDel;
            taskList.forEach(function (task,index) {
                if(todo.date === task.date){
                    indexToDel = index;
                }
            });
            taskList.splice(indexToDel,1)
        },
        filterByDates: function () {
            return taskList.reverse();
        },
        validate: function (name) {
            return name && name.length > 20;
        },
        changeMode: function (task) {
            task.mode = "edit";
        },
        save: function (task, newName) {
            var bValidate = this.validate(newName);
            if (bValidate) {
                var aTasks = taskList.filter(function (taskInner) {
                    return taskInner.name === task.name;
                });
                if (aTasks && aTasks.length > 0) {
                    aTasks[0].name = newName;
                }
                task.mode = "none";
                return true;
            }

            return false;
        },
        filterByLetters:function(letters){
            var value = letters.toLowerCase();
            taskList.forEach(function (task) {
                task.visible = value ? task.name.toLowerCase().indexOf(value) === 0 : true;
            });
        }
    };
});


app.controller('toDoController', ['$scope', 'todoFactory', function ($scope, todoFactory) {
    $scope.tasks = todoFactory.getTasks();
    $scope.newTask = {name: ''};
    $scope.currentTask = {name: ''};
    $scope.filterObj = {letters: ''};

    $scope.addTask = function () {
        var bCreated = todoFactory.addTask($scope.newTask);
        if (bCreated) {
            $scope.newTask = {name: ''};
        }
    };

    $scope.removeTask = function (task) {
        todoFactory.removeTask(task);
    };

    $scope.filterByDates = function () {
        todoFactory.filterByDates();
    };

    $scope.changeMode = function (task) {
        todoFactory.changeMode(task);
    };

    $scope.save = function (task) {
        var bUpdated = todoFactory.save(task, $scope.currentTask.name);
        if(bUpdated){
            $scope.currentTask = {name: ''};
        }
    };

    $scope.filterByLetters = function(){
        todoFactory.filterByLetters($scope.filterObj.letters);
    }
}]);

