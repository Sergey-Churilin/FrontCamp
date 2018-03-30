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

        updateTask: function (todo, callback) {
            Todos.update({id: todo.id}, todo)
                .$promise.then(function(){
                if(callback){
                    callback();
                }
            })
        },

        removeTask: function (todo, callback) {
            Todos.delete({id: todo.id})
                .$promise.then(function(){
                    if(callback){
                        callback();
                    }
            });
        },
        getTaskById: function(id){
            return Todos.getTaskById({id: id});
        }
    }
}

module.exports = requestFactory;