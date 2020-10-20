import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OverallReport} from './model/overall-report';
import { Http, Response } from '@angular/http';
import {CountryList} from './model/country-list';
import {CountryDetails} from './model/country-details';



@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: Http) { }

  // modify this so it points to your API
  public endpoint = '/api/';

    findAll(): Promise<OverallReport> {
      return this.http.get(this.endpoint + "getOverAllReport")
      .toPromise()
      .then(response => response.json() as OverallReport)
      .catch(this.handleError);
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
        }

        getCountryList(): Promise<CountryList> {
          return this.http.get(this.endpoint + "getCountryList")
          .toPromise()
          .then(response => response.json() as CountryList[])
          .catch(this.handleError);
          }

      getCountryDetailsByCode():Promise<CountryDetails> {
        return this.http.get(this.endpoint + "getDataByCountryCode?code=AF")
        .toPromise()
        .then(response => response.json() as CountryDetails)
        .catch(this.handleError);
        }

        getCountryDetailsByName():Promise<CountryDetails> {
          return this.http.get(this.endpoint + "getDataByCountryName?country=Afghanistan")
          .toPromise()
          .then(response => response.json() as CountryDetails)
          .catch(this.handleError);
          }
}



   