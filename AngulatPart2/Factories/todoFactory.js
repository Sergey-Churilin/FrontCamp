function todoFactory(requestFactory) {
    var taskList = [];
    var tasksRetrieved = false;
    return {
        getTasks: function getTasks(callback) {
            if(tasksRetrieved){
                callback(taskList);
            } else {
                requestFactory.getTasks(function(tasks){
                    tasks.sort(function(task1, task2){
                        return task1.date - task2.date;
                    });
                    taskList = tasks;
                    tasksRetrieved = true;
                    callback(taskList);
                });
            }
        },
        getTaskById: function getTaskById(id){
            var aTasks = taskList.filter(function(task){return task.id === id;});
            return aTasks[0];
        },
        addTask: function addTask(todo) {
            var bValidated = this.validate(todo.name);

            if (bValidated) {
                var task = {
                    id:Math.round(Math.random() * 10000000000),
                    name: todo.name,
                    date: new Date().getTime(),
                    content:todo.content,
                    status: "new",
                    mode: "none",
                    visible: true
                };
                requestFactory.addTask(task);

                taskList.push(task);
                return true;
            }

            return false;
        },
        removeTask: function removeTask(todo) {
            var indexToDel;
            requestFactory.removeTask(todo);
            taskList.forEach(function (task,index) {
                if(todo.id === task.id){
                    indexToDel = index;
                }
            });
            if(typeof indexToDel !=="undefined"){
                taskList.splice(indexToDel,1);
            }

            return taskList;
        },
        validate: function (name) {
            return name && name.length >= 20;
        },
        update: function (task) {
            var bValidate = this.validate(task.name);
            if (bValidate) {
                task.mode = "none";
                requestFactory.updateTask(task);
                taskList.forEach(function(todo){
                    if(todo.id === task.id){
                        todo.name = task.name;
                        todo.content = task.content;
                    }
                });
                return true;
            }

            return false;
        }
    };
}

module.exports = todoFactory;