{

const app = angular.module('app', [])

app.controller('ctrl', ($scope) => {
  $scope.value = 1  
  $scope.items = [1, 2, 3, 4, 5, 11, 22, 33, 44, 21]

  $scope.$watch('value', (...args) => {
    console.log(args)
  })
})

app.directive('myselect', ($document) => {
  return {
    restrict: 'E',
    require: ['?ngModel'],
    templateUrl: 'myselect.html',
    replace: true,
    scope: {
      items: '=',
      ngModel: '='
    },
    link: (scope, element, attrs, ctrls) => {
      const ngModel = ctrls[0]

      scope.isActive = false
      scope.value = scope.ngModel
      scope.filterItems = scope.items

      scope.onChange = item => {
        scope.value = item
        scope.ngModel = item
      }

      scope.onChangeInput = () => {
        if (! scope.value) {
          scope.filterItems = scope.items
        } else {
          scope.filterItems = scope.items.filter(item => String(item).indexOf(scope.value) != -1) 
        }
      }

      const onDocumentClick = e => {
        if (! element.find(e.target).length) {
          scope.$apply(() => scope.isActive = false)
        }
      }

      $document.on('click', onDocumentClick)
      element.on('$destroy', () => {
        $document.off("click", onDocumentClick)
      })

      scope.onChangeInput()
    }
  }
})

}

