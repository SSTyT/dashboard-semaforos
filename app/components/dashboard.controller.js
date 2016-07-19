'use strict';
angular.module('dashboard-semaforos')
  .controller('DashboardController', ['$scope', '$rootScope', '$anchorScroll', '$timeout', '$location', '$q', 'DataOriginService', 'PersistenceService', DashboardController])
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


function DashboardController($scope, $rootScope, $anchorScroll, $timeout,
  $location, $q, DataOriginService, PersistenceService) {


  var vm = this;
  //al infinito y mas aya
  //$scope.hash = "data-sources";
  $scope.hash = "distribution";

  $location.hash($scope.hash);

  //the unseen
  $scope.ready = false;
  $scope.atras = false;


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

  $scope.$on('json-loaded', function(event, data) {
    $scope.$apply(function() {
      $scope.grid.data.forEach(function(el, i) {
        angular.extend(el, data.table[i])
      });
      $scope.coeficientes = data.coeficientes;
      $scope.updateRowsMatching('RUBRO', { id: 'GENERAL' });
    });
  });

  $scope.$on('zones-change', function(ev,dropzones){
    $scope.dropzones = [];
    dropzones.forEach(function(zone){
      $scope.dropzones.push({
        name: zone.name, 
        areas: zone.areas.map(function(el){return el.name}), 
        total: zone.total, 
        recambio: zone.recambio
      });
    });
  });

  $scope.downloadJSON = function() {
    var data = {
      table: $scope.grid.data,
      coeficientes: $scope.coeficientes,
      dropzones: $scope.dropzones
    }
    PersistenceService.download(data);
  }

  $scope.uploadFile = function(files) {
    PersistenceService.load(files[0]);
  };

  $scope.openFileLoader = function() {
    angular.element('#json').click();
  }

  $scope.getTable = function() {
    var out = [];
    $scope.grid.data.forEach(function(row) {
      var ajuste;

      if (parseFloat(0 + row.AJUSTE) > 0) {
        ajuste = row.AJUSTE;
      } else if (parseFloat($scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value) > 0) {
        ajuste = $scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value;
      } else if (parseFloat($scope.coeficientes[row.RUBRO].value) > 0) {
        ajuste = $scope.coeficientes[row.RUBRO].value;
      } else if (parseFloat($scope.coeficientes["GENERAL"].value) > 0) {
        ajuste = $scope.coeficientes["GENERAL"].value;
      } else {
        ajuste = 0;
      }


      var csvRow = {
        'EMPRESA': row.EMPRESA,
        'RUBRO': row.RUBRO,
        'SUBRUBRO': row.SUBRUBRO,
        'DESCRIPCION': row.description,
        'SUBITEM': row.SUBITEM,
        'UNIDAD DE MEDIDA': row.UnidadMedida,
        'CANTIDAD': Math.ceil(parseFloat(0 + row.CANTIDAD)),
        'PRECIO UNITARIO': Math.round(parseFloat(0 + row.precioUnitario) * 100) / 100,
        'PRECIO 2010': Math.round(parseFloat(0 + row.p2010) * 100) / 100,
        'AJUSTE': Math.round(parseFloat(0 + ajuste) * 100) / 100,
        'ESTIMADO': Math.round(parseFloat(0 + row.NPE) * 100) / 100,
        'RESULTADO': Math.round(parseFloat(0 + row.RESULTADO) * 100) / 100
      }
      out.push(csvRow);
    });
    return out;
  }

  $scope.getHeader = function() {
    return ['EMPRESA', 'RUBRO', 'SUBRUBRO', 'DESCRIPCION', 'SUBITEM', 'UNIDAD DE MEDIDA', 'CANTIDAD', 'PRECIO UNITARIO', 'PRECIO 2010', 'AJUSTE', 'ESTIMADO', 'RESULTADO'];
  }

  $scope.grid.onRegisterApi = function(gridApi) {
    //set gridApi on scope
    $scope.gridApi = gridApi;
    gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
  };

  DataOriginService.getTable().then(function successCallback(response) {
    console.log(response);
    $scope.grid.data = response;

    $timeout(function() {

      $scope.ready = true;
      $scope.updateRowsMatching('RUBRO', { id: 'GENERAL' });

      $timeout(function() {
        $scope.atras = true;
      }, 1000)

    }, 1000);
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
    for (var i = 0; i < rows.length; i++) {
      if (value.id == "GENERAL" || rows[i][field] == value.id) {
        console.log("match row: " + i);
        evalAndUpdate(rows[i]);
      }
    }
  }


  $scope.goTo = function goto(hash) {
    $scope.hash = hash;
    if ($location.hash() !== hash) {
      $location.hash(hash);
    } else {
      $anchorScroll();
    }
  }

  function evalAndUpdate(row) {

    if (parseFloat(0 + row.NPE) > 0) {
      row.RESULTADO = row.NPE;
    } else if (parseFloat(0 + row.AJUSTE) > 0) {
      row.RESULTADO = row.AJUSTE * row.p2010;
    } else if (parseFloat(0 + $scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value) > 0) {
      row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].subrubro[row.SUBRUBRO].value;
    } else if (parseFloat(0 + $scope.coeficientes[row.RUBRO].value) > 0) {
      row.RESULTADO = row.p2010 * $scope.coeficientes[row.RUBRO].value;
    } else if (parseFloat(0 + $scope.coeficientes["GENERAL"].value) > 0) {
      row.RESULTADO = row.p2010 * $scope.coeficientes["GENERAL"].value;
    } else {
      row.RESULTADO = 0;
    }

    $rootScope.$broadcast('grid-change', $scope.grid.data);

  }

  $scope.updateRowsMatching('RUBRO', { id: 'GENERAL' });

  console.log("READY!");

}
