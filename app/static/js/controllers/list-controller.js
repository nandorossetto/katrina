var ListController = angular.module('ListingModule', []);

ListController.controller('OrderController', ['$scope', '$http',
    function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/54db96197d285991062c6420'
        }).success(function(data){
            $scope.clients = data;

        }).error(function(){
            console.log('Não carregou o JSON');
        });

    }]
);

ListController.controller('DeliveryAddressController', ['$scope', '$http',
    function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/54db92cf7d28594b062c641e'
        }).success(function(data){
            $scope.users = data;

        }).error(function(){
            console.log('Não carregou o JSON');
        });

    }]
);

