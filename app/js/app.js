'use strict';

/* App Module */

var hummingbirdApp = angular.module('hummingbirdApp', [
    'ngRoute',
    'hummingbirdAnimations',
    'hummingbirdControllers',
    'hummingbirdFilters',
    'hummingbirdServices',
    'ngSanitize'
]);

hummingbirdApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
