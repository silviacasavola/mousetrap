d3.svg('assets/prova2.svg').then(function(svg) {
  let mySvg = svg.documentElement;
  let container = d3.select("#visualization-container");

  container.node().appendChild(mySvg);

})
