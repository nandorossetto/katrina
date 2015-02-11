var ListController = angular.module('ListingModule', []);

ListController.controller('ListController', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://www.mocky.io/v2/54da65f4267da33b0bb0f396'
        }).success(function(data){
            var clientItems = [];

            for(var i in data){
                clientItems = data[i].order;
            }

            $scope.clients = data;
            $scope.items = clientItems;


        }).error(function(){
            console.log('Não carregou o JSON');
        });
    }]
);


