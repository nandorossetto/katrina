describe('#1 Unit: OrderController', function(){
    var scope, httpBackend;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        
        $controller('OrderController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54db96197d285991062c6420').respond([
            {"client_1": ''},
            {"client_2": ''}
        ]);
        
    }));

    it('should load JSON with items', function(){
        httpBackend.flush();
        expect(scope.clients.length).toBe(2);
    });
});

describe('#2 Unit: DeliveryAddressController', function(){
    var scope, httpBackend;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        
        $controller('DeliveryAddressController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54db92cf7d28594b062c641e').respond([
            {"delivery_address_1": ''},
            {"delivery_address_2": ''}
        ]);
        
    }));

    it('should load JSON with items', function(){
        httpBackend.flush();
        expect(scope.users.length).toBe(2);
    });
});
