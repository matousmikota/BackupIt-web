import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'configs.component.html'
})
export class ConfigsComponent {

  constructor() { }

  isCollapsed = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }
}
