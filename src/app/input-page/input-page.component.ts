import { Component, OnInit } from '@angular/core';
import { CountryDetails } from '../model/country-details';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

 // public items: CountryDetails;
  public code: string;
  public name: string;
  public showMsg = false;
  public error: string;

  constructor(public backendService: BackendService, public route: Router, public location: Location) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getCountryDetailsByCode(){
    this.backendService.getCountryDetailsByCode(this.code).then(
       item => {
       this.backendService.data = item;
       this.route.navigate(['/countries-details']);
       },
       err => {
       console.log(err);
       this.error = "No country found with country code "+this.code;
       this.showMsg = true;
       });
     }

     // tslint:disable-next-line:typedef
     getCountryDetailsByName(){
       this.backendService.getCountryDetailsByName(this.name).then(
          item => {
            this.backendService.data = item;
            this.route.navigate(['/countries-details']);
          },
          err => {
          console.log(err);
          this.error = "No country found with country name "+this.name;
          this.showMsg = true;
          });
        }

        navigateBack(): void {
          this.location.back();
         }
}
