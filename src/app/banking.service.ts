import { Injectable } from '@angular/core';
import {Admin} from './admin';
import { Openaccount } from './openaccount';
import {Addbeneficiary} from './addbeneficiary';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { CustomerRequests } from "./customer-requests";
import { Impstransfer } from "./impstransfer";
	import {  Observable, throwError } from 'rxjs';
  import {AccountHolderinsert} from "./account-holderinsert";
import {AccountHolder} from "./account-holder";

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
  custlogin(accountholder):Observable<AccountHolder>
  {
    console.log("INSIDE SERVICE",accountholder);
    var req = this.httpClient.post<AccountHolder>(this.apiServer + '/Account_HolderLogin/',JSON.stringify(accountholder), this.httpOptions)
    console.log(req);
    return(req);
  }
  custblocked(accountholder): Observable<AccountHolder> {
   // console.log("INSIDE SERVICE",accountholder);
    return this.httpClient.post<AccountHolder>(this.apiServer + '/AccountBlock/', JSON.stringify(accountholder), this.httpOptions)
  }
  create(Customer): Observable<Openaccount> {
     console.log("INSIDE SERVICE",Customer);
     return this.httpClient.post<Openaccount>(this.apiServer + '/OpenAccount/', JSON.stringify(Customer), this.httpOptions)
 }
 getAll(): Observable<CustomerRequests[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<CustomerRequests[]>(this.apiServer + '/AdminDashboard/')
}
getAll1(): Observable<Openaccount[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<Openaccount[]>(this.apiServer + '/OpenAccount/')
}
getAllaccountholders(): Observable<AccountHolder[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<AccountHolder[]>(this.apiServer + '/Account_HolderLogin/')
}
getAllBeneficiaries(): Observable<Addbeneficiary[]> {
  //console.log("INSIDE SERVICE");
  return this.httpClient.get<Addbeneficiary[]>(this.apiServer + '/AddBeneficiaries/')
}
getById(account_no): Observable<CustomerRequests> {
  return this.httpClient.get<CustomerRequests>(this.apiServer + '/Account_HolderLogin/' + account_no)
}
getreleventbeneficiary(beneficiaries):Observable<Addbeneficiary>
  {
    console.log("INSIDE SERVICE",beneficiaries);
    return this.httpClient.post<Addbeneficiary>(this.apiServer + '/GetRelevantBeneficiaries/',JSON.stringify(beneficiaries), this.httpOptions)
    // console.log(req);
    // return(req);
  }
approve(service_ref_no, Customer): Observable<CustomerRequests> {
  return this.httpClient.put<CustomerRequests>(this.apiServer + '/Account_HolderInsert/' + service_ref_no, JSON.stringify(Customer), this.httpOptions)
}
approvechangestatus(Customer): Observable<Openaccount> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Openaccount>(this.apiServer + '/ApproveAccount/', JSON.stringify(Customer), this.httpOptions)
}
declineaccount(Customer): Observable<Openaccount> {
  console.log("INSIDE SERVICE",Customer);
  return this.httpClient.post<Openaccount>(this.apiServer + '/DeclineAccount/', JSON.stringify(Customer), this.httpOptions)
}

addben(Beneficiary): Observable<Addbeneficiary> {
  console.log("INSIDE SERVICE",Beneficiary);
  return this.httpClient.post<Addbeneficiary>(this.apiServer + '/AddBeneficiaries/', JSON.stringify(Beneficiary), this.httpOptions)
}
imps(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  return this.httpClient.post<Impstransfer>(this.apiServer + '/Impstransfer/', JSON.stringify(impstransaction), this.httpOptions)
}
neft(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  return this.httpClient.post<Impstransfer>(this.apiServer + '/Nefttransfer/', JSON.stringify(impstransaction), this.httpOptions)
}
rtgs(impstransaction): Observable<Impstransfer> {
  console.log("INSIDE SERVICE",impstransaction);
  return this.httpClient.post<Impstransfer>(this.apiServer + '/Rtgstransfer/', JSON.stringify(impstransaction), this.httpOptions)
}
Accountholder(Accountholder): Observable<AccountHolderinsert> {
  console.log("INSIDE SERVICE",Accountholder);
  return this.httpClient.post<AccountHolderinsert>(this.apiServer + '/Account_HolderInsert/', JSON.stringify(Accountholder), this.httpOptions)
}
}
