{

const app = angular.module('app', [])
    
app.controller('DemoCtrl', ($scope) => {
  $scope.users = [
    {
      id: 1,
      name: 'yucong'
    },
    {
      id: 2,
      name: 'leiguang'
    }
  ]

  $scope.selectedId = 1

  $scope.onSelect = uid => {
    $scope.selectedId = uid
  }

  $scope.onDelete = uid => {
    $scope.users = $scope.users.filter(u => u.id != uid)
  }
})
    
app.directive('list', () => {
  return {
    restrict: 'E',
    templateUrl: 'list.html',
    transclude: true,
    replace: true,
    scope: {},
    link: (scope, element, attrs) => {
    }
  }
})

app.directive('item', () => {
  return {
    restrict: 'E',
    templateUrl: 'item.html',
    replace: true,
    scope: {
      user: '=',
      onClick: '&',
      onDelete: '&',
      isSelected: '='
    },
    link: (scope, element, attrs) => {
    }
  }
})

}


