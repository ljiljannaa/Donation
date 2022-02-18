import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonorList } from '../model/donor-list.model';
import {map} from 'rxjs/operators';
import { Donor } from '../model/donor.model';


const baseUrl = "http://localhost:3000/api/donors";
@Injectable({
  providedIn: 'root'
})
export class DonorsService {

  constructor(private httpClient: HttpClient) { }



  getAll(params?: any) : Observable<DonorList> {

   let queryParams = {}

   if(params) {
     queryParams = {
       params: new HttpParams()
       .set("page", params.page || "")
       .set("pageSize", params.pageSize || "")
       .set("filter", params.filter && JSON.stringify(params.filter) || "")
     }
   }
    return this.httpClient.get(baseUrl, queryParams).pipe(map((x:any) => {
      return new DonorList(x);
    }))
  }

  getOne(donorId: number) : Observable<Donor> {
    return this.httpClient.get(`${baseUrl}/${donorId}`).pipe(map((x:any) => {
      return new Donor(x);
    }))
  }

  postDonor(donor: Donor) : Observable<Donor> {
    return this.httpClient.post(baseUrl, donor).pipe(map((x:any) => {
      return new Donor(x);
    }))
  }
  
  putDonor(donorId: number, donor: Donor) : Observable<Donor> {
    return this.httpClient.put(`${baseUrl}/${donorId}`, donor).pipe(map((x:any) => {
      return new Donor(x);
    }))
  }
}
