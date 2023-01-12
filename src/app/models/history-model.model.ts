import {Timestamp} from "rxjs";
import {UserModel} from "./user-model.model";
import {LocalStock} from "./local-stock.model";

export class HistoryModel {
  idSearch?: string;
  searchTimestamp?: string;
  usSt?: string;
  local_st?: string;
  user?: UserModel;
  local_stock?: LocalStock;

  constructor(id: string, time: string, us: string, lst: string) {
    this.idSearch=id;
    this.searchTimestamp= time;
    this.usSt=us;
    this.local_st=lst;
  }
}

