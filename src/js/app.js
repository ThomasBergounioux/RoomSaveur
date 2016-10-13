'use strict';

var roomApp = angular.module('roomApp', ['ui.router']);

roomApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
    .state('menu', {
        url: '/menu',
        templateUrl: 'menu.html',
        controller: 'menuCtrl'
    })
    .state('user', {
        url: '/user',
        templateUrl: 'user.html',
        controller: 'userCtrl'
    })
    .state('timeline', {
        url: '/timeline',
        templateUrl: 'timeline.html',
        controller: 'menuCtrl'
    })
    .state('profil', {
        url: '/profil',
        templateUrl: 'profil.html'
        // controller: 'menuCtrl'
    })

    .state('error', {
        url: '/404',
        templateUrl: 'error.html'
    });
});