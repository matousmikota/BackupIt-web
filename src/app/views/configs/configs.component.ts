import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {ConfigsService} from '../../services/configs-service';
import {Config} from '../../Models/config';

@Component({
  templateUrl: 'configs.component.html'
})
export class ConfigsComponent implements OnInit {

  public data: Config[] = [];

  constructor(
    private router: Router,
    private service: ConfigsService) { }

  isCollapsed = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public showConfig(config: Config): void {
    this.router.navigate(['configs', config.id]);
  }
}
