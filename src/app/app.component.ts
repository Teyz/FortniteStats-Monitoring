import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { ApiService } from './twitter/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;
  public status = {};

  constructor(
    private layoutService: LayoutService,
    public FNRBapi: ApiService
  ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
    this.FNRBapi.getStatus().subscribe((data) => {
      this.status = data;
    });
  }
}
