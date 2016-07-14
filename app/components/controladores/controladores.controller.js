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
          { name: 'Costo 2010', field: 'COSTO2010', enableCellEdit: false },
          { name: 'N° Controladores', field: 'CONTROLADORES', enableCellEdit: false },
          { name: 'N° Nodos', field: 'NODOS', enableCellEdit: false },
          { name: 'Costo Actual', field: 'COSTO', enableCellEdit: false },
        ],
        data: []
      };

      $scope.saveRow = function(row) {
        var areas = [];
        $scope.zones[parseInt(row.ZONA) - 1].areas.forEach(function(area) {
          areas.push(area.name.split('-')[0]);
        });

        var data = ControllerService.calculate(areas,
          techHash[row.TEC],
          $scope.recambio.controladores.costo,
          $scope.recambio.controladores.factor,
          $scope.recambio.nodo.costo,
          $scope.recambio.nodo.factor,
          $scope.recambio.controladoresPorNodo);

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
        $scope.zones = args;
        $scope.gridController.data = [];
        args.forEach(function(zone) {
          var line = {
            ZONA: zone.name,
            TEC: '',
            COSTO2010: '',
            CONTROLADORES: '',
            NODOS: '',
            COSTO: ''
          };
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
