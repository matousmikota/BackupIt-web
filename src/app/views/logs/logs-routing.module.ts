import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from './logs.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Logs'
    },
    children: [
      {
        path: '',
        redirectTo: 'logs'
      },
      {
        path: 'logs',
        component: LogsComponent,
        data: {
          title: 'Logs'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule {} //
