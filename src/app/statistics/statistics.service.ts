import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(public http: HttpClient) { }

  private linkGetAccountStats = 'http://localhost:8080/stats';

  getAccountStats(){
    return this.http.get(this.linkGetAccountStats);
  }
}
