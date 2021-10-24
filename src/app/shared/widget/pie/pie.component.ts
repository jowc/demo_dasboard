import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { pieOption } from '../../helpers/pieChart';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions:any = {}


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = pieOption
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
    }

}
