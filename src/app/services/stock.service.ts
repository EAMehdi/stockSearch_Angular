import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BestMatch} from "../models/best-match.model";



@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) { }

  getSuggestions(term: string): Observable<BestMatch>{
    const apiKey = '72W5BK5R5QKEZ9VS';
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=${apiKey}`;
    return this.http.get<BestMatch>(url);
  }

  getStockInfo(stock_id: string, date_s: string): Observable<any>{
    const apiKey = '72W5BK5R5QKEZ9VS';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock_id}&apikey=${apiKey}`;
    console.log(url)
    return this.http.get<any>(url);
  }

}
