import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Configs routing
import { ConfigsRoutingModule } from './configs-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    ConfigsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
  ]
})
export class ConfigsModule { }
