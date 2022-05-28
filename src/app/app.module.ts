import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {HttpClientModule} from '@angular/common/http';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { CronEditorModule } from 'cron-editor';

import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';
registerLocaleData(localeCs);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import {JwtModule} from '@auth0/angular-jwt';


// import {ClientsComponent} from './views/clients/clients.component';

function tokenGetter() {
  console.log('xxx');
  return sessionStorage.getItem('token');
}

@NgModule({
  imports: [
    CronEditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      },
    }),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent
  ],
  providers: [,
    {provide: LOCALE_ID, useValue: 'cs-CZ'},
    IconSetService,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
