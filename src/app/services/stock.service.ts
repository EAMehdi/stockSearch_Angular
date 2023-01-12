import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BestMatch} from "../models/best-match.model";



@Injectable({
  providedIn: 'root'
})

export class StockService {

  apiKey="ASZB8S2555BX2X9H"

  constructor(private http: HttpClient) { }

  getSuggestions(term: string): Observable<BestMatch>{
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${term}&apikey=${this.apiKey}`;
    return this.http.get<BestMatch>(url);
  }

  getStockInfo(stock_id: string, date_s: string): Observable<any>{
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stock_id}&apikey=${this.apiKey}`;
    console.log(url)
    return this.http.get<any>(url);
  }

}
