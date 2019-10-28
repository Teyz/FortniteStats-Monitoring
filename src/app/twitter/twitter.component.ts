import { Component, OnInit } from '@angular/core';
import { ApiService } from './twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(public FNRBapi: ApiService) { }

  ngOnInit() {
    this.FNRBapi.getStatus().subscribe((data) => {
      console.log(data);
    });
  }

}
