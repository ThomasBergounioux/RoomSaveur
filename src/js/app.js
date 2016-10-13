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
<<<<<<< HEAD
=======
    .state('profil', {
        url: '/profil',
        templateUrl: 'profil.html'
    })
        
>>>>>>> fa8e435d23678f2d82d86201d3179254032bc30a
    .state('login', {
        url: '/login',
        templateUrl: 'login.html'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'register.html'
    })
    .state('order', {
        url: '/order',
        templateUrl: 'order.html'
    })
    .state('home', {
        url: '/home',
        templateUrl: 'home.html'
    })
    .state('error', {
        url: '/404',
        templateUrl: 'error.html'
    });
});