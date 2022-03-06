import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../../Models/config';


@Component({
  selector: 'app-configs-table',
  templateUrl: './configs-table.component.html',
  // styleUrls: ['./configs-table.component.scss']
})
export class ConfigsTableComponent implements OnInit {

  @Input()
  public configs: Config[] = [];

  @Output()
  public selected: EventEmitter<Config> = new EventEmitter<Config>();

  constructor() { }

  ngOnInit(): void {
  }

  public configSelected(config: Config): void {
    this.selected.emit(config);
  }

}
