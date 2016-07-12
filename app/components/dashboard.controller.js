'use strict';
angular.module('dashboard-semaforos').controller('DashboardController', ['$scope', '$rootScope', '$q', 'DataOriginService', DashboardController])

function DashboardController($scope, $rootScope, $q, DataOriginService) {


  var vm = this;

  /*
EMPRESA
RUBRO
SUBRUBRO
description
SUBITEM
UnidadMedida
CANTIDAD
precioUnitario
p2010
AJUSTE
NPE
RESULTADO
*/
  $scope.grid = {
    columnDefs: [
      { name: 'Empresa', field: 'EMPRESA', enableCellEdit: false },
      { name: 'Rubro', field: 'RUBRO', enableCellEdit: false },
      { name: 'Subrubro', field: 'SUBRUBRO', enableCellEdit: false },
      { name: 'Descripcion', field: 'description', enableCellEdit: false },
      { name: 'SubItem', field: 'SUBITEM', enableCellEdit: false },
      { name: 'U. M.', field: 'UnidadMedida', enableCellEdit: false },
      { name: 'Cantidad', field: 'CANTIDAD', enableCellEdit: true },
      { name: 'Precio U', field: 'precioUnitario', enableCellEdit: true },
      { name: 'Precio 2010', field: 'p2010', enableCellEdit: false },
      { name: 'Ajuste', field: 'AJUSTE' },
      { name: 'Estimado', field: 'NPE' },
      { name: 'Resultado', field: 'RESULTADO', enableCellEdit: false }
    ],
    data: []
  };


  $scope.grid.onRegisterApi = function(gridApi) {
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };

  DataOriginService.getTable().then(function successCallback(response) {
    console.log(response);
    $scope.grid.data = response;

  }, function errorCallback(response) {
    console.log(response);
  });

  DataOriginService.getCoeficientes().then(function successCallback(response) {
    console.log(response);
    $scope.coeficientes = response;

  }, function errorCallback(response) {
    console.log(response);
  });

  $scope.saveRow = function(row) {
    console.log(row);
    row.p2010 = row.precioUnitario * row.CANTIDAD;
    evalAndUpdate(row);

    var promise = $q.defer();
    $scope.gridApi.rowEdit.setSavePromise(row, promise.promise);
    promise.resolve();
  }

  $scope.grid.onRegisterApi = function(gridApi) {
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };

  $scope.updateRowsMatching = function updateRowsMatching(field, value) {
    var rows = $scope.grid.data;
    console.log(field + "" + value);
    for (var i = rows.length - 1; i >= 0; i--) {
      if (value.id == "GENERAL" || rows[i][field] == value.id) {
        console.log("match row: " + i);
        evalAndUpdate(rows[i]);
      }
    }
  }


  function evalAndUpdate(row) {
    if (row.NPE !== "") {
      row.RESULTADO = row.NPE;
    } else if (row.AJUSTE !== "") {
      row.RESULTADO = row.AJUSTE * row.p2010;
    } else if ($scope.coeficientes["GENERAL"].value !== "") {
      row.RESULTADO = row.p2010 * $scope.coeficientes["GENERAL"].value;
    } else if (($scope.coeficientes[row.RUBRO].value !== "")) {
      row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].value;
    } else if (($scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value !== "")) {
      row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value;
    } else {
      row.RESULTADO = "";
    }

    $rootScope.$broadcast('grid-change', $scope.grid.data);
    
  }
  console.log("READY!");

}


/*

condiciones  orden 

    npe      =  { resultado =  npe }

    ajuste   =  { resultado =  p2010 * AJUSTE}
    
    general  =  { resultado =  p2010 * COE_GENERAL}
  
    rubro    =  { resultado =  p2010 * RUBRO}
    
    subrubro =  { resultado =  p2010 * SUBRUBRO}

    igual   
    
*/

/*
EMPRESA
RUBRO
SUBRUBRO
description
SUBITEM
UnidadMedida
CANTIDAD
precioUnitario
p2010
AJUSTE
NPE
RESULTADO
*/
