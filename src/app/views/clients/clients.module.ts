import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ClientsComponent } from './clients.component';
// import {ClientsTableComponent} from '../../components/clients-table/clients-table.component';
// Configs routing
import { ClientsRoutingModule } from './clients-routing.module';
import {ClientsTableComponent} from '../../components/clients-table/clients-table.component';


@NgModule({
  imports: [
    CollapseModule,
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule
  ],
  declarations: [
    ClientsComponent,
    ClientsTableComponent
  ]
})
export class ClientsModule { } //
