describe('AddArticleComponent tests', function () {
    var $componentController, $location,$rootScope, component;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$componentController_, _$location_) {
            $componentController = _$componentController_;
            $location = _$location_;
        });
        component = $componentController('btnAddArticle');
    });

    it('$location.path has to be called', function () {
        spyOn($location, 'path');
        component.addArticle();
        expect($location.path).toHaveBeenCalled();
    });
});
