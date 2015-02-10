describe('#1 Unit: ListController', function(){
    var scope, httpBackend;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        
        $controller('ListController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54da65f4267da33b0bb0f396').respond([
            {"client_1": ''},
            {"client_2": ''}
        ]);
        
    }));

    it('should load JSON with items', function(){
        httpBackend.flush();
        expect(scope.clients.length).toBe(2);
    });
});
