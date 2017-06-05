/**
 * @ngdoc directive
 * @name <percentile-bar>
 * @description
 * # percentileBarDirective.js
 * Directive of the crossoverTestJohnApp module
 */
angular.module('crossoverTestJohnApp')
  .directive('percentileBar', [percentileBarDirective]);

function percentileBarDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      covered: '='
    },
    templateUrl: 'scripts/percentileBar/percentileBar.html'
  };
}
