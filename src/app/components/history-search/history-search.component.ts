import {Component, OnInit} from '@angular/core';
import {HistoryModel} from "../../models/history-model.model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history-search',
  templateUrl: './history-search.component.html',
  styleUrls: ['./history-search.component.css']
})
export class HistorySearchComponent implements OnInit{

  listSearch?: HistoryModel[];

  constructor(private historyService : HistoryService) {
  }

  ngOnInit() {
    //this.getHistory()
  }

  getHistory():void{
    this.historyService.getAllHistorySearch().subscribe({
      next: (data) => {
        console.log(data)
        this.listSearch= data
      }
    })
  }

}
