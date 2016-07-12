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
      { name: "1", areas: [] },
      { name: "2", areas: [] },
      { name: "3", areas: [] },
      { name: "4", areas: [] },
      { name: "5", areas: [] },
      { name: "6", areas: [] }
    ]

    function refreshGraphs() {
      $scope.globalChartData = globalChartData();
      $scope.aChartData = categoryChartData('A');
      $scope.bChartData = categoryChartData('B');
      $scope.cChartData = categoryChartData('C');
    }

    refreshGraphs();

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
