app.config(function($routeProvider){
    $routeProvider
        .when("/home", {
            templateUrl:"Components/Home/home.html",
            controller:"toDoController"
        })
        .when("/add",{
            //template: '<addTodo></addTodo>'
            templateUrl:"Components/AddTodo/addEditTodo.html",
            controller:"addTodoController"
        })
        .when("/:id/edit",{
            templateUrl:"Components/EditTodo/editTodo.html",
            controller:"toDoController"
        })
});