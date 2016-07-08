angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('distribution/distribution.html','<div class="zone-picker" ng-controller="DistributionCtrl">\r\n    <div class="areas">\r\n        <ul class="list-group">\r\n            <drag-ul ng-repeat="area in areas" data="area"></drag-ul>\r\n        </ul>\r\n    </div>\r\n    <div class="drop-container">\r\n        <drop-div name="zone.name" ng-repeat="zone in dropzones"></drop-div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('distribution/drag.html','<li class="list-group-item">{{data.name}}</li>');
$templateCache.put('distribution/drop.html','<div class="dropzone">{{name}}</div>');
$templateCache.put('zone-picker/zone-picker.html','<div class="row">\r\n    <div class="col-xs-3">\r\n        <div class="panel panel-primary">\r\n            <div class="panel-heading">\r\n                <h3 class="panel-title">Panel title</h3>\r\n            </div>\r\n            <div class="panel-body">\r\n                <ul class="list-group">\r\n                    <li class="list-group-item">Zona 1</li>\r\n                    <li class="list-group-item">Zona 2</li>\r\n                    <li class="list-group-item">Zona 3</li>\r\n                    <li class="list-group-item">Zona 4</li>\r\n                    <li class="list-group-item">Zona 5</li>\r\n                    <li class="list-group-item">Zona 6</li>\r\n                    <li class="list-group-item">Zona 7</li>\r\n                    <li class="list-group-item">Zona 8</li>\r\n                    <li class="list-group-item">Zona 9</li>\r\n                    <li class="list-group-item">Zona 10</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n');}]);