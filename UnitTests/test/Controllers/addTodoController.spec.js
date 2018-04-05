describe('addTodoController tests', function () {
    var $controller, todoFactory, controller;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$controller_, _todoFactory_) {
            $controller = _$controller_;
            todoFactory = _todoFactory_;
        });
        controller = $controller('addTodoController');
    });

    it('todoFactory.addTask has to be called', function () {
        spyOn(todoFactory, 'addTask');
        controller.save();
        expect(todoFactory.addTask).toHaveBeenCalled();
    });
});
