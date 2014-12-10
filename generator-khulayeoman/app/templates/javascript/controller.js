(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name <%= scriptAppName %>.controller:<%= classedName %>Ctrl
   * @description
   * # <%= classedName %>Ctrl
   * Controller of the <%= scriptAppName %>
   */
  angular.module('<%= scriptAppName%>.app')
    .controller('<%= classedName %>Controller', function () {
      this.featureName = '<%= scriptAppName %>';
    });

})();
