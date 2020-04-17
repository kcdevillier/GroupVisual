

var svg = d3.select("#chart3")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200)
    .style("border", "1px solid black")


svg.append('svg:a')
    .classed('img', true)
    .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/html/plots1.html') // can also add svg file here
    .append('image')
    .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/images/plot1.png')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 200)
    .attr('height', 200)


function optionChanged(value) {


    svg.select('.img').remove()

    if (value === 'html1') {
        svg.append('svg:a')
            .classed('img', true)
            .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/html/plots1.html') // can also add svg file here
            .append('image')
            .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/images/plot1.png')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 200)
            .attr('height', 200)


    } else if (value === 'html2') {
        svg.append('svg:a')
            .classed('img', true)
            .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/html/plot2.html') // can also add svg file here
            .append('image')
            .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/images/plot2.png')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 200)
            .attr('height', 200)

    } else if (value === 'html3') {
        svg.append('svg:a')
            .classed('img', true)
            .attr('xlink:href', 'https://kcdevillier.github.io/GroupVisual/static/html/plots3.html') // can also add svg file here
            .append('image')
            .attr('xlink:href', 'static/images/plots3.png')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 200)
            .attr('height', 200)

    }
    return console.group(t);
}
