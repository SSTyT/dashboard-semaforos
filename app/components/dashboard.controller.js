'use strict';
angular.module('dashboard-semaforos')
  .controller('DashboardController', ['$scope', '$rootScope', '$anchorScroll', '$location', '$q', 'DataOriginService', DashboardController])
  .filter('decimalComa', function() {
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return function(input) {
      if (parseInt(0 + input) === 0) {
        return '';
      } else {
        var out = numberWithCommas(parseFloat(0 + input).toFixed(2)).replace(/\./g, '*');
        out = out.replace(/,/g, '.');
        return out.replace(/\*/g, ',');
      }
    };
  })
  .filter('guita', function() {
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return function(input) {
      if (parseInt(0 + input) === 0) {
        return '';
      } else {
        var out = numberWithCommas(parseFloat(0 + input).toFixed(2)).replace(/\./g, '*');
        out = out.replace(/,/g, '.');
        return '$' + out.replace(/\*/g, ',');
      }

    };
  })
  .filter('int', function() {
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return function(input) {
      if (parseInt(0 + input) === 0) {
        return '0';
      } else {
        var out = numberWithCommas(parseInt(0 + input).toFixed(0)).replace(/\./g, '*');
        out = out.replace(/,/g, '.');
        return out.replace(/\*/g, ',');
      }
    };
  });


function DashboardController($scope, $rootScope, $anchorScroll, $location, $q, DataOriginService) {


  var vm = this;
  $scope.hash = "distribution";
  /*
EM  PRESA
RU  BRO
SU  BRUBRO
de  scription
SU  BITEM
Un  idadMedida
CA  NTIDAD
precioUnit         ar io
p2010
AJ, width:100USTE, width:100
N, width:100PE
RESULTA, width:100, width:100DO
*/
  $scope.grid = {
    columnDefs: [
      { name: 'Empresa', field: 'EMPRESA', width: 100, enableCellEdit: false },
      { name: 'Rubro', field: 'RUBRO', width: 100, enableCellEdit: false },
      { name: 'Subrubro', field: 'SUBRUBRO', width: 300, enableCellEdit: false },
      { name: 'Descripcion', field: 'description', width: 200, enableCellEdit: false },
      { name: 'SubItem', field: 'SUBITEM', width: 100, enableCellEdit: false },
      { name: 'U. M.', field: 'UnidadMedida', width: 100, enableCellEdit: false },
      { name: 'Cantidad', field: 'CANTIDAD', width: 100, enableCellEdit: true, cellFilter: 'int' },
      { name: 'Precio U', field: 'precioUnitario', width: 100, enableCellEdit: true, cellFilter: 'guita' },
      { name: 'Precio 2010', field: 'p2010', width: 150, enableCellEdit: false, cellFilter: 'guita' },
      { name: 'Ajuste', field: 'AJUSTE', width: 70, enableCellEdit: true, cellFilter: 'decimalComa' },
      { name: 'Estimado', field: 'NPE', width: 100, enableCellEdit: true, cellFilter: 'guita' },
      { name: 'Resultado', field: 'RESULTADO', width: 150, enableCellEdit: false, cellFilter: 'guita' }
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


  $scope.goTo = function goto(hash) {

    $scope.hash = hash;
    if ($location.hash() !== hash) {
      // set the $location.hash to `newHash` and
      // $anchorScroll will automatically scroll to it
      $location.hash(hash);
    } else {
      // call $anchorScroll() explicitly,
      // since $location.hash hasn't changed
      $anchorScroll();
    }
  }


  function evalAndUpdate(row) {
    if (row.NPE !== "") { row.RESULTADO = row.NPE; } else if (row.AJUSTE !== "") { row.RESULTADO = row.AJUSTE * row.p2010; } else if (($scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value !== "")) { row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value; } else if (($scope.coeficientes[row.RUBRO].value !== "")) { row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].value; } else if ($scope.coeficientes["GENERAL"].value !== "") { row.RESULTADO = row.p2010 * $scope.coeficientes["GENERAL"].value; } else { row.RESULTADO = ""; }

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
