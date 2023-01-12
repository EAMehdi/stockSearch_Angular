import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  typedUsername='';

  constructor(private localStore: LocalService) {
  }

  ngOnInit(): void {
    this.localStore.saveData('username', 'anonymous');
    console.log('decrpted data ', this.localStore.getData('id'));
  }

  saveUsername(){
    if(this.typedUsername){
      this.typedUsername="anonymous"
    }
    this.localStore.saveData("username",this.typedUsername);

  }
}
