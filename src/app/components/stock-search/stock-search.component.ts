import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StockService} from "../../services/stock.service";
import {ResultMatch} from "../../models/result-match.model";


@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.css']


})
export class StockSearchComponent implements OnInit{
  listResult?: ResultMatch[];
  //currentTutorial:  = {};
  currentStock?: ResultMatch;
  currentIndex = -1;
  day_before: number ;
  title = '';
  date_start='';
  @Output() date_start_sent = new EventEmitter<any>();


  constructor(private stockService: StockService) {
    const d = new Date();
    this.day_before = d.setDate(d.getDate()-2);
    console.log(d.setDate(d.getDate()-2));

  }

  ngOnInit() {
    this.suggestionList();
  }

  suggestionList(): void{
    this.stockService.getSuggestions(this.title).subscribe({
      next: (data) => {
        this.listResult = data.bestMatches
      }
    })
    console.log(this.listResult);
  }

  setActiveStock(stock_key: ResultMatch, index: number): void {
    this.currentStock = stock_key;
    this.currentIndex = index;
  }





}
