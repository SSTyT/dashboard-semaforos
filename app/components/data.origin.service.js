'use strict';
angular.module('dashboard-semaforos').factory('DataOriginService', ['$http','$q', DataOriginService]);

function DataOriginService($http,$q) {


	var rubros = {} ;
	function computarRubros (data){
		$(data).each(function(i,e){

			if (rubros[e.RUBRO] == undefined)
				{
					rubros[e.RUBRO] = {} ;
				}	

			if (rubros[e.RUBRO][e.SUBRUBRO] == undefined)
				{
					rubros[e.RUBRO][e.SUBRUBRO] = 0;
				}

			rubros[e.RUBRO][e.SUBRUBRO]++;
		});

		//console.log(JSON.stringify(rubros));
		//console.log(rubros);

	}



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
	function turnToNumber(object,key){
		if (isNaN(object[key]))
			{
				//console.log(key+" isNaN:       [ "+object[key]+" ]")			
				object[key]= parseFloat(object[key].replace(",","."));
				//console.log(key+" isNumberNow: [ "+object[key]+" ]")
			}
	}

	function calc2010(data){
		$(data).each(function(i,e){
			turnToNumber(e,'CANTIDAD');
			turnToNumber(e,'precioUnitario');
			e['p2010'] = e['CANTIDAD'] * e['precioUnitario'];
			//console.log("PRESUP 2010: ["+e['p2010']+"]")
		});
	}
	function getTable(){
		var promise = $q(function (resolve,reject){

			function success(response){
				var data =response.data;
				calc2010(data)
				//computarRubros(data)
				resolve(data)
			}

			function fail(response){
				//console.log(response);
				reject(response);
			}

			$http({
			  method: 'GET',
			  url: '/assets/data/datos.json'
			}).then(success,fail);


		})

		return promise;
	}


	function getCoeficientes(){
		var promise = $q(function (resolve,reject){

			function success(response){
				resolve(response.data);
			}

			function fail(response){
				resolve(response.data);	
			}

			$http({
			  method: 'GET',
			  url: '/assets/data/coeficientes.json'
			}).then(success,fail);

		});
		return promise;
	}

  return {
  	getTable:getTable,
  	getCoeficientes:getCoeficientes
  };
}
