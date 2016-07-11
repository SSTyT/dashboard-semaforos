'use strict';
angular.module('dashboard-semaforos').controller('DashboardController', ['DataOriginService', DashboardController])

function DashboardController(DataOriginService) {


  var vm = this;
  vm.gridData = [];
  DataOriginService.getTable().then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response);
    vm.gridData = response;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });



  console.log("READY!");
}
