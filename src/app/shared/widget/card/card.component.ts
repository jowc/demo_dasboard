import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { cardOption } from '../../helpers/cardChartOption';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any
  @Input() label:string = ""
  @Input() total:string = ""
  @Input() percentage:string = ""


  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions:any = {}

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: null
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend:{
          enabled: false
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
