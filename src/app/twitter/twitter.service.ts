import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(public http: HttpClient) { }

  private linkStatus = 'http://localhost:8080/status';
  private linkPostTweet = 'http://localhost:8080/postTweet'

  getStatus() {
    return this.http.get(this.linkStatus);
  }

  postTweet(text){
    this.http.get(this.linkPostTweet + "?" +text);
  }
}
