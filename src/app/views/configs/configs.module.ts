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
import {ConfigsTableComponent} from '../../components/configs-table/configs-table.component';
import {ConfigsEditComponent} from './configs-edit.component';
import {DestinationsTableComponent} from '../../components/destinations-table/destinations-table.component';
import {DestinationsEditComponent} from './destinations-edit.component';
import {ConfigsService} from '../../services/configs-service';
import {Destination} from '../../Models/destination';
// import {CronEditorModule} from 'ngx-cron-editor';
import { CronEditorModule } from 'cron-editor';
import { CronGeneratorComponent} from '../../components/cron-generator/cron-generator.component';
import {ConfigAssignComponent} from './config-assign';
import {ClientsCheckboxListComponent} from '../../components/clients-checkbox-list/clients-checkbox-list.component';
import {ConfigsSelectListComponent} from '../../components/configs-select-list/configs-select-list.component';


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
        ReactiveFormsModule,
        CronEditorModule
    ],
  declarations: [
    ConfigsComponent,
    SourcesComponent,
    DestinationsComponent,
    ConfigCreatorComponent,
    DestinationsCheckboxListComponent,
    ConfigsTableComponent,
    ConfigsEditComponent,
    DestinationsTableComponent,
    DestinationsEditComponent,
    CronGeneratorComponent,
    ConfigAssignComponent,
    ClientsCheckboxListComponent,
    ConfigsSelectListComponent
  ]
})
export class ConfigsModule { }
