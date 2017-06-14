angular.module('ngjsDropdownSelectModule')
  .directive('ngjsDropdownSelect', function() {
    return {
      restrict: 'E',
      scope: {
        hidden: '=',
        onItemClicked: '='
      },
      templateUrl: 'ngjs-dropdown-select/ngjs-dropdown-select.template.html',
      controller: ['$scope', function($scope) {
        $scope.items = [
          { id: '1', name: 'Account' },
          { id: '2', name: 'Logout' }
        ];

        $scope.itemClicked = function(item) {
          console.log( 'Inner click ', item );
          $scope.onItemClicked( item );
        }
      }]
    };
  });
