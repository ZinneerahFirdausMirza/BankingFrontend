import { Injectable } from '@angular/core';
import {Admin} from './admin';
import { Openaccount } from './openaccount';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"

	import {  Observable, throwError } from 'rxjs';
	import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private apiServer = "http://localhost:62705/Api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  login(admin):Observable<Admin>
  {
    //console.log("INSIDE SERVECE",user1);
    var req = this.httpClient.post<Admin>(this.apiServer + '/Adminslogin/',JSON.stringify(admin), this.httpOptions)
    console.log(req);
    return(req);
  }
  create(Customer): Observable<Openaccount> {
     console.log("INSIDE SERVECE",Customer);
     return this.httpClient.post<Openaccount>(this.apiServer + '/OpenAccount/', JSON.stringify(Customer), this.httpOptions)
 }
}
