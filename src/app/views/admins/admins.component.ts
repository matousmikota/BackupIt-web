import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AdminsService} from '../../services/admins-service';


// import { myApp } from 'angular-cron-gen';

@Component({
  templateUrl: 'admins.component.html'
})


export class AdminsComponent implements OnInit {

  public data: Admin[] = [];

  public adminForm = this.fb.group({
    id: [0],
    name: [''],
    login: [''],
    password: [''],
    send_report_email: [''],
    email_cron: ['']
    }
  );

  public admin: Admin = new Admin();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminsService) { }


  isCollapsed = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  onSubmit() {
    this.admin.name = this.adminForm.value.name;
    this.admin.login = this.adminForm.value.login;
    this.admin.email_cron = this.adminForm.value.email_cron;
    this.admin.password = this.adminForm.value.password;
    this.admin.send_report_email = this.adminForm.value.send_report_email;

    console.warn(this.admin);

    this.service.save(this.admin).subscribe( user => {
      this.router.navigate(['admins']);

    });
    this.redirectTo('admins');
  }



  ngOnInit(): void {
    // this.data = this.service.findAll();
    this.service.findAll().subscribe(data => this.data = data);
  }

  public showAdmin(admin: Admin): void {
    this.router.navigate(['admins', admin.id]);
  }
  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }
}
