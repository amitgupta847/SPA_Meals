'use strict';

/**
 * @ngdoc function
 * @name udacimealsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udacimealsApp
 */
angular.module('udacimealsApp')
  .controller('OrderCtrl', ['orderManager', function (orderManager) {
      this.list = orderManager.getOrders();

      this.setActiveDay = function (day) {
          orderManager.setActiveDay(day);
      };
  }]);

