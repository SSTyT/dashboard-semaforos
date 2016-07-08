'use strict';
angular.module('dashboard-semaforos')
  .controller('DistributionCtrl', ['$scope', function barChartCtrl($scope) {
    $scope.areas = [
      { name: "1-SWARCO" },
      { name: "2-TELVENT" },
      { name: "3-MANTELECTRIC" },
      { name: "4-AUTOTROL" },
      { name: "5A-AUTOTROL" },
      { name: "5B-AUTOTROL" },
      { name: "6-AUTOTROL" },
      { name: "7-MANTELECTRIC" },
      { name: "8-LESKO" },
      { name: "9-SUTEC" }
    ];

    $scope.dropzones = [
      { name: "Area 1" },
      { name: "Area 2" },
      { name: "Area 3" },
      { name: "Area 4" },
      { name: "Area 5" },
      { name: "Area 6" }
    ]
  }]);
