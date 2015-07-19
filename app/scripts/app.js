'use strict';

/**
 * @ngdoc overview
 * @name customerAppApp
 * @description
 * # customerAppApp
 *
 * Main module of the application.
 */
angular
  .module('customerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/connection', {
        templateUrl: 'views/connection.html',
        controller: 'ConnectionCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/customerslist', {
        templateUrl: 'views/customerslist.html',
        controller: 'CustomerslistCtrl'
      })
      .otherwise({
        redirectTo: '/connection'
      });
  });
