import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { LogsComponent } from './logs.component';
// Configs routing
import { LogsRoutingModule } from './logs-routing.module';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    LogsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
    LogsComponent
  ]
})
export class LogsModule { } //
