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

    function handleDrop(e) {

      $rootScope.$broadcast('drop', { target: $scope.dropzone, source: e.dataTransfer.getData('data') });

    }

    function handleDragOver(e) {
      e.dataTransfer.dropEffect = 'move';
      // allows us to drop
      if (e.preventDefault) e.preventDefault();
      if (e.stopPropagation) e.stopPropagation();
    }

    $element[0].addEventListener('dragover', handleDragOver, false);
    $element[0].addEventListener('drop', handleDrop, false);
  }]);
