'use strict';
angular.module('dashboard-semaforos')
  .controller('DistributionCtrl', ['$scope', function barChartCtrl($scope) {
    $scope.areas = [
      { name: "1-SWARCO", assigned: false },
      { name: "2-TELVENT", assigned: false },
      { name: "3-MANTELECTRIC", assigned: false },
      { name: "4-AUTOTROL", assigned: false },
      { name: "5A-AUTOTROL", assigned: false },
      { name: "5B-AUTOTROL", assigned: false },
      { name: "6-AUTOTROL", assigned: false },
      { name: "7-MANTELECTRIC", assigned: false },
      { name: "8-LESKO", assigned: false },
      { name: "9-SUTEC", assigned: false }
    ];

    $scope.dropzones = [
      { name: "1", areas: [] },
      { name: "2", areas: [] },
      { name: "3", areas: [] },
      { name: "4", areas: [] },
      { name: "5", areas: [] },
      { name: "6", areas: [] }
    ]

    $scope.$on('drop', function(event, args) {
      var index = $scope.dropzones.indexOf(args.target);
      var target = $scope.dropzones[index];
      var source = $scope.areas.find(function(el) {
        return el.name === args.source;
      });


      target.areas.push(source);
      source.assigned = true;

      $scope.$apply();

    });
  }]);
