import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'clients.component.html'
})
export class ClientsComponent {

  constructor() { }

  isCollapsed = false;
  name = '';
  mac_address = '';
  ip_address = '';
  config: number;
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  fillInFields(name: string, mac_address: string, ip_address: string, config: number): void  {
    window.scroll(0, 0);
    this.name = name;
    this.mac_address = mac_address;
    this.ip_address = ip_address;
    this.config = config;
  }
}
