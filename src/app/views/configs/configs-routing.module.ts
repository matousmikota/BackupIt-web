import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesComponent } from './sources.component';
import {ConfigsComponent} from './configs.component';
import {DestinationsComponent} from './destinations.component';

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
        path: 'sources',
        component: SourcesComponent,
        data: {
          title: 'Sources'
        }
      },
      {
        path: 'destinations',
        component: DestinationsComponent,
        data: {
          title: 'Destinations'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigsRoutingModule {}
