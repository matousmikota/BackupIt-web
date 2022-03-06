import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Admin} from '../../Models/admin';


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

  constructor() { }

  ngOnInit(): void {
  }

  public adminSelected(admin: Admin): void {
    this.selected.emit(admin);
  }

}
