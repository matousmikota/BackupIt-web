import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clients'
    },
    children: [
      {
        path: '',
        redirectTo: 'clients'
      },
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Clients'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {} //