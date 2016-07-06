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


    var causes = ["wounds", "other", "disease"];

    var parseDate = d3.time.format("%m/%Y").parse;

    var margin = { top: 20, right: 50, bottom: 30, left: 20 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .range([height, 0]);

    var z = d3.scale.category10();

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatPercent);

    var svg = d3.select('#' + $scope.id).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //d3.tsv("crimea.tsv", type, function(error, crimea) {
    //if (error) throw error;

    var layers = d3.layout.stack()(causes.map(function(c) {
      return crimea.map(function(d) {
        return { x: d.date, y: d[c] };
      });
    }));

    x.domain(layers[0].map(function(d) {
      return d.x;
    }));
    y.domain([0, d3.max(layers[layers.length - 1], function(d) {
      return d.y0 + d.y;
    })]).nice();

    var layer = svg.selectAll(".layer")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) {
        return z(i);
      });

    layer.selectAll("rect")
      .data(function(d) {
        return d;
      })
      .enter().append("rect")
      .attr("x", function(d) {
        return x(d.x);
      })
      .attr("y", function(d) {
        return y(d.y + d.y0);
      })
      .attr("height", function(d) {
        return y(d.y0) - y(d.y + d.y0);
      })
      .attr("width", x.rangeBand() - 1);

    svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", "translate(" + width + ",0)")
      .call(yAxis);
    //});


    /*var margin = { top: 40, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var formatPercent = d3.format(".0%");

    var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
      .range([height, 0]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatPercent);

    var tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function(d) {
        return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
      })

    var svg = d3.select('#' + $scope.id).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.call(tip);

    x.domain($scope.chartData.map(function(d) {
      return d.letter;
    }));

    y.domain([0, d3.max($scope.chartData, function(d) {
      return d.frequency;
    })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

    svg.selectAll(".bar")
      .data($scope.chartData)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) {
        return x(d.letter);
      })
      .attr("width", x.rangeBand())
      .attr("y", function(d) {
        return y(d.frequency);
      })
      .attr("height", function(d) {
        return height - y(d.frequency);
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    function type(d) {
      d.frequency = +d.frequency;
      return d;
    }*/
  }]);
