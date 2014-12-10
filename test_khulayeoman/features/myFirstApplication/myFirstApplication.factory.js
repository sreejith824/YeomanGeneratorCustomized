(function(){
  'use strict';

  /**
   * @ngdoc service
   * @name myFirstApplication.MyFirstApplication
   * @description
   * # MyFirstApplication
   * Factory in the myFirstApplication.
   */
  angular.module('myFirstApplication.app')
    .factory('MyFirstApplication', function () {
      // Service logic
      // ...

      var meaningOfLife = 42;

      // Public API here
      return {
        someMethod: function () {
          return meaningOfLife;
        }
      };
    });

})();
