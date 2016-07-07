'use strict';
angular.module('dashboard-semaforos').factory('DataOriginService', ['$http', DataOriginService]);

function DataOriginService($http) {


	var tabla = undefined ;

	// $http({
	//   method: 'GET',
	//   url: '/assets/data/datos.json'
	// }).then(function successCallback(response) {
	//     // this callback will be called asynchronously
	//     // when the response is available
	//     console.log(response);
	//   }, function errorCallback(response) {
	//     // called asynchronously if an error occurs
	//     // or server returns response with an error status.
	//   	console.log(response);
	//   });

	function getTable(){

		return $http({
		  method: 'GET',
		  url: '/assets/data/datos.json'
		});

	}

  return {getTable:getTable};
}
