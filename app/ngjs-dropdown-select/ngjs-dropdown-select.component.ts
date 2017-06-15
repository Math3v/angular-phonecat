angular.module('dropdownSelectModule')
  .directive('ngjsDropdownSelect', function() {
    return {
      restrict: 'E',
      scope: {
        items: '=',
        onItemClicked: '='
      },
      templateUrl: 'ngjs-dropdown-select/ngjs-dropdown-select.template.html',
      controller: ['$scope', function($scope) {

        $scope.itemClicked = function(item) {
          console.log( 'Inner click ', item );
          $scope.onItemClicked( item );
        }

        $scope.$watch('items', function(newVal) {
          console.table(newVal);
        });
      }]
    };
  });
