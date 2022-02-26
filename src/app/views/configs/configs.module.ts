import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ConfigsComponent } from './configs.component';
import { SourcesComponent } from './sources.component';
import { DestinationsComponent } from './destinations.component';

// Configs routing
import { ConfigsRoutingModule } from './configs-routing.module';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    ConfigsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
    ConfigsComponent,
    SourcesComponent,
    DestinationsComponent
  ]
})
export class ConfigsModule { }
