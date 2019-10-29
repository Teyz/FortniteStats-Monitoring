import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(public http: HttpClient) { }

  private linkStatus = 'http://localhost:8080/status';
  private linkPostTweet = 'http://localhost:8080/postTweet';
  private linkGetLastTweet = 'http://localhost:8080/getLastTweet';
  private linkGetAllTweet = 'http://localhost:8080/getAllTweet';

  getStatus(){
    return this.http.get(this.linkStatus);
  }

  postTweet(text){
    return this.http.get(this.linkPostTweet + "?message=" +text);
  }

  getLastTweet(){
    return this.http.get(this.linkGetLastTweet);
  }

  getAllTweet(){
    return this.http.get(this.linkGetAllTweet);
  }
}
