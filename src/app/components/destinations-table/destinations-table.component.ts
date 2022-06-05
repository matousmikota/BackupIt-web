import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Destination} from '../../Models/destination';
import {Router} from '@angular/router';
import {ConfigsService} from '../../services/configs-service';
import {DestinationsService} from '../../services/destinations-service';


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

  constructor(
    private router: Router,
    private service: DestinationsService
  ) { }

  ngOnInit(): void {
  }

  public destinationSelected(destination: Destination): void {
    this.selected.emit(destination);
  }

  public deleteById(id: number): void {
    this.service.deleteById(id).subscribe( user => {
      this.redirectTo('configs/destinations');
    });
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }
}
