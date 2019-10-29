import { Component, OnInit } from '@angular/core';
import { ApiService } from './twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  private text: string;
  private actionText: string;
  private action_classes = {};
  private lastTweet = {};
  private allTweet = {};

  constructor(public FNRBapi: ApiService) { }

  ngOnInit() {
    this.text='';

    this.FNRBapi.getLastTweet().subscribe((data) => {
      this.lastTweet = data;
    });

    this.FNRBapi.getAllTweet().subscribe((data) => {
      this.allTweet = data;
    });
  }

  postTweet(text){
    this.FNRBapi.postTweet(text).subscribe((data) => {
      this.action_classes = data;
      this.text = '';
      setTimeout(() => {
        this.actionText = '';  
        this.action_classes = '';
      }, 5000);
    });
  }
}
