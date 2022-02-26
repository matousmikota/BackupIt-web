import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'clients.component.html'
})
export class ClientsComponent {

  constructor() { }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
