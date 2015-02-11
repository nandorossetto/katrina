describe('#1 Unit: OrderController', function(){
    var scope, httpBackend, OrderController;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        OrderController = $controller;
        
        OrderController('OrderController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54db96197d285991062c6420').respond([
            {"client_1": {"order":[]}},
            {"client_2": {"order":[]}}
        ]);
        
    }));

    it('should have OrderController controller', function() {
        expect(OrderController).toBeDefined();
    });

    it('should load JSON with 2 OBJs', function(){
        httpBackend.flush();
        expect(scope.clients.length).toBe(2);
    });
});

describe('#2 Unit: UserInfoController', function(){
    var scope, httpBackend, UserInfoController;

    beforeEach(module('ListingModule'));

    // Initialize the controller and a mock scope
    beforeEach(angular.mock.inject(function($httpBackend, $rootScope, $controller) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        UserInfoController = $controller;

        UserInfoController('UserInfoController', { $scope: scope }); 
        httpBackend.expectGET('http://www.mocky.io/v2/54dbaa4b7d28594a082c6431').respond([
            {"obj_1": ''},
            {"obj_2": ''}
        ]);
        
    }));

    it('should have UserInfoController controller', function() {
        expect(UserInfoController).toBeDefined();
    });

    it('should load JSON with 2 OBJs', function(){
        httpBackend.flush();
        expect(scope.profiles.length).toBe(2);
    });
});
