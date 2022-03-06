import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Destination} from '../../Models/destination';


@Component({
  selector: 'app-destinations-table',
  templateUrl: './destinations-table.component.html',
  // styleUrls: ['./destinations-table.component.scss']
})
export class DestinationsTableComponent implements OnInit {

  @Input()
  public destinations: Destination[] = [];

  @Output()
  public selected: EventEmitter<Destination> = new EventEmitter<Destination>();

  constructor() { }

  ngOnInit(): void {
  }

  public destinationSelected(destination: Destination): void {
    this.selected.emit(destination);
  }

}
