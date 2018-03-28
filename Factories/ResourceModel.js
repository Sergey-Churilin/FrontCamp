app.factory("ResourceModel", ['$resource', function ($resource) {
    var baseUrl = "http://localhost:3000/todos";
    var Todos = $resource(baseUrl + "/:id", {id: '@id'}, {
        update: {method: 'PUT'}
    });

    return {
        addTask: function (todo) {
            Todos.save(todo)
        },

        getTasks: function (callback) {
            Todos.query()
                .$promise.then(function (tasks) {
                callback(tasks)
            })
        },

        updateTask: function (todo) {
            Todos.update({id: todo.date}, todo)
        },

        removeTask: function (todo) {
            Todos.remove({id: todo._id});
        }
    }
}]);