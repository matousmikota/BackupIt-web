import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'admins.component.html'
})
export class AdminsComponent {

  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}
