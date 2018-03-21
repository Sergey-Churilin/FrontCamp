app.factory("todoFactory",['localRequestFactory', function (localRequestFactory) {
    var taskList = [];
    return {
        getTasks: function getTasks(callback) {
            localRequestFactory.getTasks(function(tasks){
                tasks.sort(function(task1, task2){
                   return task1.date - task2.date;
                });
                taskList = tasks;
                callback(taskList);
            });
        },
        getTaskById: function getTaskById(id){
            var aTasks = taskList.filter(function(task){return task.date === id;});
            return aTasks[0];
        },
        addTask: function addTask(todo) {
            var bValidated = this.validate(todo.name);

            if (bValidated) {
                var task = {
                    name: todo.name,
                    date: new Date().getTime(),
                    status: "new",
                    mode: "none",
                    visible: true
                };
                localRequestFactory.addTask(task);

                taskList.push(task);
                return true;
            }

            return false;
        },
        removeTask: function removeTask(todo) {
            var indexToDel;
            localRequestFactory.removeTask(todo);
            taskList.forEach(function (task,index) {
                if(todo.date === task.date){
                    indexToDel = index;
                }
            });
            if(typeof indexToDel !=="undefined"){
                taskList.splice(indexToDel,1);
            }

            return taskList;
        },
        filterByDates: function () {
            return taskList.reverse();
        },
        validate: function (name) {
            return name && name.length > 20;
        },
        editTodo: function (task) {
            task.mode = "edit";
        },
        save: function (task, newName) {
            var bValidate = this.validate(newName);
            if (bValidate) {
                task.name = newName;
                task.mode = "none";
                localRequestFactory.updateTask(task);
                return true;
            }

            return false;
        },
        filterByLetters:function(letters){
            var value = letters.toLowerCase();
            taskList.forEach(function (task) {
                task.visible = value ? task.name.toLowerCase().indexOf(value) === 0 : true;
            });
        }
    };
}]);