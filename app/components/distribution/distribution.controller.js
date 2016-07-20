'use strict';
angular.module('dashboard-semaforos')
  .controller('DistributionCtrl', ['$scope', '$rootScope', function DistributionCtrl($scope, $rootScope) {
    $scope.areas = [{
      name: "1-SWARCO",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "2-TELVENT",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "3-MANTELECTRIC",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "4-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "5A-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "5B-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "6-AUTOTROL",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "7-MANTELECTRIC",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "8-LESKO",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }, {
      name: "9-SUTEC",
      assigned: false,
      values: {
        A: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES', amount: 0 },
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO', amount: 0 }
          ]
        },
        B: {
          amount: 0,
          subcategories: [
            { name: 'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS', amount: 0 },
            { name: 'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO', amount: 0 },
            { name: 'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO', amount: 0 }
          ]
        },
        C: {
          amount: 0,
          subcategories: [
            { name: 'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS', amount: 0 },
            { name: 'DAÑOS, TRASLADOS Y REMODELACIONES', amount: 0 },
            { name: 'REPARACIÓN DE EQUIPOS CONTROLADORES', amount: 0 },
            { name: 'OBRAS VARIAS Y ACTIVIDADES RESTANTES', amount: 0 }
          ]
        }
      }
    }];

    var subRubros = {
      A: [
        'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE INSTALACIONES',
        'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE EQUIPAMIENTO'
      ],
      B: [
        'MANTENIMIENTO PREVENTIVO Y CORRECTIVO MENSUAL DE COMANDOS DE ÁREA Y SISTEMAS',
        'MODERNIZACIÓN DE LOS SISTEMAS DE TRÁNSITO',
        'IMPLANTACIÓN DE NUEVO SISTEMA DE TRÁNSITO'
      ],
      C: [
        'CONSTRUCCIÓN DE NUEVOS CRUCES SEMAFORIZADOS',
        'DAÑOS, TRASLADOS Y REMODELACIONES',
        'REPARACIÓN DE EQUIPOS CONTROLADORES',
        'OBRAS VARIAS Y ACTIVIDADES RESTANTES'
      ]

    }

    $scope.dropzones = [
      { name: "1", areas: [], total: 0, recambio: 0 },
      { name: "2", areas: [], total: 0, recambio: 0 },
      { name: "3", areas: [], total: 0, recambio: 0 },
      { name: "4", areas: [], total: 0, recambio: 0 },
      { name: "5", areas: [], total: 0, recambio: 0 },
      { name: "6", areas: [], total: 0, recambio: 0 }
    ]

    $scope.cantidades = {
      ordinario: 0,
      recambio: 0
    }

    $scope.$on('recambio', function(event, data) {
      $scope.cantidades.recambio = 0;
      data.forEach(function(zone) {
        $scope.dropzones[parseInt(zone.ZONA) - 1].recambio = zone.COSTO;
        $scope.cantidades.recambio += zone.COSTO;
      });
    });

    function refreshGraphs() {
      $scope.globalChartData = globalChartData();
      $scope.aChartData = categoryChartData('A');
      $scope.bChartData = categoryChartData('B');
      $scope.cChartData = categoryChartData('C');

      $rootScope.$broadcast('zones-change', $scope.dropzones);

      $scope.cantidades.ordinario = 0;

      $scope.dropzones.forEach(function(zone) {
        zone.total = 0;
        zone.areas.forEach(function(area) {
          zone.total += (area.values.A.amount + area.values.B.amount + area.values.C.amount);
        });
        $scope.cantidades.ordinario += zone.total;
      });

    }

    refreshGraphs();

    $scope.$on('json-loaded', function(event, data) {
      $scope.areas.forEach(function(area) { area.assigned = false; });
      data.dropzones.forEach(function(zone, i) {
        $scope.dropzones[i].areas = [];
        zone.areas.forEach(function(areaName) {
          var area = $scope.areas.find(function(el) {
            return el.name === areaName;
          });
          area.assigned = true;
          $scope.dropzones[i].areas.push(area);
        });
      });
      refreshGraphs();
    });

    $scope.$on('drop', function(event, args) {
      var index = $scope.dropzones.indexOf(args.target);
      var target = $scope.dropzones[index];
      var source = $scope.areas.find(function(el) {
        return el.name === args.source;
      });


      target.areas.push(source);

      source.assigned = true;

      refreshGraphs();

      $scope.$apply();

    });

    $scope.$on('refresh', function() {
      refreshGraphs();
    });

    $scope.$on('grid-change', function(event, grid) {

      //reset amounts
      $scope.areas.forEach(function(area) {
        area.values.A.amount = 0;
        area.values.A.subcategories[0].amount = 0;
        area.values.A.subcategories[1].amount = 0;

        area.values.B.amount = 0;
        area.values.B.subcategories[0].amount = 0;
        area.values.B.subcategories[1].amount = 0;
        area.values.B.subcategories[2].amount = 0;

        area.values.C.amount = 0;
        area.values.C.subcategories[0].amount = 0;
        area.values.C.subcategories[1].amount = 0;
        area.values.C.subcategories[2].amount = 0;
        area.values.C.subcategories[3].amount = 0;
      });


      grid.forEach(function(row) {
        var area = $scope.areas.find(function(element) {
          return element.name === row.EMPRESA;
        });

        var rubro = row.RUBRO.substr(row.RUBRO.length - 1);
        area.values[rubro].amount += parseFloat(0 + row.RESULTADO);

        var subcat = area.values[rubro].subcategories.find(function(element) {
          return element.name === row.SUBRUBRO;
        });

        subcat.amount += parseFloat(0 + row.RESULTADO);

      });

      refreshGraphs();
    });

    function globalChartData() {
      var out = [];
      var total = 0;
      $scope.dropzones.forEach(function(zone) {
        var values = [];
        var a = { x: 'A', y: 0 };
        var b = { x: 'B', y: 0 };
        var c = { x: 'C', y: 0 };

        values.push(a);
        values.push(b);
        values.push(c);

        zone.areas.forEach(function(area) {
          a.y += area.values.A.amount;
          b.y += area.values.B.amount;
          c.y += area.values.C.amount;

          total += (area.values.A.amount + area.values.B.amount + area.values.C.amount);
        });

        out.push(values);
      });


      //calculo porcentajes
      out.forEach(function(zone) {
        zone.forEach(function(rubro) {
          rubro.p = rubro.y / total;
        });
      });
      return out;
    }

    function categoryChartData(category) {

      var out = [];
      var total = 0;
      $scope.dropzones.forEach(function(zone) {
        var values = [];

        subRubros[category].forEach(function(name) {
          values.push({ x: name, y: 0 });
        });

        zone.areas.forEach(function(area) {
          var rubro = area.values[category];

          rubro.subcategories.forEach(function(subcat) {
            var element = values.find(function(element) {
              return element.x === subcat.name;
            });

            if (element) {
              element.y += subcat.amount;
            } else {
              console.log(subcat);
            }

            total += subcat.amount;

          });

        });

        out.push(values);
      });


      //calculo porcentajes
      out.forEach(function(zone) {
        zone.forEach(function(subrubro) {
          subrubro.p = subrubro.y / total;
        });
      });
      return out;
    }


  }]);
