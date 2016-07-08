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
  .controller('dragUlCtrl', ['$scope', '$element', function barChartCtrl($scope, $element) {}]);
