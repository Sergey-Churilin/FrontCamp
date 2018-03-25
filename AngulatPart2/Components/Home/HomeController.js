function HomeController($timeout, todoFactory, PaginationFactory) {
    var vm = this;

    vm.tasks = [];
    vm.items = [];

    todoFactory.getTasks(function(todos){
        vm.tasks = todos;
    });

    vm.viewDeleted = function(){
        todoFactory.getTasks(function(todos){
            vm.tasks = todos;
        });
    };
    vm.updateView = function(startIndex, endIndex){
        vm.items = vm.tasks.slice(startIndex, endIndex);
    };
}


module.exports = HomeController;
