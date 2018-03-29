function requestFactory($resource) {
    var baseUrl = "http://localhost:3000/todos";
    var Todos = $resource(baseUrl + "/:id", {id: '@id'}, {
        update: {method: 'PUT'}
    });

    return {
        addTask: function (todo) {
            Todos.save(todo)
        },

        getTasks: function (callback) {
            return Todos.query()
                .$promise.then(function (tasks) {
                    callback(tasks)
                })
        },

        updateTask: function (todo) {
            Todos.update({id: todo.id}, todo)
        },

        removeTask: function (todo) {
            Todos.delete({id: todo.id});
        }
    }
}

module.exports = requestFactory;