import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseChartService } from '../d3-chart-services/base-chart.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit, AfterViewInit {
  private $svgElement;

  @ViewChild('svgElement', {static: false}) svgElement: ElementRef;

  constructor(private baseChartService: BaseChartService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.$svgElement = d3.select(this.svgElement.nativeElement);
    this.$svgElement.attr('width', 320).attr('height', 240);

    this.baseChartService.initChart(this.$svgElement, [5, 5, 5, 10], 'red');
  }

}
