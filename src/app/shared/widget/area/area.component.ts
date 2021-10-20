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
    // ctx= this
    this.chartOptions = areaOption
      
    
    }

}
