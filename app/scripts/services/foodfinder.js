'use strict';

/**
 * @ngdoc service
 * @name udacimealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udacimealsApp.
 */
angular.module('udacimealsApp')
  .service('foodfinder', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function
      this.getMenu = function () {
          return $.get('/menu/menu.json');
      };
  });
