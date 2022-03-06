import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Log} from '../../Models/log';


@Component({
  selector: 'app-logs-table',
  templateUrl: './logs-table.component.html',
  // styleUrls: ['./logs-table.component.scss']
})
export class LogsTableComponent implements OnInit {

  @Input()
  public logs: Log[] = [];

  @Output()
  public selected: EventEmitter<Log> = new EventEmitter<Log>();

  constructor() { }

  ngOnInit(): void {
  }

  public logSelected(log: Log): void {
    this.selected.emit(log);
  }

}
