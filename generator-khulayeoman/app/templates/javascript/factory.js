(function(){
  'use strict';

  /**
   * @ngdoc service
   * @name <%= scriptAppName %>.<%= classedName %>
   * @description
   * # <%= classedName %>
   * Factory in the <%= scriptAppName %>.
   */
  angular.module('<%= scriptAppName %>.app')
    .factory('<%= classedName %>', function () {
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
