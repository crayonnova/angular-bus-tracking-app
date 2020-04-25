import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  apiUrl = "https://api.covid19api.com/summary"
  
  constructor( private http : HttpClient ) { 

  }

  getSummary() {
    return this.http.get(this.apiUrl)
  }
  
}
