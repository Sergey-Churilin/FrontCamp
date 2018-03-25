function requestFactory($resource) {
    var taskList = [];
    return {
       /* getResource:function(todo){
            return $resource('', todo,
                {
                    'query' : { method:'GET', url:'http://localhost:3000/todos'},
                    'update': { method:'PUT', url:'http://localhost:3000/todos/:id',params:{id:todo.date}},
                    'add': { method:'POST', url:'http://localhost:3000/todos',params:todo },
                    'delete': { method:'DELETE', url:'http://localhost:3000/todos/:id',params:{id:todo._id} }
                });
        },*/
        getTasks: function getTasks(callback) {
           /* this.getResource().query().
            $promise.then(function(tasks) {
                callback(tasks)
            });*/
            var resource = $resource('http://localhost:3000/todos');
            resource.query()
                .$promise.then(function(tasks) {
                    callback(tasks)
            });
        },
        addTask: function addTask(todo) {
            //this.getResource().add(todo);
            var Todo = $resource('http://localhost:3000/todos', {}, {
                create: { method: 'POST', url: 'http://localhost:3000/todos', params: todo }
            });
            Todo.create(todo);
        },
        updateTask: function (todo) {
           // this.getResource().update(todo);
            var Todo = $resource('http://localhost:3000/todos/'+todo.id, {}, {
                update: { method: 'PUT', url: 'http://localhost:3000/todos/'+todo.id, params: todo }
            });
            Todo.update(todo);
        },
        removeTask: function removeTask(todo) {
            //this.getResource().delete(todo);
            var Todo = $resource('http://localhost:3000/todos/'+todo.id, {}, {
                delete: { method: 'DELETE', url: 'http://localhost:3000/todos/'+todo.id}
            });
            Todo.delete(todo);
        }
    };
}

module.exports = requestFactory;