import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'logs.component.html'
})
export class LogsComponent {

  constructor() { }

  isCollapsed = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
