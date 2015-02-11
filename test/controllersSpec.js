describe('#1 Unit: ListController', function(){
    var scope, httpBackend;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        
        $controller('OrderController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54db565a7d2859d4002c63ea').respond([
            {"client_1": ''},
            {"client_2": ''}
        ]);
        
    }));

    it('should load JSON with items', function(){
        httpBackend.flush();
        expect(scope.clients.length).toBe(2);
    });
});
