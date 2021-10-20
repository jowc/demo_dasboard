import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  label: string = "Crypto"
  total: string = "200"
  percentage: string = "50"

  constructor() { }

  ngOnInit(): void {
  }

}
