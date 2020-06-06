import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

import styles from './BarChart.module.scss';

import { IBarChartProps } from './IBarChartProps';
import { confidenceChartId, tooltipID, tooltipMessageID, tooltipReplyID, tooltipBarValueID, tooltipBarFillID } from '../../../constants';
import Tooltip from './Tooltip/Tooltip';

const BarChart: React.FC<IBarChartProps> = ({ data, refresh, height, width, title, confidenceLimit }) => {
    const ref = useRef<any>();

    const margin = 100;
    const computedWidth = width - margin;
    const computedHeight = height - margin;
    const x = d3.scaleBand().range([0, computedWidth]);
    const y = d3.scaleLinear().range([computedHeight, 0]);

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid #fafafa")

        if (title) {
            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("x", width / 2)
                .attr("y", 25)
                .attr("font-size", "20px")
                .text(title)
        }
    }, [])

    useEffect(() => {
        draw();
    }, [data, refresh])

    const draw = () => {

        d3.selectAll('g').remove();
        const svg = d3.select(ref.current);
        const g = svg.append("g")
            .attr("transform", "translate(50, 65)")

        x.domain(data.map((d) => d.exchange));
        y.domain([0, 100]);

        g.append("g")
            .attr("transform", `translate(0, ${computedHeight})`)
            .call(d3.axisBottom(x))
            .append("text")
            .attr("y", computedHeight - 375)
            .attr("x", computedWidth)
            .attr("dx", 6)
            .attr("text-anchor", "end")
            .attr("fill", "black")
            .attr("font-size", "12px")
            .text("# Exchange");

        g.append("g")
            .call(d3.axisLeft(y).ticks(10))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "-3.5em")
            .attr("text-anchor", "end")
            .attr("fill", "black")
            .attr("font-size", "12px")
            .text("Confidence (%)");

        const selection = g.selectAll(styles.bar).data(data)

        d3.select("g").transition();

        selection
            .enter()
            .append("rect")
            .attr("class", styles.bar)
            .on("mouseover", onMouseOver)
            .on("mouseleave", onMouseLeave)
            .attr("x", d => x(d.exchange)!! + x.bandwidth() / 6)
            .attr("y", d => y(0))
            .attr("width", x.bandwidth() / 1.5)
            .attr("margin", "20px")
            .attr("fill", d => (d.confidence > (confidenceLimit || 0.85)) ? '#118efc' : '#f41a1a')
            .transition()
            .ease(d3.easeLinear)
            .duration(500)
            .delay(function (d, i) {
                return i * 100;
            })
            .attr("height", (d) => computedHeight - y(d.confidence * 100))
            .attr("y", (d) => y(d.confidence * 100))

        selection
            .exit()
            .transition().duration(300)
            .attr("y", computedHeight)
            .attr("height", 0)
            .remove()
    }

    function onMouseOver(this: any, datum: any, index: number) {
        d3.select(this).attr('class', styles.highlight);
        const tooltip = d3.select('#tooltip');
        tooltip.style("opacity", 1);
        tooltip.select(`#${tooltipMessageID}`)
            .html(`<b>Message:</b> ${datum.input.text}`)
        tooltip.select(`#${tooltipReplyID}`)
            .html(`<b>Reply:</b> ${datum.output.text}`)
        
        tooltip.select(`#${tooltipBarValueID}`)
            .text(`Confidence: ${(datum.confidence * 100).toFixed()}%`)
        tooltip.select(`#${tooltipBarFillID}`)
            .style('width', `${datum.confidence * 100}%`)
        const xPos: number = -45 + x(datum.exchange)!! + x.bandwidth()/2;
        const yPos: number = 50 - Number.parseInt(tooltip.style('height')) + y(datum.confidence * 100);
        console.log()
        tooltip.style("transform", `translate(${xPos}px, ${yPos}px)`);
    }

    function onMouseLeave(this: any, datum: any, index: number) {
        d3.select(this).attr('class', styles.bar);
        const tooltip = d3.select(`#${tooltipID}`);
        tooltip.style("opacity", 0);
    }

    return (
        <div className={styles.barChart}>
            <svg id={confidenceChartId} ref={ref}>
            </svg>
            <Tooltip />
        </div>
    )
}

export default BarChart;