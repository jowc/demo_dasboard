import { Component, OnInit } from '@angular/core';
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
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions:any = {}


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = areaOption
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
    }

}
