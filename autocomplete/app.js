{

const app = angular.module('app', [])

app.controller('demoCtrl', ($scope) => {
  $scope.items = ['aaaa', 'bcs', 'sdc', 'avv']
  $scope.value = 'a'
})

app.directive('autocomplete', () => {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      repeat: '@',
      value: '=',
      items: '='
    },
    template: (element, attrs) => {
      return `
        <div class="Autocomplete">
          <input ng-model="value" />
          <ul>
            <li ng-repeat="item in filterItems">
            ${element.find('item-template').html()}
            </li>
          </ul>
        </div>
      `
    },
    link: (scope) => {
      scope.filterItems = scope.items
      scope.$watch('value', (newValue, oldValue) => {
        scope.filterItems = scope.items.filter(item => item.indexOf(scope.value) != -1)
      })
    }
  }
})

}