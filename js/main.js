/**
 * Created by Administrator on 2016/4/18.
 */

var myApp = angular.module('myApp', ['ui.router']);
// For Component users, it should look like this:
// var myApp = angular.module('myApp', [require('angular-ui-router')]);
myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/homePage");
    //
    // Now set up the states
    $stateProvider
        .state('homePage', {
            url: "/homePage",
            templateUrl: "tabs/home-page.html",
            controller: "homeCtrl"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "partials/state1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('latestSupply', {
            url: "/latestSupply",
            templateUrl: "tabs/latest-supply.html"
        })
        .state('newestBuy', {
            url: "/newestBuy",
            templateUrl: "tabs/newest-buy.html"
        })
        .state('shopCar', {
            url: "/shopCar",
            templateUrl: "tabs/shop-car.html"
        })
        .state('mine', {
            url: "/mine",
            templateUrl: "tabs/mine.html"
    });
});

(function() {

}());