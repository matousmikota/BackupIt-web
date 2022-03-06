import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {AdminsService} from '../../services/admins-service';
// import { myApp } from 'angular-cron-gen';

@Component({
  templateUrl: 'admins.component.html'
})


export class AdminsComponent implements OnInit {

  public data: Admin[] = [];

  constructor(
    private router: Router,
    private service: AdminsService) { }

  isCollapsed = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  ngOnInit(): void {
    this.data = this.service.findAll();
  }

  public showAdmin(admin: Admin): void {
    this.router.navigate(['admins', admin.id]);
  }
}
