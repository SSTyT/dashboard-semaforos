'use strict';
angular.module('dashboard-semaforos')
  .factory('PersistenceService', ['$q', '$document', '$timeout', '$rootScope', PersistenceService]);

function PersistenceService($q, $document, $timeout, $rootScope) {
  var loadedData;
  var _download = function(data) {
    var charset = "utf-8";
    var blob = new Blob([JSON.stringify(data)], {
      type: "application/json;charset=" + charset + ";"
    });

    if (window.navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, 'modelo.json');
    } else {

      var downloadContainer = angular.element('<div data-tap-disabled="true"><a></a></div>');
      var downloadLink = angular.element(downloadContainer.children()[0]);
      downloadLink.attr('href', window.URL.createObjectURL(blob));
      downloadLink.attr('download', 'modelo.json');
      downloadLink.attr('target', '_blank');

      $document.find('body').append(downloadContainer);
      $timeout(function() {
        downloadLink[0].click();
        downloadLink.remove();
      }, null);
    }
  }

  var _load = function(file) {
    var fr = new FileReader();
    fr.onload = function(e) {
      loadedData = JSON.parse(e.target.result);
      $rootScope.$broadcast('json-loaded', loadedData);
    };
    fr.readAsText(file);
  }
  return {
    download: _download,
    load: _load
  }
}
