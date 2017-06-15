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
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.test = function() {
      console.log('MainController.test ', arguments);
    }

    $scope.items = [
      { id: 1, name: 'Account' },
      { id: 2, name: 'Logout' }
    ];

    $timeout(function() {
      let newItem = {
        id: 3,
        name: 'Dynamic item'
      };

      $scope.items = [...$scope.items, newItem];
    }, 2500);
  }]);
