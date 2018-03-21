app.factory("localRequestFactory",['$resource', function ($resource) {
    var taskList = [];
    return {
        getTasks: function getTasks(callback) {
            var resource = $resource('http://localhost:3000/todos');
            resource.query()
                .$promise.then(function(tasks) {
                    callback(tasks)
            });
        },
        addTask: function addTask(todo) {
            var Todo = $resource('http://localhost:3000/todos', {}, {
                create: { method: 'POST', url: 'http://localhost:3000/todos', params: todo }
            });
            Todo.create(todo);
        },
        updateTask: function (todo) {
            var Todo = $resource('http://localhost:3000/todos/'+todo.date, {}, {
                update: { method: 'PUT', url: 'http://localhost:3000/todos/'+todo.date, params: todo }
            });
            Todo.update(todo);
        },
        removeTask: function removeTask(todo) {
            var Todo = $resource('http://localhost:3000/todos/'+todo._id, {}, {
                delete: { method: 'DELETE', url: 'http://localhost:3000/todos/'+todo._id}
            });
            Todo.delete(todo);
           /* var indexToDel;
            taskList.forEach(function (task,index) {
                if(todo.date === task.date){
                    indexToDel = index;
                }
            });
            taskList.splice(indexToDel,1)*/
        }

    };
}]);