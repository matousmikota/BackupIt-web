import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../../Models/client';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClientsService} from '../../services/clients-service';


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

  constructor(
    private router: Router,
    private service: ClientsService
  ) { }

  ngOnInit(): void {
  }

  public clientSelected(client: Client): void {
    this.selected.emit(client);
  }

  public deleteById(id: number): void {
    this.service.deleteById(id).subscribe( user => {
      this.redirectTo('clients');
    });
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }
}
