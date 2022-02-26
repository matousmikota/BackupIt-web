import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdminsComponent } from './admins.component';
// Configs routing
import { AdminsRoutingModule } from './admins-routing.module';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    AdminsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
    AdminsComponent
  ]
})
export class AdminsModule { } //
