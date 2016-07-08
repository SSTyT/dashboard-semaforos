'use strict';
angular.module('dashboard-semaforos')
  .directive('dropDiv', [function() {
    return {
      restrict: 'E',
      templateUrl: 'distribution/drop.html',
      scope: { name: '=' },
      controller: 'dropDivCtrl'
    }
  }])
  .controller('dropDivCtrl', ['$scope', '$element', function barChartCtrl($scope, $element) {}]);
