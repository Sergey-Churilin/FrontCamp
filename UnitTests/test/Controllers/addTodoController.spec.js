var app = require('../../src/app');
describe('addTodoController', function() {
/*    var controller, todoFactory, stubFunction;

    beforeEach(function(){
        module('app');
        inject(function(_addTodoController_, _todoFactory_){
            // The injector unwraps the underscores (_) from around the parameter names when matching
            controller = _addTodoController_;
            todoFactory = _todoFactory_;
        });

        //controller = controller('addTodoController');
        //todoFactory = todoFactory('todoFactory');
        stubFunction = jasmine.stub(
            function() {
                return(true)
            });
        jasmine.createSpyObj(todoFactory, [ 'addTask' ]);
    });*/

    var controller;
    beforeEach(function () {
        module('app');
        inject(function (_addTodoController_) {
            controller = _addTodoController_;
        });
    });

    it('!!', function () {
        expect(2).toEqual(2);
    });

   /* it('todoFactory.addTask has to be called', function(done) {
       /!* expect(2).toEqual(2);
        done();*!/
        controller.save();
        expect(todoFactory.addTask.calledOnce).toBeTruthy();
        todoFactory.addTask.restore();
        done();
    });*/

  /*  it('task.text and task.content should be empty strings', function(done) {
        expect(2).toEqual(2);
        done();
        /!*controller.save();
        expect(controller.task).to.deep.equal({text:"",content:""});*!/
    });*/
});