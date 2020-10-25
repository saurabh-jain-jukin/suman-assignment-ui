import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { CountryList } from '../model/country-list';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {catchError, finalize, tap, takeUntil} from 'rxjs/internal/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public items: CountryList;
  public term: string;
  public marked: boolean;
  public hideloader: boolean;
  constructor(public backendService: BackendService, public route: Router, public location: Location) { 
    this.marked = false;
  }

  ngOnInit(): void {
   this.getCountryList();
   this.hideloader =true;
  }

getCountryList(): void{
 this.backendService.getCountryList().then(
    item => {
    this.items = item;
    this.hideloader =false;
    },
    err => {
    console.log(err);
    });
  }

  getCountryDetailsByCode(code: any): void{
    this.backendService.getCountryDetailsByCode(code).then(
       item => {
       this.backendService.data = item;
       this.route.navigate(['/countries-details']);
       },
       err => {
       console.log(err);
       });
     }

     markFavourite(name: string, marked: boolean): any{
      this.backendService.getCountryDetailsByName(name).then(
        item => {
       if (item.favourite === false){
         marked = true;
       }
       else {marked = false; }});
      this.backendService.markFavourite(name, marked).pipe().subscribe();
     }

     navigateBack(): void {
      this.location.back();
     }

}
