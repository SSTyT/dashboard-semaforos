angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('controladores/controladores.html','<h1>Recambio T\xE9cnico</h1>\n<div class="data-controladores" ng-controller="ControladoresCtrl">\n    <div class="coeficients">\n        <h3>Coeficientes</h3>\n        <div class="controladores" >\n            <h4>Controladores</h4>\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateControladores()" ng-model="coef.controladoresCosto" placeholder="Costo" title="Costo">\n            <input type="number" name="factor-controlador"  class="form-control" ng-enter="updateControladores()" ng-model="coef.controladoresFactor" placeholder="Factor" title="Factor">                    \n        </div>\n        <div class="nodos" >\n            <h4>Nodos</h4>\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.nodoCosto" placeholder="Costo" title="Costo">\n            <input type="number" name="factor-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.nodoFactor" placeholder="Factor" title="Factor">                    \n        </div>\n        <div class="controladores-por-nodo" >\n            <h4>Controladores por Nodo</h4>\n            <input type="number" name="costo-controlador"  class="form-control" ng-enter="updateNodos()" ng-model="coef.controladoresPorNodo" placeholder="Controladores por Nodo" title="Controladores por Nodo">\n        </div>\n    </div>\n    <div class="costos-wrapper">\n        <h3>Costos por zonas</h3>\n        <div ui-grid="gridController" ui-grid-edit ui-grid-row-edit ui-grid-cellNav ui-grid-resize-columns class="grid"></div>\n    </div>\n</div>');
$templateCache.put('distribution/distribution.html',' <h1>Distribuci\xF3n de \xC1reas</h1>\n<div class="distribution" ng-controller="DistributionCtrl">\n    <div class="zone-picker">\n        <div class="areas">\n\n            <ul class="list-group">\n                <drag-ul ng-repeat="area in areas" data="area"></drag-ul>\n            </ul>\n        </div>\n        <div class="drop-container">\n            <drop-div dropzone="zone" ng-repeat="zone in dropzones"></drop-div>\n        </div>\n        <div class="Presupuestos-container">\n            <h4>Presupuesto</h4>\n            <div class="item">  Ordinario: <span class="cifra">{{cantidades.ordinario | guita}}</span></div>\n            <div class="item">  Recambio:  <span class="cifra">{{cantidades.recambio | guita}}</span></div>\n            <div class="item total">  Total:     <span class="cifra">{{(cantidades.ordinario+cantidades.recambio) | guita}}</span></div>\n        </div>\n\n    </div>\n    <div class="charts">\n    \t<bar-chart id="global" chart-data="globalChartData"></bar-chart>\n    \t<bar-chart id="rubroA" chart-data="aChartData"></bar-chart>\n    \t<bar-chart id="rubroB" chart-data="bChartData"></bar-chart>\n    \t<bar-chart id="rubroC" chart-data="cChartData"></bar-chart>\n    </div>\n</div>');
$templateCache.put('distribution/drag.html','<li draggable="true" ng-show="!data.assigned" class="list-group-item noselect">{{data.name}}</li>');
$templateCache.put('distribution/drop.html','<div ng-class="zone" class="dropzone">\n    <span ng-repeat="area in dropzone.areas" class="area label label-info">{{area.name}}\n    \t<a ng-click="remove(area)">\n        <span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>\n    \t</a>\n    </span>\n    <div ng-if="dropzone.total>0" class="sub-caption">\n        <span ng-if="dropzone.recambio > 0">\n        \t<!-- <div class="tooltip"> -->\n        \t\t<!-- <div class="ordinario">{{dropzone.total | guita }}</div>  -->\n            \t<!-- + <div class="recambio">{{dropzone.recambio | guita }}</div>  -->\n            \t<div class="total">Total: {{(dropzone.total+dropzone.recambio) | guita}}</div>\n          <!-- </div> -->\n        </span>\n        <div ng-if="dropzone.recambio <= 0">\n            <div class="total">Total: {{dropzone.total | guita}}</div> \n        </div>\n    </div>\n\n    <span class="name">Zona {{dropzone.name}}</span>\n</div>\n');
$templateCache.put('tabla/tabla.html','<h1>Tabla de Entrada</h1>\n<div class="data-sources">\n    <div class="coeficients">\n        <h3>Coeficientes</h3>\n        <div class="rubro" ng-repeat="(key, rubro) in coeficientes">\n            <!-- <h6>{{rubro.id}}</h6> -->\n            <input type="number" name="{{rubro.id}}"  class="form-control" ng-enter="updateRowsMatching(\'RUBRO\',rubro)" ng-model="rubro.value" placeholder="{{rubro.id}}">\n            <div class="subrubro" ng-repeat="(subrubro_key, subrubro) in rubro.subrubro">\n                <!-- <h6>{{subrubro.id}}</h6> -->\n                <input type="number" name="{{subrubro.id}}" title="{{subrubro.id}}" class="form-control" ng-enter="updateRowsMatching(\'SUBRUBRO\',subrubro)" ng-model="subrubro.value" placeholder="{{subrubro.id}}">\n            </div>                \n        </div>\n    </div>\n    <div class="grid-wrapper">\n    <h3>Gastos desagregados</h3>\n        <div ui-grid="grid" ui-grid-edit  ui-grid-row-edit ui-grid-cellNav ui-grid-resize-columns class="grid"></div>\n        <button type="button" ng-csv="getTable()" csv-header="getHeader()" filename="datos.csv" class="btn btn-success">Descargar CSV</button>\n    </div>\n</div>');}]);