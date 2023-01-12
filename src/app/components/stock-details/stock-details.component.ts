import {Component, Input, OnInit} from '@angular/core';
import {Stock} from "../../models/stock.model";
import {StockService} from "../../services/stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ResultMatch} from "../../models/result-match.model";

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit{
  stockId='';
  date_start='';
  stockDisplayed!: Stock;

  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.stockId = this.route.snapshot.paramMap.get("id") as string;
    this.date_start = this.route.snapshot.paramMap.get("date") as string;
    this.getStockData(this.stockId, this.date_start);

  }

  getStockData(stock_key: string, date_st: string): void{

    this.stockService.getStockInfo(stock_key,date_st).subscribe(
      {next: (data) => {
//        const date = '2023-01-10'; // set date here
        this.stockDisplayed=data['Time Series (Daily)'][date_st];
      }}
    );
  }




}
