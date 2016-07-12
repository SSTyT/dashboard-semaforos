'use strict';
angular.module('dashboard-semaforos')
  .directive('dropDiv', [function() {
    return {
      restrict: 'E',
      templateUrl: 'distribution/drop.html',
      scope: { dropzone: '=' },
      controller: 'dropDivCtrl'
    }
  }])
  .controller('dropDivCtrl', ['$scope', '$element', '$rootScope', function barChartCtrl($scope, $element, $rootScope) {

    $scope.zone = 'zone' + $scope.dropzone.name;

    function handleDrop(e) {
      $rootScope.$broadcast('drop', { target: $scope.dropzone, source: e.dataTransfer.getData('data') });
    }

    function handleDragOver(e) {
      e.dataTransfer.dropEffect = 'move';
      // allows us to drop
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    $scope.remove = function(area) {
      var index = $scope.dropzone.areas.indexOf(area);
      if (index > -1) {
        $scope.dropzone.areas.splice(index, 1);
        area.assigned = false;
      }
      $rootScope.$broadcast('refresh');
    }

    $element.find('div.dropzone')[0].addEventListener('dragover', handleDragOver, false);
    $element.find('div.dropzone')[0].addEventListener('drop', handleDrop, false);
  }]);
