import { Component, OnInit, Input} from '@angular/core';
import { BackendService } from '../backend.service';
import { CountryDetails } from '../model/country-details';
import {CommentsRequest} from '../model/comments-request';
import { Router, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import {catchError, finalize, tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
 public items: CountryDetails;
  public comment: string;
  private data: CommentsRequest;
  public showMsg = false;


  constructor(public backendService: BackendService, public location: Location) { }
ngOnInit(): void{
this.items = this.backendService.data;
}

addComment(): void{
  this.backendService.addComments(this.comment , this.items.country).pipe(
    tap(item => {
      this.items = item;
      this.showMsg = true;
      this.comment = "";
    },
    err => {
    console.log(err);
    })).subscribe();
}

navigateBack(): void {
 this.location.back();
}

  }

