/**
 * Created by Administrator on 2016/4/18.
 */
/**
 * Created by Administrator on 2016/4/18.
 */

angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "tabs/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "tabs/home-page.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "tabs/latest-supply.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/tab/home");

    })

    .controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
    });