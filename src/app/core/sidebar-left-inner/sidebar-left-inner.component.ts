import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../twitter/twitter.service';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent implements OnInit {

  public status = {};

  constructor(
    public FNRBapi: ApiService
  ) {}

  ngOnInit() {
    this.FNRBapi.getStatus().subscribe((data) => {
      this.status = data;
    });
  }
}
