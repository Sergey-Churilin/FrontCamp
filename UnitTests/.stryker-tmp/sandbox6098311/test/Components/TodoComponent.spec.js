describe('TodoComponent tests', function () {
    var $componentController, todoFactory,$rootScope, component, context;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$componentController_, _todoFactory_, _$rootScope_) {
            $componentController = _$componentController_;
            todoFactory = _todoFactory_;
            $rootScope = _$rootScope_;
        });
        context = {
           viewDeleted: jasmine.createSpy('viewDeleted').and.callFake(angular.noop)
            //viewDeleted: angular.noop
        };
        component = $componentController('todo', {$scope: $rootScope.$new()},context);
    });

    it('$location.path has to be called', function () {
        spyOn(todoFactory, 'removeTask');
        component.removeTask();
        expect(todoFactory.removeTask).toHaveBeenCalled();
    });

    it('viewDeleted has to be called', function () {
        var task = {
            id: Math.round(Math.random() * 10000000000),
            name: "task",
            date: new Date().getTime(),
            content: "todo.content",
            status: "new",
            mode: "none",
            visible: true
        };

        spyOn(todoFactory, 'removeTask').and.callFake(function (task, callback) {
            callback();
        });

        component.removeTask(task);
        expect(context.viewDeleted).toHaveBeenCalled();
    });
});
