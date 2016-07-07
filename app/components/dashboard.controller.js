'use strict';
angular.module('dashboard-semaforos').controller('DashboardController', ['DataOriginService', DashboardController])

function DashboardController(DataOriginService) {

  var vm = this;
  vm.gridData = [];
  DataOriginService.getTable().then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response);
    vm.gridData = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });



  //function DashboardController() {
  var vm = this;

  vm.chartData = [
    { letter: "A", frequency: 0.60 },
    { letter: "B", frequency: 0.25 },
    { letter: "Bc", frequency: 0.25 },
    { letter: "Ba", frequency: 0.25 },
    { letter: "Bd", frequency: 0.25 },
    { letter: "Bj", frequency: 0.25 },
    { letter: "C", frequency: 0.15 }
  ];

  console.log("READY!");
}
