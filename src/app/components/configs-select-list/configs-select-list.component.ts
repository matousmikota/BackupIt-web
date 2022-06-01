import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../../Models/config';


@Component({
  selector: 'app-configs-select-list',
  templateUrl: './configs-select-list.component.html'
})
export class ConfigsSelectListComponent implements OnInit {

  @Input()
  public configs: Config[] = [];

  @Output()
  public selected: EventEmitter<Config> = new EventEmitter<Config>();

  constructor() { }

  ngOnInit(): void {
  }

  public configSelected(config: Config): void {
    this.selected.emit(config);
    console.warn(config);
  }

}
