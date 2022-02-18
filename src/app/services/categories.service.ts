import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const baseUrl = "http://localhost:3000/api/categories";
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private httpClient: HttpClient) { }

  getCategories() : Observable<string[]> {
    return this.httpClient.get(baseUrl).pipe(map((x:any) => {
      return x.map((elem: any) => elem as string);
    }))
  }
}
