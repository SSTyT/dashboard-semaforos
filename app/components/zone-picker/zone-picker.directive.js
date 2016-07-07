'use strict';
angular.module('dashboard-semaforos')
  .directive('zonePicker', [function() {
    return {
      restrict: 'E',
      templateUrl: 'zone-picker/zone-picker.html',
      controller: 'zonePickerCtrl'
    }
  }])
  .controller('zonePickerCtrl', ['$scope', function barChartCtrl($scope) {
    console.log("ah des");
  }]);
