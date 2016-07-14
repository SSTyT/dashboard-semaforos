'use strict';
angular.module('dashboard-semaforos')
  .factory('ControllerService', ['$q', '$http', ControllerService]);

function ControllerService($q, $http) {
  var controllers;

  $http({
    method: 'GET',
    url: '/assets/data/controladores.acum.json'
  }).then(function(payload) {
    controllers = payload.data;
  });

  function assignZone(zone, system) {
    var out = {
      total: 0,
      detail: []
    }
    var zone = controllers[zone]
    zone.forEach(function(controller, key) {
      if (system.toLowerCase() !== controller.name.toLowerCase()) {
        out.total += controller.cant;
        out.detail.push({
          controller: key,
          system: controller.name,
          amount: controller.cant
        });
      }
    });
  }

  function calculate(zonas, sistema, costoControlador, factorControlador, costoNodo, factorNodo, ratio) {
    var out = {
      costo2010: 0,
      costoActual: 0,
      recambioControlador: 0,
      recambioNodos: 0
    }
    zonas.forEach(function(zona) {
      var valores = assignZone(zona, sistema);
      out.recambioControlador += valores.total;
    });

    out.recambioNodos = Math.ceil(out.recambioControlador / ratio);
    out.costo2010 = out.recambioControlador * costoControlador + out.recambioNodos * costoNodo;
    out.costoActual = out.recambioControlador * costoControlador * factorControlador +
      out.recambioNodos * costoNodo * factorNodo;

    return out;
  }

  return { calculate: calculate }
}
