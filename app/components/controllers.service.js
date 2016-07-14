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

  var _assignZone = function(zone, system) {
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

  return {
    assignZone: _assignZone
  }
}
