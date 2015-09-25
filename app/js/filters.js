'use strict';

/* Filters */

angular.module('hummingbirdFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
