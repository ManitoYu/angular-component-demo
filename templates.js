angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('item.html','<div class="Item"\n  ng-style="{ color: isSelected ? \'red\' : \'black\' }"\n  ng-click="onClick({ uid: user.id })"\n  ng-dblclick="onDelete({ uid: user.id })">\n  {{user.id}} - {{user.name}}\n</div>');
$templateCache.put('list.html','<div class="List" ng-transclude></div>');}]);