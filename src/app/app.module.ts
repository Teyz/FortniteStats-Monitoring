import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';

import { AppComponent } from './app.component';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { TwitterComponent } from './twitter/twitter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TwitterComponent,
    StatisticsComponent,
    StatusComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
