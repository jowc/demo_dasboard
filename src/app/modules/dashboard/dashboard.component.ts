import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  label: string = "Crypto"
  total: string = "200"
  percentage: string = "50"
  bigChart: any = []
  cardChart: any = []
  pieChart: any = []

  constructor(private payload: ChartService) { }

  ngOnInit(): void {
    this.bigChart = this.payload.getArea()
    this.cardChart = this.payload.getCard()
    this.pieChart = this.payload.getPie()
  }

}
