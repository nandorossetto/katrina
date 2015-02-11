var katrina = angular.module('katrina', [
    'ngRoute',
    'ListingModule'
]);

//routes
katrina.config(['$routeProvider', function($routeProvider) {
    $routeProvider

    .when('/', {
        templateUrl : 'views/list-order.html',
        controller  : 'OrderController'
    })
    .when('/endereco-de-entrega', {
        templateUrl : 'views/list-address.html',
        controller  : 'UserInfoController'
    })
    .when('/perfil-do-usuario', {
        templateUrl : 'views/list-profile.html',
        controller  : 'UserInfoController'
    })
    .otherwise({
        redirectTo: '/404',
        templateUrl : 'views/404.html'
    });
}]);
