import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigsComponent} from './configs.component';
import {DestinationsComponent} from './destinations.component';
import {ConfigCreatorComponent} from './config-creator';
import {ConfigsEditComponent} from './configs-edit.component';
import {DestinationsEditComponent} from './destinations-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Configs'
    },
    children: [
      {
        path: '',
        redirectTo: 'configs'
      },
      {
        path: 'configs',
        component: ConfigsComponent,
        data: {
          title: 'Configs'
        }
      },
      {
        path: 'destinations',
        component: DestinationsComponent,
        data: {
          title: 'Destinations'
        }
      },
      {
        path: 'configs/destinations/:id',
        component: DestinationsEditComponent
      },
      {
        path: 'config-creator',
        component: ConfigCreatorComponent,
        data: {
          title: 'Config Creator'
        }
      },
      {
        path: ':id',
        component: ConfigsEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigsRoutingModule {}
