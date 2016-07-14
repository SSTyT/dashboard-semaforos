'use strict';
angular.module('dashboard-semaforos')
  .controller('ControladoresCtrl', ['$scope', '$q', 'ControllerService',
    function ControladoresCtrl($scope, $q, ControllerService) {

      var techHash = {
        1: 'Citar',
        2: 'Icarus',
        3: 'Omnia',
        4: 'Optimus'
      };

      $scope.coef = {};

      function refreshData() {
        if ($scope.coef) {
          $scope.gridController.data.forEach(function(row) {
            $scope.saveRow(row);
          });
        }
      }

      $scope.$watch('coef', refreshData, true);

      $scope.gridController = {
        columnDefs: [
          { name: 'Zona', field: 'ZONA', enableCellEdit: false }, {
            name: 'Tecnología',
            field: 'TEC',
            width: 100,
            editableCellTemplate: 'ui-grid/dropdownEditor',
            cellFilter: 'techSelector',
            editDropdownValueLabel: 'tech',
            editDropdownOptionsArray: [
              { id: 1, tech: 'Citar' },
              { id: 2, tech: 'Icarus' },
              { id: 3, tech: 'Omnia' },
              { id: 4, tech: 'Optimus' }
            ]
          },
          { name: 'Costo 2010', field: 'COSTO2010', enableCellEdit: false, cellFilter: 'guita' },
          { name: 'N° Controladores', field: 'CONTROLADORES', enableCellEdit: false, cellFilter: 'int' },
          { name: 'N° Nodos', field: 'NODOS', enableCellEdit: false, cellFilter: 'int' },
          { name: 'Costo Actual', field: 'COSTO', enableCellEdit: false, cellFilter: 'guita' },
        ],
        data: []
      };

      function updateRow(row) {
        var areas = [];
        $scope.zones[parseInt(row.ZONA) - 1].areas.forEach(function(area) {
          areas.push(area.name.split('-')[0]);
        });

        if (row.TEC === '') {
          return;
        }

        var data = ControllerService.calculate(areas,
          techHash[row.TEC],
          $scope.coef.controladoresCosto || 1,
          $scope.coef.controladoresFactor || 1,
          $scope.coef.nodoCosto || 1,
          $scope.coef.nodoFactor || 1,
          $scope.coef.controladoresPorNodo || 1);

        row.COSTO2010 = data.costo2010;
        row.CONTROLADORES = data.recambioControlador;
        row.NODOS = data.recambioNodos;
        row.COSTO = data.costoActual;

        return row
      }

      $scope.saveRow = function(row) {
        var areas = [];
        $scope.zones[parseInt(row.ZONA) - 1].areas.forEach(function(area) {
          areas.push(area.name.split('-')[0]);
        });

        if (row.TEC === '') {
          return;
        }

        var data = ControllerService.calculate(areas,
          techHash[row.TEC],
          $scope.coef.controladoresCosto || 1,
          $scope.coef.controladoresFactor || 1,
          $scope.coef.nodoCosto || 1,
          $scope.coef.nodoFactor || 1,
          $scope.coef.controladoresPorNodo || 1);

        row.COSTO2010 = data.costo2010;
        row.CONTROLADORES = data.recambioControlador;
        row.NODOS = data.recambioNodos;
        row.COSTO = data.costoActual;
        
        var promise = $q.defer();
        $scope.gridApi.rowEdit.setSavePromise(row, promise.promise);
        promise.resolve();
      }

      $scope.gridController.onRegisterApi = function(gridApi) {
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
      };

      $scope.$on('zones-change', function(event, args) {
        var oldData = $scope.gridController.data;

        $scope.zones = args;
        $scope.gridController.data = [];
        args.forEach(function(zone) {

          var oldLine = oldData.find(function(el) {
            return el.ZONA === zone.name;
          });

          var line;

          if (oldLine && oldLine.TEC !== '') {
            line = angular.extend({}, updateRow(oldLine));
          } else {
            line = {
              ZONA: zone.name,
              TEC: oldLine ? oldLine.TEC : '',
              COSTO2010: '',
              CONTROLADORES: '',
              NODOS: '',
              COSTO: ''
            };
          }

          if (zone.areas.length > 0) {
            $scope.gridController.data.push(line);
          }
        });
      });

    }
  ])
  .filter('techSelector', function() {
    var techHash = {
      1: 'Citar',
      2: 'Icarus',
      3: 'Omnia',
      4: 'Optimus'
    };

    return function(input) {
      if (!input) {
        return '';
      } else {
        return techHash[input];
      }
    };
  });
