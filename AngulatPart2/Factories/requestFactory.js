function requestFactory($resource) {
    var baseUrl = "http://localhost:3000/todos";
    var Todos = $resource(baseUrl + "/:id", {id: '@id'}, {
        update: {method: 'PUT'},
        getTaskById:{method: 'GET'}
    });

    return {
        addTask: function (todo) {
            Todos.save(todo);
        },

        getTasks: function () {
            return Todos.query();
        },

        updateTask: function (todo) {
            Todos.update({id: todo.id}, todo)
        },

        removeTask: function (todo) {
            Todos.delete({id: todo.id});
        },
        getTaskById: function(id){
            return Todos.getTaskById({id: id});
        }
    }
}

module.exports = requestFactory;