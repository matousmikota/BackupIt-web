import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {ConfigsService} from '../../services/configs-service';
import {AdminsService} from '../../services/admins-service';


@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  // styleUrls: ['./admins-table.component.scss']
})
export class AdminsTableComponent implements OnInit {

  @Input()
  public admins: Admin[] = [];

  @Output()
  public selected: EventEmitter<Admin> = new EventEmitter<Admin>();

  constructor(
    private router: Router,
    private service: AdminsService
  ) { }

  ngOnInit(): void {
  }

  public adminSelected(admin: Admin): void {
    this.selected.emit(admin);
  }

  public deleteById(id: number): void {
    this.service.deleteById(id).subscribe( user => {
      this.redirectTo('admins');
    });
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

}
