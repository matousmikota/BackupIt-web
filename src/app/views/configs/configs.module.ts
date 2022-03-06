import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ConfigsComponent } from './configs.component';
import { SourcesComponent } from './sources.component';
import { DestinationsComponent } from './destinations.component';
import { ConfigCreatorComponent } from './config-creator';

// Configs routing
import { ConfigsRoutingModule } from './configs-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BrowserModule} from '@angular/platform-browser';
import {DestinationsCheckboxListComponent} from '../../components/destinations-checkbox-list/destinations-checkbox-list.component';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    ConfigsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule,
    TabsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ConfigsComponent,
    SourcesComponent,
    DestinationsComponent,
    ConfigCreatorComponent,
    DestinationsCheckboxListComponent
  ]
})
export class ConfigsModule { }
