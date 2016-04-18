/**
 * Created by Administrator on 2016/4/18.
 */

var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/homePage', {
        templateUrl: 'tabs/home-page.html',
        controller: 'homeCtrl'
    });
    $routeProvider.when('/latestSupply', {
        templateUrl: 'tabs/latest-supply.html',
        controller: 'supplyCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/homePage'});
}]);