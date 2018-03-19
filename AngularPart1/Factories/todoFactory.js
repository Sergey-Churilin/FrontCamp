app.factory("todoFactory",[], function () {
    var taskList = [{
        name: "Buy a new powerful computer",
        date: 1521388758655,
        status: "done",
        mode: "none",
        visible: true
    }];
    return {
        getTasks: function getTasks() {
            return taskList;
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

                taskList.push(task);
                return true;
            }

            return false;
        },
        removeTask: function removeTask(todo) {
            var indexToDel;
            taskList.forEach(function (task,index) {
                if(todo.date === task.date){
                    indexToDel = index;
                }
            });
            taskList.splice(indexToDel,1)
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
                var aTasks = taskList.filter(function (taskInner) {
                    return taskInner.name === task.name;
                });
                if (aTasks && aTasks.length > 0) {
                    aTasks[0].name = newName;
                }
                task.mode = "none";
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
});