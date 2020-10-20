import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { CountryDetails } from '../model/country-details';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  public items : CountryDetails;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
   this.getCountryDetailsByCode();
  }

getCountryDetailsByCode(){
 this.backendService.getCountryDetailsByCode().then(
    item => {
    this.items = item;
    },
    err => {
    console.log(err);
    });
  }

  getCountryDetailsByName(){
    this.backendService.getCountryDetailsByName().then(
       item => {
       this.items = item;
       },
       err => {
       console.log(err);
       });
     }

}
