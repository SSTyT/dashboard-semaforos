'use strict';
angular.module('dashboard-semaforos').controller('DashboardController', [DashboardController])

function DashboardController() {
  var vm = this;

  vm.chartData = [
    { letter: "A", frequency: 0.60 },
    { letter: "B", frequency: 0.25 },
    { letter: "Bc", frequency: 0.25 },
    { letter: "Ba", frequency: 0.25 },
    { letter: "Bd", frequency: 0.25 },
    { letter: "Bj", frequency: 0.25 },
    { letter: "C", frequency: 0.15 }
  ]
  console.log("READY!");
}
