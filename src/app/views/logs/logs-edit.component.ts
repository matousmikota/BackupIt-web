import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Log} from '../../Models/log';
import {LogsService} from '../../services/logs-service';


@Component({
  templateUrl: 'logs-edit.component.html'
})
export class LogsEditComponent implements OnInit {

  public log: Log|null = null;

  constructor(private route: ActivatedRoute,
              private service: LogsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.log = this.service.findById(id);
  }

}
