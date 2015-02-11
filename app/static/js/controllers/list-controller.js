var ListController = angular.module('ListingModule', []);

ListController.controller('ListController', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/54db565a7d2859d4002c63ea'
        }).success(function(data){
            $scope.clients = data;

        }).error(function(){
            console.log('Não carregou o JSON');
        });
    }]
);


