import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../Models/client';


@Component({
  selector: 'app-clients-checkbox-list',
  templateUrl: './clients-checkbox-list.component.html'
})
export class ClientsCheckboxListComponent implements OnInit {

  @Input()
  public clients: Client[] = [];

  @Output()
  public selected: EventEmitter<Client> = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  public clientSelected(client: Client): void {
    this.selected.emit(client);
    console.warn(client);
  }

}
