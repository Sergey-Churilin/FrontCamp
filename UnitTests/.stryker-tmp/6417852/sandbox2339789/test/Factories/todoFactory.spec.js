/*
var angular = require('angular');
require('angular-mocks');
require('../../src/app');
*/

describe('Todo factory tests', function () {
    var todoFactory, requestFactory, todos;
    beforeEach(function () {
        angular.mock.module('app');
        inject(function (_todoFactory_, _requestFactory_) {
            todoFactory = _todoFactory_;
            requestFactory = _requestFactory_;
        });

        todos = [
            {
                id: Math.round(Math.random() * 10000000000),
                name: "task",
                date: new Date().getTime(),
                content: "todo.content",
                status: "new",
                mode: "none",
                visible: true
            },
            {
                id: Math.round(Math.random() * 10000000000),
                name: "task",
                date: new Date().getTime(),
                content: "todo.content",
                status: "new",
                mode: "none",
                visible: true
            }
        ];
    });

    it('todoFactory and requestFactory should exist', function () {
        expect(todoFactory).toBeDefined();
        expect(requestFactory).toBeDefined();
    });

    it('request factory getTasks has to be called', function () {
        spyOn(requestFactory, 'getTasks');
        todoFactory.getTasks();
        expect(requestFactory.getTasks).toHaveBeenCalled();
    });

    it('todoFactory should return list of tasks', function () {
        spyOn(requestFactory, "getTasks").and.callFake(function () {
            return todos;
        });
        var tasks = todoFactory.getTasks();

        expect(tasks).toEqual(todos);
    });

    it('request factory getTaskById has to be called', function () {
        spyOn(requestFactory, "getTaskById");
        todoFactory.getTaskById(1);

        expect(requestFactory.getTaskById).toHaveBeenCalledWith(1);
    });

    it('todoFactory getTaskById should return correct todo', function () {
        spyOn(requestFactory, "getTaskById").and.callFake(function (id) {
            return todos.find(function (todo) {
                return todo.id = id;
            });
        });
        var sTaskId = todos[0].id;
        var todo = todoFactory.getTaskById(sTaskId);

        expect(todo).toEqual(todos[0]);
    });

    it('request factory addTask has to be called', function () {
        var task = {
            name: "task",
            content: "todo.content"
        };

        spyOn(requestFactory, "addTask").and.callFake(function (todo) {
            return task.name === todo.name && task.content === todo.content;
        });
        todoFactory.addTask(task);
        expect(requestFactory.addTask).toBeTruthy();
    });

    it('todoFactory removeTask callback has to be called', function () {
        var todo = todos[0];
        spyOn(requestFactory, "removeTask");
        todoFactory.removeTask();
        expect(requestFactory.removeTask).toHaveBeenCalled();
    });

    it('save', function () {
        spyOn(requestFactory, "updateTask");
        todoFactory.save(todos[0]);
        expect(requestFactory.updateTask).toHaveBeenCalled();
    });
});