import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

  constructor(public http: HttpClient) { }

  private linkStatus = 'http://localhost:8080/status';
  
  getStatus() {
      return this.http.get(this.linkStatus);
    }
}
