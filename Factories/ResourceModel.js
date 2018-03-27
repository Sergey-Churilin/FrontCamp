app.factory("ResourceModel", ['$resource', function ($resource) {
    var baseUrl = "http://localhost:3000/todos/";
    return {
        addTask: function (todo) {
            $resource(baseUrl, {}, {
                create: {method: 'POST', url: baseUrl, params: todo}
            }).create(todo)
        },

        getTasks: function (callback) {
            $resource(baseUrl).query()
                .$promise.then(function (tasks) {
                callback(tasks)
            })
        },

        updateTask: function (todo) {
            $resource(baseUrl + todo.date, {}, {
                update: {method: 'PUT', url: baseUrl + todo.date, params: todo}
            }).update(todo);
        },

        removeTask: function (todo) {
            return $resource(baseUrl + todo._id, {}, {
                delete: {method: 'DELETE', url: baseUrl + todo._id}
            }).delete(todo);
        }
    }
}]);