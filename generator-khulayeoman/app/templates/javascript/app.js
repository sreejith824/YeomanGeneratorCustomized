(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name <%= scriptAppName %>
   * @description
   * # <%= scriptAppName %>
   *
   * Main module of the application.
   */
  angular
    .module('<%= scriptAppName %>.app', [])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '<%= scriptAppName %>.html',
          controller: '<%= classedName %>Controller'
        })
        .otherwise({
          redirectTo: '/'
        });
    })  ;

})
