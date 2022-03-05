import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../Models/client';


@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  // styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit {

  @Input()
  public clients: Client[] = [];

  @Output()
  public selected: EventEmitter<Client> = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  public clientSelected(client: Client): void {
    this.selected.emit(client);
  }

}
