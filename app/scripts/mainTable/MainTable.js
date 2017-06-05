/**
 * @ngdoc function
 * @name crossoverTestJohnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crossoverTestJohnApp
 */
angular.module('crossoverTestJohnApp')
  .controller('MainTableController', [
    'buildStatusService',
    MainTableController
  ]);

function MainTableController(buildStatusService) {
  'use strict';

  var MainTableCtrl = this;
  MainTableCtrl.loading = true;

  //init
  fetchStatus();

  function fetchStatus() {
    buildStatusService.get()
      .then(
        function (success) {
          MainTableCtrl.stats = success;
        },
        function (error) {
          //err
        }
      )
      .then(function () {
        //finally
        MainTableCtrl.loading = false;
      });
  }
}
