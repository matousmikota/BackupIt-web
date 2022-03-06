import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LogsService} from '../../services/logs-service';
import {Log} from '../../Models/log';
import {Config} from '../../Models/config';

@Component({
  templateUrl: 'logs.component.html'
})
export class LogsComponent implements OnInit {

  public data: Log[] = [];

  constructor(
    private router: Router,
    private service: LogsService
  ) { }

  isCollapsed = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public showLog(log: Log): void {
    this.router.navigate(['logs', log.id]);
  }
}
