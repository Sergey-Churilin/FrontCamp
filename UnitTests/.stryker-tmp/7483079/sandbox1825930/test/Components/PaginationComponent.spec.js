describe('PaginationComponent tests', function () {
    var $componentController,$rootScope, component, PaginationFactory;
    beforeEach(function () {
        angular.mock.module("app");
        inject(function (_$componentController_, _$rootScope_, _PaginationFactory_) {
            $componentController = _$componentController_;
            $rootScope = _$rootScope_;
            PaginationFactory = _PaginationFactory_;
        });
        component = $componentController('pagination', {$scope: $rootScope.$new()},{updateView: angular.noop});

    });

    it('setPage has to be called', function () {
        spyOn(component, "setPage");
        component.$onChanges();
        expect(component.setPage).toHaveBeenCalled();
    });

      it('PaginationFactory getPager has to be called', function () {
          spyOn(PaginationFactory, "getPager").and.callFake(function () {
              return true
          });
          component.setPage();
          expect(PaginationFactory.getPager).toHaveBeenCalled();
      });

    it('updateView has not been called', function () {
        spyOn(PaginationFactory, "getPager").and.callFake(function () {
            return {totalPages:10};
        });
        component.setPage(11);
        expect(PaginationFactory.getPager).toHaveBeenCalled();
    });
});
