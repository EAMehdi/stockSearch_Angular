import {Component, OnInit} from '@angular/core';
import {LocalService} from "./services/local.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stockSearch_Angular';
  constructor(private localStore: LocalService) {

    }

    ngOnInit(): void {
      if(this.localStore.getData('username') != "anonymous"){
        console.log('Username : ', this.localStore.getData('username'));
      }
      this.localStore.saveData('username', 'anonymous');
    }

}
