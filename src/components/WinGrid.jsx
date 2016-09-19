const colors = {
  '90': '#00FF1B',
  '75': '#C7FF00',
  '50': '#FF7E00',
  '25': '#FF410B',
  '10': '#FF0000',
  'na': '#999999',
}

const leaders = { 'fo': 1, 'sw': 2, 'ru': 3, 'dr': 4, 'sh': 5, 'bl': 6, 'ha': 7 }
const data = [
  { 'x': '0', 'y': '0', 'percentage': '25', 'record': '1-3-0'},
  { 'x': '1', 'y': '0', 'percentage': '10', 'record': '1-9-0'},
  { 'x': '2', 'y': '0', 'percentage': '25', 'record': '1-3-0'},
  { 'x': '3', 'y': '0', 'percentage': '75', 'record': '3-1-0'},
  { 'x': '0', 'y': '1', 'percentage': '90', 'record': '9-0-3'},
  { 'x': '1', 'y': '1', 'percentage': '50', 'record': '3-3-2'},
  { 'x': '2', 'y': '1', 'percentage': '75', 'record': '4-1-0'},
  { 'x': '3', 'y': '1', 'percentage': '90', 'record': '5-1-2'},
  { 'x': '0', 'y': '2', 'percentage': '10', 'record': '3-1-0'},
  { 'x': '1', 'y': '2', 'percentage': '10', 'record': '1-7-0'},
  { 'x': '2', 'y': '2', 'percentage': '50', 'record': '3-4-2'},
  { 'x': '3', 'y': '2', 'percentage': '50', 'record': '7-8-0'},
  { 'x': '0', 'y': '3', 'percentage': '90', 'record': '6-1-0'},
  { 'x': '1', 'y': '3', 'percentage': '10', 'record': '2-1-1'},
  { 'x': '2', 'y': '3', 'percentage': '75', 'record': '6-2-0'},
  { 'x': '3', 'y': '3', 'percentage': '75', 'record': '7-3-3'},
];

var div = d3.select("body")
        .append("div")
        .style("position", "fixed")
        .style("top", 10 + "px")
        .style("left", 10 + "px")
        .style("width", 200 + "px")
        .style("height", 200 + "px")
        .style("background-color", "#BBBBBB");

var svg = div.append('svg')
      .attr('width', '200px')
      .attr('height', '200px')
      .selectAll('.squares')
      .data(data)
    .enter()
      .append('g');

    svg.append('rect')
      .style('class', 'squares')
      .attr('width', '49px')
      .attr('height', '49px')
      .attr('x', function(d) { return d.x * 50; })
      .attr('y', function(d) { return d.y * 50; })
      .style('fill', function(d) { return colors[d.percentage]; })
      .style('border-right', '1px solid black')
      .style('border-bottom', '1px solid black')
      .style('color', '#FFFFFF');

    svg.append('text')
      .style('font-size', '12')
      .style('font-family', 'courier')
      .style('stroke', '#333333')
      .style('stroke-width', 0.1)
      .attr('text-anchor', 'middle')
      .attr('dx', function(d) { return d.x * 50 + 25; })
      .attr('dy', function(d) { return d.y * 50 + 40; })
      .text(function(d) { return d.record; });
