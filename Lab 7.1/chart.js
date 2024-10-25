function init() {
    var dataset;

    d3.csv("Unemployment_78-95.csv", function(d) {
        return {
            date: new Date(+d.year, +d.month - 1),
            number: +d.number
        };
    }).then(function(data) {
        dataset = data;
        lineChart(dataset);
    })


    function lineChart() {
        var w = 600;
        var h = 300;
        var padding = 70;

        var svg = d3.select("#chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
            

        xScale = d3.scaleTime()
            .domain([
                d3.min(dataset, function (d) { return d.date; }),
                d3.max(dataset, function (d) { return d.date; }) * 1.05
            ])
            .range([0, w]);

        yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset, function (d) { return d.number; }) * 1.1])
            .range([h, 0]);

        var xAxis = d3.axisBottom().ticks(10).scale(xScale);
        var yAxis = d3.axisLeft().ticks(10).scale(yScale);
        
        area = d3.area()
            .x(function (d) { return xScale(d.date); })
            // base line for area shape
            .y0(function () { return yScale.range()[0]; })
            .y1(function (d) { return yScale(d.number); });

        svg.append("path")
            .datum(dataset)
            .attr("class","area")
            .attr("d", area)
            .attr("transform", "translate(" + padding + ",-20)")

        svg.append("g").attr("class", "x axis").attr("transform", "translate (70, " + (h - 20) + ")").call(xAxis).selectAll("text")
            .style("text-anchor", "center")
            .style("font-size", "12px")
            .style("fill", "black"); 

        svg.append("g").attr("class", "y axis").attr("transform", "translate(" + padding + ",-20)").call(yAxis).selectAll("text")
            .style("text-anchor", "center")
            .style("font-size", "12px")
            .style("fill", "black");
        
        svg.append("line")
            .attr("class", "line halfMilMark")
            // start of line
            .attr("x1", padding)
            .attr("y1", yScale(500000) - 20)
            // end of line
            .attr("x2", w)
            .attr("y2", yScale(500000) - 20);

        svg.append("text")
            .attr("class", "halfMilLabel")
            .attr("x", padding + 10)
            .attr("y", yScale(500000) - 27)
            .text("Half a million unemployed");
    }

}

window.onload = init;