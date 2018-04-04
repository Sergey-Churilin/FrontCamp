describe('AddArticleComponent tests', function () {
    var $componentController, $location,$rootScope, component;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$componentController_, _$location_, _$rootScope_) {
            $componentController = _$componentController_;
            $location = _$location_;
            $rootScope = _$rootScope_;
        });
        component = $componentController('btnAddArticle', {$scope: $rootScope.$new()});
    });

    it('$location.path has to be called', function () {
        spyOn($location, 'path');
        component.addArticle();
        expect($location.path).toHaveBeenCalled();
    });
});
