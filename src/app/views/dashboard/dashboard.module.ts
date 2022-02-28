import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TabsModule} from 'ngx-bootstrap/tabs';
// import { ClientsComponent } from '../../views/clients/clients.component';
// import {ClientsModule} from '../clients/clients.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TabsModule,
    // ClientsModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
