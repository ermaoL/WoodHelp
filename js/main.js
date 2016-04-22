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
            templateUrl: "views/tabs/home-page.html",
            controller: "homeCtrl"
        })
        .state('latestSupply', {
            url: "/latestSupply",
            templateUrl: "views/tabs/latest-supply.html",
            controller: "supplyCtrl"
        })
        .state('latestSupply.list', {
            url: "/list",
            templateUrl: "views/tabs/supply-list.html"
        })
        .state('newestBuy', {
            url: "/newestBuy",
            templateUrl: "views/tabs/newest-buy.html",
            controller: "buyCtrl"
        })
        .state('shopCar', {
            url: "/shopCar",
            templateUrl: "views/tabs/shop-car.html"
        })
        .state('mine', {
            url: "/mine",
            templateUrl: "views/tabs/mine.html"
    });
});

myApp.controller('nearbyCtrl', function($scope) {
    var height = $(window).height() - 45;
    $(".nearby-list").css("height", height);
    var list = {"supply": [{"pic":"../images/shuijiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/muwu.jpg", "title":"全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/cbd.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"},
        {"pic":"../images/yuantiao.jpg", "title":"全新进口瑞典云杉木材", "price":"5640", "seller":"福建龙岩某某某钢材厂", "time":"2016.04.22"}]};
    $scope.nearbySupplyList = list.supply;
});
