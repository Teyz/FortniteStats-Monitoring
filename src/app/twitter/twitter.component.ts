import { Component, OnInit } from '@angular/core';
import { ApiService } from './twitter.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  private text: string;
  private actionText: string = 'test';

  constructor(public FNRBapi: ApiService) { }

  ngOnInit() {
    this.text='';
    this.FNRBapi.getStatus().subscribe((data) => {
      console.log(data);
    });
  }

  postTweet(text){
    console.log(text);
    this.FNRBapi.postTweet(text).subscribe((data) => {
      this.text = '';
      this.actionText = 'Sucess';
      console.log(data);
    });
  }
}
