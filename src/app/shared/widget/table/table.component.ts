import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { areaOption } from '../../helpers/areaChartOptions';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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
