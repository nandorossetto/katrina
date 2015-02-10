describe('#1 Unit: ListController', function(){
    var scope, httpBackend, controller;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        httpBackend.expectGET('http://www.mocky.io/v2/54da65f4267da33b0bb0f396').respond(200);

        scope = $rootScope.$new();
        controller = $controller('ListController', { $scope: scope }); 
        
    }));

    it('should load JSON with items', function(){
        expect(scope.clients);
        httpBackend.flush();
    });
});
