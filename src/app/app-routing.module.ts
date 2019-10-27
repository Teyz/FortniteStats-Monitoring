import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterComponent } from './twitter/twitter.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    component: TwitterComponent,
    data: {
        title: 'Dashboard - Twitter'
    }
  },
  {
    path: 'twitter',
    component: TwitterComponent,
    data: { 
      title: 'Dashboard - Twitter' 
    }
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    data: { 
      title: 'Statistics - Twitter' 
    }
  },
  {
    path: 'status',
    component: StatusComponent,
    data: { 
      title: 'Status' 
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
