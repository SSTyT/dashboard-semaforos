'use strict';
angular.module('dashboard-semaforos').factory('DataOriginService', ['$http','$q', DataOriginService]);

function DataOriginService($http,$q) {


	var tabla = undefined ;


/*
EMPRESA
RUBRO
SUBRUBRO
DESCRIPCIÓN
SUBITEM
U.M.
CANTIDAD
P. UNIT
PRESUP. 2010
AJUSTE
NUEVO PRECIO ESTIMADO
RESULTADO
*/

	function getTable(){
		var promise = $q(function (resolve,reject){

			function success(response){
				var data =response.data;
				$(data).each(function(i,e){
					console.log("cantidad: "+ e['CANTIDAD'] +" p. unit: " +e['P. UNIT']);
					var temp =   e['CANTIDAD'] * e['P. UNIT'];
					console.log("PRESUP 2010: ["+temp+"]")
				});
				resolve(data)
			}

			function fail(response){
				console.log(response);
				reject(response);
			}

			$http({
			  method: 'GET',
			  url: '/assets/data/datos.json'
			}).then(success,fail);


		})

		return promise;
	}
  return {getTable:getTable};
}
