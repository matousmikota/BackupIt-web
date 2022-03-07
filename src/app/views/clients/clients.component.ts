import { Component, OnInit } from '@angular/core';
import {Client} from '../../Models/client';
import {ClientsService} from '../../services/clients-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: 'clients.component.html'
})
export class ClientsComponent implements OnInit {

  public data: Client[] = [];

  isCollapsed = false;
  name = '';
  mac_address = '';
  ip_address = '';
  config: number;

  constructor(
    private router: Router,
    private service: ClientsService) { }

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

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public showClient(client: Client): void {
    this.router.navigate(['clients', client.id]);
  }
}
