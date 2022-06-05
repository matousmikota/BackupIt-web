import { Component, OnInit } from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {AdminsService} from '../../services/admins-service';
import {CronOptions} from 'cron-editor/lib/CronOptions';


// import { myApp } from 'angular-cron-gen';

@Component({
  templateUrl: 'admins.component.html',
  styleUrls: ['admins.component.scss']
})


export class AdminsComponent implements OnInit {

  public data: Admin[] = [];

  public adminForm = this.fb.group({
    id: [0],
    name: [''],
    login: [''],
    password: [''],
    send_report_email: [false],
    email_cron: [''],
    email: ['']
    }
  );

  public cronExpression = '0/10 * 1/1 * ?';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '10:00:00',
    use24HourTime: true,

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: true,
    hideAdvancedTab: true,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true
  };

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
    this.admin.password = this.adminForm.value.password;
    this.admin.send_report_email = this.adminForm.value.send_report_email;
    this.admin.email = this.adminForm.value.email;
    this.cronExpression = this.cronExpression.replace('0/', '*/');
    this.cronExpression = this.cronExpression.replace('1/1 *', '* *');
    this.cronExpression = this.cronExpression.replace('?', '*');
    this.cronExpression = this.cronExpression.replace('*/0 * * * *', '*/1 * * * *');
    this.admin.email_cron = this.cronExpression;

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
