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

ListController.controller('UserInfoController', ['$scope', '$http',
    function ($scope, $http) {

        $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/54dbaa4b7d28594a082c6431'
        }).success(function(data){
            $scope.deliveryInformations = data;
            $scope.profiles = data;

        }).error(function(){
            console.log('Não carregou o JSON');
        });

    }]
);

