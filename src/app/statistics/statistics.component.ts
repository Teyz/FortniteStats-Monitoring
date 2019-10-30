import { Component, OnInit } from '@angular/core';
import { ApiService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  private accountStats = {};

  constructor(public FNRBapi: ApiService) { }

  ngOnInit() {

    this.FNRBapi.getAccountStats().subscribe((data) => {
      this.accountStats = data;
      console.log(data);
    });
  }

}
