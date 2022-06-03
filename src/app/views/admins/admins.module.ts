import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdminsComponent } from './admins.component';
// Configs routing
import { AdminsRoutingModule } from './admins-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {AdminsTableComponent} from '../../components/admins-table/admins-table.component';
import {AdminsEditComponent} from './admins-edit.component';

// import { myApp } from 'angular-cron-gen';

@NgModule({
    imports: [
        CollapseModule,
        CommonModule,
        AdminsRoutingModule,
        FormsModule,
        ChartsModule,
        BsDropdownModule,
        ButtonsModule,
        TabsModule,
        ReactiveFormsModule
    ],
  declarations: [
    AdminsComponent,
    AdminsTableComponent,
    AdminsEditComponent
  ]
})
export class AdminsModule { } //
