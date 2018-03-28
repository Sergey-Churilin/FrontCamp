app.factory("todoFactory", ['ResourceModel', function (ResourceModel) {
    var taskList = [];
    return {
        getTasks: function getTasks(callback) {
            ResourceModel.getTasks(function (tasks) {
                taskList = tasks;

                if (callback) {
                    callback(taskList);
                }
            });
        },
        getTaskById: function getTaskById(id, callback) {
            var aTasks = taskList.filter(function (task) {
                return task.date === id;
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
                name: todo.name,
                date: new Date().getTime(),
                status: "new",
                mode: "none",
                visible: true
            };
            ResourceModel.addTask(task);

            taskList.push(task);
        },
        removeTask: function removeTask(todo) {
            var indexToDel;

            ResourceModel.removeTask(todo);
            taskList.forEach(function (task, index) {
                if (todo.date === task.date) {
                    indexToDel = index;
                }
            });

            if (typeof indexToDel !== "undefined") {
                taskList.splice(indexToDel, 1);
            }

            return taskList;
        },
        filterTasksByStatus: function () {
            var todosObj = {
                newTodos: [],
                doneTodos: []
            };

            angular.forEach(taskList, function (task) {
                if (task.status === "new") {
                    todosObj.newTodos.push(task);
                } else {
                    todosObj.doneTodos.push(task);
                }
            });

            return todosObj;
        },
        save: function (task) {
            ResourceModel.updateTask(task);
        }
    };
}]);