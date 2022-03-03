import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { SettingsComponent } from './settings.component';
// Configs routing
import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    SettingsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
    SettingsComponent
  ]
})
export class SettingsModule { } //
