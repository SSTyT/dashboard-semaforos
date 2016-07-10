'use strict';
angular.module('dashboard-semaforos')
  .directive('dragUl', [function() {
    return {
      restrict: 'E',
      templateUrl: 'distribution/drag.html',
      scope: {
        'data': '='
      },
      controller: 'dragUlCtrl'
    }
  }])
  .controller('dragUlCtrl', ['$scope', '$element', function barChartCtrl($scope, $element) {
    function handleDragStart(e) {
      this.style.opacity = '0.4';

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('data', $scope.data.name);
    }

    function handleDragEnd(e) {
      this.style.opacity = '1';
    }

    $element.find('li')[0].addEventListener('dragstart', handleDragStart, false);
    $element.find('li')[0].addEventListener('dragend', handleDragEnd, false);

  }]);
