import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  constructor(private router: Router) {}

  goToDashboard(): void {
    this.router.navigate([`dashboard`]);
  }
  /**goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }*/
}



