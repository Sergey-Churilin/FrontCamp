describe('Pagination factory tests', function () {
    var paginationFactory;
    beforeEach(function () {
        angular.mock.module('app');
        inject(function (_PaginationFactory_) {
            paginationFactory = _PaginationFactory_;
        });
    });

    it('paginationFactory should exist', function () {
        expect(paginationFactory).toBeDefined();
    });
    it('paginationFactory getPager totalItems should be 26', function () {
        var oResults = paginationFactory.getPager(26, 1, 10);
        expect(oResults.totalItems).toEqual(26);
    });

    it('paginationFactory getPager current should be 2', function () {
        var oResults = paginationFactory.getPager(26, 2, 10);
        expect(oResults.currentPage).toEqual(2);
    });

    it('paginationFactory getPager pageSize should be 10', function () {
        var oResults = paginationFactory.getPager(26, 2);
        expect(oResults.pageSize).toEqual(10);
    });

    it('paginationFactory getPager pageSize should be 5', function () {
        var oResults = paginationFactory.getPager(26, 2, 5);
        expect(oResults.pageSize).toEqual(5);
    });

    it('paginationFactory getPager totalPages should be 6', function () {
        var oResults = paginationFactory.getPager(26, 2, 5);
        expect(oResults.totalPages).toEqual(6);
    });

    it('paginationFactory getPager totalPages should be 3', function () {
        var oResults = paginationFactory.getPager(26, 2);
        expect(oResults.totalPages).toEqual(3);
    });

    it('paginationFactory getPager startIndex should be 90', function () {
        var oResults = paginationFactory.getPager(126, 10);
        expect(oResults.startIndex).toEqual(90);
    });

    it('paginationFactory getPager endIndex should be 99', function () {
        var oResults = paginationFactory.getPager(126, 10);
        expect(oResults.endIndex).toEqual(99);
    });

    it('paginationFactory getPager startPage should be 1 and endPage should be 10', function () {
        var oResults = paginationFactory.getPager(126, 3);
        expect(oResults.startPage).toEqual(1);
        expect(oResults.endPage).toEqual(10);
    });

    it('paginationFactory getPager startPage should be 1 and endPage should be 10', function () {
        var oResults = paginationFactory.getPager(30, 7, 2);
        expect(oResults.startPage).toEqual(2);
        expect(oResults.endPage).toEqual(11);
    });
});