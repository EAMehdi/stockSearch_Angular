import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BestMatch} from "../models/best-match.model";
import any = jasmine.any;

@Injectable({
  providedIn: 'root'
})
export class StockDataService {


  constructor(private http: HttpClient) { }


//  search/{username}/{stock_key}

//  http://localhost:52001/searches/
  saveSearch(stock_key: string,username: string): void{
    const url = `localhost:52001/searches/${stock_key}/${username}`;
  //.put(`${baseUrl}/${id}`
    this.http.post<any>(url,null);
  }


}
