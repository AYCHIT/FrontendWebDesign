/**
 * @ngdoc directive
 * @name <build>
 * @description
 * # buildDirective.js
 * Directive of the crossoverTestJohnApp module
 */
angular.module('crossoverTestJohnApp')
  .directive('build', [buildDirective]);

function buildDirective() {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    scope: {
      debug: '=',
      release: '='
    },
    templateUrl: 'scripts/build/build.html'
  };
}
