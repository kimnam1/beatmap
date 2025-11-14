import * as d3 from "d3";

export function setupMap(containerSelector) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const svg = d3
    .select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  d3.json("/data/world_countries.geojson").then(function (geoData) {
    const projection = d3.geoNaturalEarth1().fitSize([width, height], geoData);
    const path = d3.geoPath().projection(projection);

    svg
      .selectAll("path")
      .data(geoData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#4c6ef5")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", 0.3);
  });
}
