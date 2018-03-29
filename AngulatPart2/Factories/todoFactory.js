function todoFactory(requestFactory) {
    var taskList = [];
    var tasksRetrieved = false;
    return {
        getTasks: function getTasks(callback) {
            return requestFactory.getTasks(function (tasks) {
                taskList = tasks;

                if (callback) {
                    callback(taskList);
                }
            });
        },
        getTaskById: function getTaskById(id, callback) {
            var aTasks = taskList.filter(function (task) {
                return task.id === id;
            });

            if (aTasks.length > 0) {
                callback(aTasks[0]);
            } else {
                this.getTasks(function (tasks) {
                    callback(tasks[0] || {});
                })
            }
        },
        addTask: function addTask(todo) {
            var task = {
                id: Math.round(Math.random() * 10000000000),
                name: todo.name,
                date: new Date().getTime(),
                content: todo.content,
                status: "new",
                mode: "none",
                visible: true
            };
            requestFactory.addTask(task);

            taskList.push(task);
        },
        removeTask: function removeTask(todo) {
            var indexToDel;
            requestFactory.removeTask(todo);
            taskList.forEach(function (task, index) {
                if (todo.id === task.id) {
                    indexToDel = index;
                }
            });
            if (typeof indexToDel !== "undefined") {
                taskList.splice(indexToDel, 1);
            }

            return taskList;
        },
        save: function (task) {
            task.mode = "none";
            requestFactory.updateTask(task);
            taskList.forEach(function (todo) {
                if (todo.id === task.id) {
                    todo.name = task.name;
                    todo.content = task.content;
                }
            });
        }
    };
}

module.exports = todoFactory;