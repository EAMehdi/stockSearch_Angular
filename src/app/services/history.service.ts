import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoryModel} from "../models/history-model.model";
import {Observable} from "rxjs";
import {BestMatch} from "../models/best-match.model";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {


  constructor(private http: HttpClient) { }

  getAllHistorySearch(): Observable<HistoryModel[]>{
    const url = `https://localhost:52001/searches/`;
    console.log(url)
    return this.http.get<HistoryModel[]>(url);
  }
}
