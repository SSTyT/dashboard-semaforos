'use strict';
angular.module('dashboard-semaforos')
  .directive('barChart', [function() {
    return {
      restrict: 'E',
      scope: {
        'chartData': '=',
        'id': '@'
      },
      controller: 'barChartCtrl'
    }
  }])
  .controller('barChartCtrl', ['$scope', '$element', function barChartCtrl($scope, $element) {
    
    function thousandSep(x) {
      var num = x.toString()
      num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      return num;
    }

    //Definicion de areas y ejes
    var margin = { top: 20, right: 20, bottom: 75, left: 80 },
      width = 500 - margin.left - margin.right,
      height = 350 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    var y = d3.scale.linear()
      .range([height, 0]);

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient('left');

    var z = d3.scale.category10();

    var percentage = d3.format('%');

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return '<strong></strong> <span>$' + thousandSep(Math.ceil(d.y)) + ' ('+percentage(d.p)+')</span>';
      })

    $scope.$watch('chartData', function() {
      if ($scope.chartData) {
        d3.select('#' + $scope.id + ' svg').remove();
        var svg = d3.select('#' + $scope.id).append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        svg.call(tip);

        //Asociacion de datos
        var layers = d3.layout.stack()($scope.chartData);

        //Construccion del grafico
        x.domain(layers[0].map(function(d) {
          return d.x;
        }));
        y.domain([0, d3.max(layers[layers.length - 1], function(d) {
          return d.y0 + d.y;
        })]).nice();

        var layer = svg.selectAll('.layer')
          .data(layers)
          .enter().append('g')
          .attr('class', 'layer')
          .style('fill', function(d, i) {
            return z(i);
          });

        var rects = layer.selectAll('rect')
          .data(function(d) {
            return d;
          }).enter();

        rects.append('rect')
          .attr('x', function(d) {
            return x(d.x);
          })
          .attr('y', function(d) {
            return y(d.y + d.y0);
          })
          .attr('height', function(d) {
            return y(d.y0) - y(d.y + d.y0);
          })
          .attr('width', x.rangeBand() - 1)
          .on('mouseover', tip.show)
          .on('mouseout', tip.hide);

        rects.append('text')
          .text(function(d) {
            if (d.p > 0.025) {
              return percentage(d.p);
            }
          })
          .attr('x', function(d) {
            return x(d.x) + x.rangeBand() / 2 - 15;
          })
          .attr('y', function(d) {
            return y(d.y / 2 + d.y0) + 4;
          })
          .attr('class', 'bar-text');

        svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis)
          .selectAll(".tick text")
          .call(wrap, x.rangeBand());

        svg.append('g')
          .attr('class', 'y axis')
          .call(yAxis)
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '.71em')
          .style('text-anchor', 'end');
      }
    }, true);


    function wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }

  }]);
