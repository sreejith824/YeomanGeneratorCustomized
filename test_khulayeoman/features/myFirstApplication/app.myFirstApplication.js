(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name myFirstApplication
   * @description
   * # myFirstApplication
   *
   * Main module of the application.
   */
  angular
    .module('myFirstApplication.app', [])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'myFirstApplication.html',
          controller: 'MyFirstApplicationController'
        })
        .otherwise({
          redirectTo: '/'
        });
    })  ;

})
