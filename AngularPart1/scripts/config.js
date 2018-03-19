app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl:"Components/Home/home.html",
            controller:"toDoController"
        })
        .when("/add",{
            templateUrl:"Components/AddTodo/addTodo.html",
            controller:"addTodoController"
        })
        .when("/:id/edit",{
            templateUrl:"Components/EditTodo/editTodo.html",
            controller:"toDoController"
        })
});