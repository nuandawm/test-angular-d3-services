import * as d3 from 'd3';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartService } from '../d3-chart-services/base-chart.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  providers: [BaseChartService]
})
export class Component2Component implements OnInit, AfterViewInit {
  private $svgElement;

  @ViewChild('svgElement', {static: false}) svgElement: ElementRef;

  constructor(private baseChartService: BaseChartService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.$svgElement = d3.select(this.svgElement.nativeElement);
    this.$svgElement.attr('width', 320).attr('height', 240);

    this.baseChartService.initChart(this.$svgElement, [30, 20, 10], 'green');
  }

}
