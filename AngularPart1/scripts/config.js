app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl:"Components/Home/home.html",
            controller:"toDoController"
        })
        .when("/add",{
            templateUrl:"Templates/addEditTodo.html",
            controller:"addTodoController",
            controllerAs:"ctrl"
        })
        .when("/:id/edit",{
            templateUrl:"Templates/addEditTodo.html",
            controller:"editController",
            controllerAs:"ctrl"
        })
});