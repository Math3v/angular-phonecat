'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  'ngjsDropdownSelectModule'
]);

angular.module('phonecatApp')
  .controller('MainController', ['$scope', function($scope) {
    $scope.dummy = function() {
      console.log('MainController.dummy ', arguments);
    }
  }]);
