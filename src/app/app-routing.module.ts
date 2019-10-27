import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard - Twitter'
    },
    children: [
      {
        path: '',
        component: TwitterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
