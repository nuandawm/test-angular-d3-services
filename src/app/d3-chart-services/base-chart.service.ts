import * as _ from 'lodash';
import * as d3 from 'd3';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseChartService {

  $svgElement;
  data: Array<number>;
  circleColor: string;

  private drawData() {
    this.$svgElement.selectAll('circle')
      .data(this.data)
      .enter().append('circle')
      .attr('cy', () => _.random(10, 230))
      .attr('cx', () => _.random(10, 310))
      .attr('r', d => d)
      .style('fill', this.circleColor);
  }

  constructor() { }

  initChart($svgElement, data, circleColor) {
    this.$svgElement = $svgElement;
    this.data = data;
    this.circleColor = circleColor;

    this.drawData();
  }
}
