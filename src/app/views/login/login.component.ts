import {Component, OnInit} from '@angular/core';
import {Admin} from '../../Models/admin';
import {Router} from '@angular/router';
import {AdminsService} from '../../services/admins-service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  public data: Admin[] = [];
  public authenticated: boolean = false;
  public form = this.fb.group({
    login: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AdminsService) { }

  public autheticate(): void {
    this.login(this.verifyCredentials());
  }

  public verifyCredentials(): boolean {
    /*const search: Admin = this.data.find((admin) => {
      return admin.login === this.form.value.login && admin.password === this.form.value.password;
    });*/
    const result: boolean = this.data.some((admin) => {
      return admin.login === this.form.value.login && admin.password === this.form.value.password;
    });

      if (result) {
      return true;
    } else {
      return false;
    }
  }

  public login(auth: boolean): void {
    if (auth) {
      this.router.navigate(['/dashboard']);
    }
  }


  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.data = data);
  }

}
