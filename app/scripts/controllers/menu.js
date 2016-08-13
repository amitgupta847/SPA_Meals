'use strict';

/**
 * @ngdoc function
 * @name udacimealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udacimealsApp
 */
angular.module('udacimealsApp')
  .controller('MenuCtrl', ['foodfinder','orderManager', function (menu,orderManager) {

      var vm = this;
      
      menu.getMenu().then(function (data) {
           vm.items = data;
      });

      this.chooseItem = function(menuCategory, menuItemName)
      {
          orderManager.chooseMenuOption(menuCategory,menuItemName);
      }

      this.increment = function (item)
      {
          //item.rating += 0.1
          item.rating = ((item.rating * 10) + 1) / 10;
      };

      this.decrement = function (item)
      {
          item.rating = ((item.rating * 10) - 1) / 10;
      }
  }]);
