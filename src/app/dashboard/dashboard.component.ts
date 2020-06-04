import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @HostBinding('class') class = 'w-100';
  flagMenu: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  togleMenu(element) {
    // sidenav.toggle()
    console.log(element.opened);
    if (element.opened === false) {
      element.toggle(true);
    } else {
      element.toggle(true);
    }
  }
}
