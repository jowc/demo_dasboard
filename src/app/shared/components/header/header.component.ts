import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleForMe: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.toggleForMe.emit()
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300);
  }

}
