'use strict';
angular.module('dashboard-semaforos').controller('DashboardController', ['$scope','$q','DataOriginService', DashboardController])

function DashboardController($scope,$q,DataOriginService) {


  var vm = this;

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
  $scope.grid = {
        columnDefs: [
          { name:'Empresa', field: 'EMPRESA',enableCellEdit: false },
          { name:'Rubro', field: 'RUBRO' ,enableCellEdit: false},
          { name:'Subrubro', field: 'SUBRUBRO',enableCellEdit: false },
          { name:'Descripcion', field: 'description',enableCellEdit: false },
          { name:'SubItem', field: 'SUBITEM' ,enableCellEdit: false},
          { name:'U. M.', field: 'UnidadMedida',enableCellEdit: false },
          { name:'Cantidad', field: 'CANTIDAD' ,enableCellEdit: false},
          { name:'Precio U', field: 'precioUnitario' ,enableCellEdit: false},
          { name:'Precio 2010', field: 'p2010' ,enableCellEdit: false},
          { name:'Ajuste', field: 'AJUSTE'},
          { name:'Estimado', field: 'NPE'},
          { name:'Resultado', field: 'RESULTADO' ,enableCellEdit: false}



                  ],
        data:[]

  };
  $scope.saveRow =function (entity){
    console.log(entity);


    var promise = $q(function(success,fail){

      success("GATO");
      entity.RESULTADO="MIRA COMO CAMBIO TODO";
    });
  }
  $scope.grid.onRegisterApi = function(gridApi){
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };
 


  DataOriginService.getTable().then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response);
    $scope.grid.data = response;

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });

  DataOriginService.getCoeficientes().then(function successCallback(response) {
    console.log(response);
    $scope.coeficientes = response;

  }, function errorCallback(response) {
    console.log(response);
  });



  $scope.rubroCambio = function (rubro){
    console.log("gato");
    console.log(rubro);
  }
$scope.subrubroCambio =  function (subrubro){
  console.log("perro");
  console.log(subrubro);
}



  console.log("READY!");
}
