import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service'
@Component({
  selector: 'app-covid-api',
  templateUrl: './covid-api.component.html',
  styleUrls: ['./covid-api.component.css'],
  providers : [CovidService]
})
export class CovidApiComponent implements OnInit {
  loading : boolean = true;
  data : any;
  myanmar : any;
  constructor(private covidService : CovidService) { }

  ngOnInit() {
    return this.covidService.getSummary()
    .subscribe( data => {
      this.data = data; 
      this.myanmar = this.data.Countries[151]
      this.loading = false;
     
    })
    
  }


}
