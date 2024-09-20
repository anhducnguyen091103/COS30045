function init() {
    d3.csv("Task_2.4_data.csv").then(function (data) {
        console.log(data);
        wombatSightings = data;

        barChart(wombatSightings);
    })

    function barChart() {
        var w = 600;
        var h = 150;
        var padding = 1;

        var colorScale = d3.scaleLinear()
            .domain([d3.max(wombatSightings, function (d) { return d.wombats; }), d3.min(wombatSightings, function (d) { return d.wombats; })])  // Highest to lowest
            .range(["yellow", "orange"]); // Map values to a color from light grey to black



        var svg = d3.select("#chart")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(wombatSightings)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / wombatSightings.length);
            })
            .attr("y", function (d) {
                return h - (d.wombats * 4);
            })
            .attr("width", w / wombatSightings.length - padding)
            .attr("height", function (d) {
                return d.wombats * 4;
            })
            .attr("fill", function (d) {
                return colorScale(d.wombats);  // Apply the color scale based on data value
            })

        svg.selectAll("text")
            .data(wombatSightings)
            .enter()
            .append("text")
            .text(function (d) {
                return d.wombats;
            })
            .attr("x", function (d, i) { return i * (w / wombatSightings.length) + (w / wombatSightings.length - padding) / 2; })
            .attr("y", function (d) {
                return h - (d.wombats * 4) + 14;
            })
            .attr("fill", "white")
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle")
    }

    d3.csv("pet_ownership.csv").then(function (data2) {
        console.log(data2);
        data2019 = data2;

        barChart2(data2019);
    })

    function barChart2() {
        var w = 600;
        var h = 200;
        var padding = 1;

        var colorScale = d3.scaleLinear()
            .domain([d3.max(data2019, function (d) { return d.pets2019; }), d3.min(data2019, function (d) { return d.pets2019; })])
            .range(["blue", "navy"]);



        var svg = d3.select("#chart2")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data2019)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / data2019.length);
            })
            .attr("y", function (d) {
                return h - (d.pets2019 * 4) - 40;
            })
            .attr("width", w / data2019.length - padding)
            .attr("height", function (d) {
                return d.pets2019 * 4;
            })
            .attr("fill", function (d) {
                return colorScale(d.pets2019);  // Apply the color scale based on data value
            })

        svg.selectAll("text")
            .data(data2019)
            .enter()
            .append("text")
            .text(function (d) {
                return d.animal;
            })
            .attr("x", function (d, i) { return i * (w / data2019.length) + (w / data2019.length - padding) / 2; })
            .attr("y", function (d) {
                return h - 12;
            })
            .attr("fill", "green")
            .attr("font-family", "sans-serif")
            .attr("font-size", "15px")
            .attr("text-anchor", "middle")
    }

    d3.csv("pet_ownership.csv").then(function (data3) {
        console.log(data3);
        data2021 = data3;

        barChart3(data2021);
    })

    function barChart3() {
        var w = 600;
        var h = 200;
        var padding = 1;

        var colorScale = d3.scaleLinear()
            .domain([d3.max(data2021, function (d) { return d.pets2021; }), d3.min(data2021, function (d) { return d.pets2021; })])
            .range(["blue", "navy"]);



        var svg = d3.select("#chart3")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(data2021)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / data2021.length);
            })
            .attr("y", function (d) {
                return h - (d.pets2021 * 4) - 40;
            })
            .attr("width", w / data2021.length - padding)
            .attr("height", function (d) {
                return d.pets2021 * 4;
            })
            .attr("fill", function (d) {
                return colorScale(d.pets2021);  // Apply the color scale based on data value
            })

        svg.selectAll("text")
            .data(data2021)
            .enter()
            .append("text")
            .text(function (d) {
                return d.animal;
            })
            .attr("x", function (d, i) { return i * (w / data2021.length) + (w / data2021.length - padding) / 2; })
            .attr("y", function (d) {
                return h - 12;
            })
            .attr("fill", "green")
            .attr("font-family", "sans-serif")
            .attr("font-size", "15px")
            .attr("text-anchor", "middle")
    }

}

window.onload = init;