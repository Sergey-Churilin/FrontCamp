var angular = require('angular'),
    HomeController = require('./Components/Home/HomeController'),
    addTodoController = require('./Controllers/addTodoController'),
    editController = require('./Controllers/editController'),
    todoComponent = require('./Components/TodoComponent/toDoComponent'),
    paginationComponent = require('./Components/Pagination/PaginationComponent'),
    minLengthDirective = require('./Directives/minLength'),
    paginationFactory = require('./Factories/paginationFactory'),
    requestFactory = require('./Factories/requestFactory'),
    todoFactory = require('./Factories/todoFactory');

require('angular-resource');
require('angular-route');

angular
    .module('app', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/home", {
                template: require("./Components/Home/home.html"),
                controller: "HomeController",
                controllerAs:"homeCtrl"
            })
            .when("/add", {
                template: require("./Templates/addEditTodo.html"),
                controller: "addTodoController",
                controllerAs:"ctrl"
            })
            .when("/:id/edit", {
                template: require("./Templates/addEditTodo.html"),
                controller: "editController",
                controllerAs: "ctrl"
            })
    })
    .controller('HomeController', HomeController)
    .controller('addTodoController', addTodoController)
    .controller('editController', editController)
    .component(todoComponent.name, todoComponent)
    .component(paginationComponent.name, paginationComponent)
    .directive('minLength', minLengthDirective)
    .factory('PaginationFactory', paginationFactory)
    .factory('requestFactory', requestFactory)
    .factory('todoFactory', todoFactory);

angular.element(document).ready(function bootstrap() {
    angular.bootstrap(document, ['app']);
});