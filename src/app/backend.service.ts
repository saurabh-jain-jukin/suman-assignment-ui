import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OverallReport} from './model/overall-report';
import { Http, Response } from '@angular/http';
import {CountryList} from './model/country-list';
import {CountryDetails} from './model/country-details';
import {CommentsRequest} from './model/comments-request';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: Http, private httpClient: HttpClient) { }

  // modify this so it points to your API
  public endpoint = '/api/';

  public data: CountryDetails;
  public commentRequest: CommentsRequest;

    findAll(): Promise<OverallReport> {
      return this.http.get(this.endpoint + 'getOverAllReport')
      .toPromise()
      .then(response => response.json() as OverallReport)
      .catch(this.handleError);
      }

      private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
        }

        getCountryList(): Promise<CountryList> {
          return this.http.get(this.endpoint + 'getCountryList')
          .toPromise()
          .then(response => response.json() as CountryList[])
          .catch(this.handleError);
          }

      getCountryDetailsByCode(data: any): Promise<CountryDetails> {
        return this.http.get(this.endpoint + 'getDataByCountryCode?code=' + data)
        .toPromise()
        .then(response => response.json() as CountryDetails)
        .catch(this.handleError);
        }

        getCountryDetailsByName(data: any): Promise<CountryDetails> {
          return this.http.get(this.endpoint + 'getDataByCountryName?country=' + data)
          .toPromise()
          .then(response => response.json() as CountryDetails)
          .catch(this.handleError);
          }

          addComments(comments: String, name: String ): Observable<CountryDetails>{
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
              })
            };
            const data = {countryName: name, comment: comments};
            const body = JSON.stringify(data);
            return this.httpClient.put<CountryDetails>(this.endpoint + 'addComment', body, httpOptions)
            .pipe(tap(response => JSON.stringify(response)), catchError(this.handleError));
          }




          markFavourite(name: string, marked: boolean): Observable<boolean>{
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
              })
            };
            return this.http.put(this.endpoint + 'updateFavourite?countryName=' + name + '&updateTo=' + marked, httpOptions)
            .pipe(tap(response => JSON.stringify(response)), catchError(this.handleError));
}}
