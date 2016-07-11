'use strict';
angular.module('dashboard-semaforos')
  .controller('DistributionCtrl', ['$scope', function barChartCtrl($scope) {
    $scope.areas = [{
      name: "1-SWARCO",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "2-TELVENT",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "3-MANTELECTRIC",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "4-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "5A-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "5B-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "6-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "7-MANTELECTRIC",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "8-LESKO",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }, {
      name: "9-SUTEC",
      assigned: false,
      values: {
        A: {
          amount: 1900,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 700 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 1200 }
          ]
        },
        B: {
          amount: 3000,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 900 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 1100 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 1000 }
          ]
        },
        C: {
          amount: 5000,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 2500 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 800 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 700 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 1000 }
          ]
        }
      }
    }];

    $scope.dropzones = [
      { name: "1", areas: [] },
      { name: "2", areas: [] },
      { name: "3", areas: [] },
      { name: "4", areas: [] },
      { name: "5", areas: [] },
      { name: "6", areas: [] }
    ]

    $scope.$on('drop', function(event, args) {
      var index = $scope.dropzones.indexOf(args.target);
      var target = $scope.dropzones[index];
      var source = $scope.areas.find(function(el) {
        return el.name === args.source;
      });


      target.areas.push(source);
      source.assigned = true;

      $scope.$apply();

    });
  }]);
