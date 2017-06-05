'use strict';

/**
 * @ngdoc overview
 * @name crossoverTestJohnApp
 * @description
 * # crossoverTestJohnApp
 *
 * Main module of the application.
 */
angular
  .module('crossoverTestJohnApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'scripts/mainTable/table.html',
        controller: 'MainTableController',
        controllerAs: 'MainTableCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
