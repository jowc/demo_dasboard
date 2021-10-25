import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { areaOption } from '../../helpers/areaChartOptions';
import { Chart } from 'highcharts';


let ctx;

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  @Input() data: any
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions:any = {}


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    series: this.data
    }
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
    }

}
