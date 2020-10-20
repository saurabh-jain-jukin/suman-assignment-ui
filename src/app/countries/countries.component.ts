import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { CountryList } from '../model/country-list';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public items : CountryList;
  constructor(public backendService: BackendService) { }

  ngOnInit(): void {
   this.getCountryList();
  }

getCountryList(){
 this.backendService.getCountryList().then(
    item => {
    this.items = item;
    },
    err => {
    console.log(err);
    });
  }

}
