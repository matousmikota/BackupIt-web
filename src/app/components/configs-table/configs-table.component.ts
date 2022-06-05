import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Config} from '../../Models/config';
import {ConfigsService} from '../../services/configs-service';
import {Router} from '@angular/router';


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

  constructor(
    private router: Router,
    private service: ConfigsService
  ) { }

  ngOnInit(): void {
  }

  public configSelected(config: Config): void {
    this.selected.emit(config);
  }

  public deleteById(id: number): void {
    this.service.deleteById(id).subscribe( user => {
      this.redirectTo('configs/configs');
    });
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }
}
