describe('HomeController tests', function () {
    var $controller, todoFactory, controller;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$controller_, _todoFactory_) {
            $controller = _$controller_;
            todoFactory = _todoFactory_;
        });
        controller = $controller('HomeController');
    });

    it('todoFactory.getTasks has to be called', function () {
        spyOn(todoFactory, 'getTasks');
        controller.viewDeleted();
        expect(todoFactory.getTasks).toHaveBeenCalled();
    });

    it('should retrieve the correct items', function () {
        controller.tasks = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11}];
        controller.updateView(2, 9);
        expect(controller.items[0].id).toEqual(3);
    });
});
