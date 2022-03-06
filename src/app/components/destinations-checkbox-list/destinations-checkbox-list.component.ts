import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Destination} from '../../Models/destination';


@Component({
  selector: 'app-destinations-checkbox-list',
  templateUrl: './destinations-checkbox-list.component.html',
  // styleUrls: ['./destinations-checkbox-list.component.scss']
})
export class DestinationsCheckboxListComponent implements OnInit {

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
