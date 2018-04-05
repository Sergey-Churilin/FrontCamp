describe('editController tests', function () {
    var $controller, todoFactory, controller;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$controller_, _todoFactory_) {
            $controller = _$controller_;
            todoFactory = _todoFactory_;
        });
        controller = $controller('editController');
    });

    it('todoFactory.save has to be called', function () {
        spyOn(todoFactory, 'save').and.callFake(function (task, callback) {
            callback();
        });

        controller.task = {
            id: Math.round(Math.random() * 10000000000),
            name: "task",
            date: new Date().getTime(),
            content: "todo.content",
            status: "new",
            mode: "none",
            visible: true
        };
        controller.save();
        expect(todoFactory.save).toHaveBeenCalled();
    });
});
