function todoFactory(requestFactory) {
    return {
        getTasks: function getTasks() {
            return requestFactory.getTasks();
        },
        getTaskById: function getTaskById(id) {
            return requestFactory.getTaskById(id);
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
        },
        removeTask: function removeTask(todo) {
            requestFactory.removeTask(todo);
        },
        save: function (task) {
            requestFactory.updateTask(task);
        }
    };
}

module.exports = todoFactory;