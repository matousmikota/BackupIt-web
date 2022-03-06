import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './admins.component';
import {AdminsEditComponent} from '../admins/admins-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admins'
    },
    children: [
      {
        path: '',
        redirectTo: 'admins'
      },
      {
        path: 'admins',
        component: AdminsComponent,
        data: {
          title: 'Admins'
        }
      },
      {
        path: 'admins/:id',
        component: AdminsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule {} //
