import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { pieOption } from '../../helpers/pieChart';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions:any = {}
  @Input() data:any = []


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      credits: {
          enabled: false
      },
      exporting: {
          enabled: true
      },
      series:  [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data
      }]
  }
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
    
    }

}
